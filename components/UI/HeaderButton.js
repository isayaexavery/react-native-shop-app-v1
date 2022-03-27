import React from 'react';
import { Platform } from 'react-native';
// import { HeaderButton } from 'react-'
import { Ionicons } from '@expo/vector-icons';


import Colors from '../../constants/Colors';


const CustomHeaderButton = props => {
  return (
    <View style={styles.container}>
     <Ionicons
     name="md-checkmark-circle"
     size={32}
     color={Platform.OS === 'android' ? 'white' : Colors.primary}
     />
   </View>
  )
}

export default CustomHeaderButton;
