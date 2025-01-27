import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {forwardRef, useCallback} from 'react';

export const CRBottomSheet = forwardRef<BottomSheet, any>(function (
  {children},
  ref,
) {
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={ref}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      index={-1}>
      {children}
    </BottomSheet>
  );
});
