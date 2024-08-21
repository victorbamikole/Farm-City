import React from 'react';
import { View, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface SpinnerProps {
  size?: 'small' | 'large';
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'large', color = '#02391E', style }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size} color={color} style={style} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(5),
    marginBottom: hp(5),
    height: hp(4.5),
    width: wp(8),
  } as ViewStyle,
};

export { Spinner };
