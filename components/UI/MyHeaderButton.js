import React from 'react';
import { Platform, Button } from 'react-native';
// import { HeaderButton } from 'react-'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';


import Colors from '../../constants/Colors';

const MyHeaderButton = (props) => {
  return (

      <Button
        onPress={ props.onCartPressed }
        title="Cart"
      />

  )
}

export default MyHeaderButton;
