import React from 'react';
import {View, StatusBar} from 'react-native';

export default function Header() {
  return (
    <View>
      <StatusBar animated={true} backgroundColor="purple" />
    </View>
  );
}
