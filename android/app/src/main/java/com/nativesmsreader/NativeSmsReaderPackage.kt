package com.nativesmsreader

import NativeSmsReaderModule
import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeSmsReaderPackage : TurboReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
        if (name == NativeSmsReaderModule.NAME) {
            NativeSmsReaderModule(reactContext)
        } else {
            null
        }

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
        mapOf(
            NativeSmsReaderModule.NAME to ReactModuleInfo(
                _name = NativeSmsReaderModule.NAME,
                _className = NativeSmsReaderModule.NAME,
                _canOverrideExistingModule = true,
                _needsEagerInit = false,
                isCxxModule = false,
                isTurboModule = true
            )
        )
    }
}