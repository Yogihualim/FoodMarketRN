import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILSuccessOrder />
      <Gap height={30}></Gap>
      <Gap></Gap>
      <Text style={styles.title}>You've made your order!</Text>
      <Gap height={6}></Gap>
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Text style={styles.subTitle}>preparing your best food</Text>
      <Gap height={30}></Gap>
      <View style={styles.buttonContainer}>
        <Button
          text="Order Other Food"
          onPress={() => navigation.replace('Home')}
        />
        <Gap height={8} />
        <Button
          text="View My Order"
          onPress={() => navigation.replace('Home')}
          color="#8D92A3"
          textColor="white"
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
