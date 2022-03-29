import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
// import { useDispatch } from 'reac-redux';
import * as authActions from '../../store/actions/auth';

const MenuScreen = ({ navigation }) => {
  // const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            My Account
          </Text>
          <Button
            color={Colors.accent}
            title="Account"
            onPress={() => {
              navigation.navigate('User')
           }}
          />
       </View>

       <View style={styles.summary}>
         <Text style={styles.summaryText}>
           My Orders
         </Text>
         <Button
           color={Colors.accent}
           title="My Orders"
           onPress={() => {
             navigation.navigate('Orders')
          }}
         />
       </View>

              <View style={styles.summary}>
                <Text style={styles.summaryText}>
                  My Auth
                </Text>
                <Button
                  color={Colors.accent}
                  title="My Auth"
                  onPress={() => {
                    navigation.navigate('Auth')
                 }}
                />
              </View>

              <View style={styles.summary}>
                <Text style={styles.summaryText}>
                  LogOut
                </Text>
                <Button
                  color={Colors.accent}
                  title="LogOut"
                  onPress={() => {
                     // dispatch(authActions.logout());
                     // navigation.navigate('Auth');
                 }}
                />
              </View>
    </View>
  );
};

MenuScreen.navigationOptions = {
  headerTitle: 'Menu Screen'
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  summaryText: {
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  }
});

export default MenuScreen;
