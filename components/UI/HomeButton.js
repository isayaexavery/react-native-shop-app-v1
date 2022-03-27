import React from 'react';
import { Platform, Button } from 'react-native';
// import { HeaderButton } from 'react-'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';
import OrdersScreen from '../../screens/shop/OrdersScreen';


import Colors from '../../constants/Colors';

const HomeButton = ({ navigation }) => {
  return (

      <Button
        onPress={ () => navigation.navigate('Orders') }
        title="more"
      />

  )
}

export default HomeButton;
