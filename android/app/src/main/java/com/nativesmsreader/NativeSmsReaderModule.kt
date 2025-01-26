import android.Manifest
import android.annotation.SuppressLint
import android.content.BroadcastReceiver
import android.content.ContentResolver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.pm.PackageManager
import android.database.Cursor
import android.os.Build
import android.provider.Telephony
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.core.app.ActivityCompat
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableArray
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.smsreader.NativeSmsReaderSpec

class SmsReceiver(
    private val reactContext: ReactApplicationContext,
    private val from: String?,
    private val callback: Callback?
) :
    BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val pdus = intent.extras?.get("pdus") as Array<*>?

        pdus?.forEach { pdu ->
            val smsMessage = Telephony.Sms.Intents.getMessagesFromIntent(intent)[0]
            val sender = smsMessage.displayOriginatingAddress
            val body = smsMessage.messageBody
            val date = smsMessage.timestampMillis

            // Check if the incoming message is from the specified sender (if any)
            if (from == null || sender == from) {
                val messageDetails = Arguments.createMap()
                messageDetails.putString("address", sender)
                messageDetails.putString("body", body)
                messageDetails.putDouble("date", date.toDouble())
                try {
//                    callback?.invoke(messageDetails)
                    val reactContext = reactContext
                    reactContext
                        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                        .emit("onSmsReceived", messageDetails)
                } catch (e: Exception) {
                    Log.d("log", "Loi roi man: " + e.message)
                }
            }
        }
    }
}

class NativeSmsReaderModule(reactContext: ReactApplicationContext) :
    NativeSmsReaderSpec(reactContext) {
    override fun getName() = NAME
    private var smsReceiver: SmsReceiver? = null

    private fun checkPermission(permission: String): Boolean {
        return ActivityCompat.checkSelfPermission(
            reactApplicationContext,
            permission
        ) == PackageManager.PERMISSION_GRANTED
    }

    private fun requestPermission(permission: String) {
        ActivityCompat.requestPermissions(
            reactApplicationContext.currentActivity!!,
            arrayOf(permission),
            1 // Request code for permission
        )
    }

    @RequiresApi(Build.VERSION_CODES.P)
    private fun ensurePermission() {
        if (!checkPermission(Manifest.permission.READ_SMS)) requestPermission(Manifest.permission.READ_SMS)
        if (!checkPermission(Manifest.permission.RECEIVE_SMS)) requestPermission(Manifest.permission.RECEIVE_SMS)
        if (!checkPermission(Manifest.permission.FOREGROUND_SERVICE)) requestPermission(Manifest.permission.FOREGROUND_SERVICE)

    }

    @RequiresApi(Build.VERSION_CODES.P)
    @SuppressLint("Recycle")
    override fun getMessages(from: String?, take: Double): WritableArray {
        ensurePermission()
        val writableArray = Arguments.createArray()

        val contentResolver: ContentResolver = reactApplicationContext.contentResolver;
        val cursor: Cursor? = contentResolver.query(
            Telephony.Sms.CONTENT_URI,
            arrayOf(Telephony.Sms.ADDRESS, Telephony.Sms.BODY, Telephony.Sms.DATE),
            null,
            null,
            Telephony.Sms.DATE + " DESC"
        )

        if (cursor != null && cursor.moveToFirst()) {
            var count = 0;
            val maxMessages = take.toInt()

            do {
                if (count >= maxMessages) break;

                val address = cursor.getString(cursor.getColumnIndexOrThrow(Telephony.Sms.ADDRESS))
                val body = cursor.getString(cursor.getColumnIndexOrThrow(Telephony.Sms.BODY))
                val date = cursor.getLong(cursor.getColumnIndexOrThrow(Telephony.Sms.DATE))

                if (from == null || address == from) {
                    val messageDetails = Arguments.createMap()
                    messageDetails.putString("address", address)
                    messageDetails.putString("body", body)
                    messageDetails.putDouble("date", date.toDouble())
                    writableArray.pushMap(messageDetails)
                    count++
                }
            } while (cursor.moveToNext())
        }
        return writableArray
    }

    @RequiresApi(Build.VERSION_CODES.P)
    override fun onNewMessage(from: String?, callback: Callback?) {
        ensurePermission()
        if (smsReceiver != null) {
            reactApplicationContext.unregisterReceiver(smsReceiver)
        }

        smsReceiver = SmsReceiver(
            this.reactApplicationContext, from, callback
        )
        val filter = IntentFilter("android.provider.Telephony.SMS_RECEIVED")
        Log.d("log", "register new app")
        reactApplicationContext.registerReceiver(smsReceiver, filter)
    }

    companion object {
        const val NAME = "NativeSmsReader"
    }
}