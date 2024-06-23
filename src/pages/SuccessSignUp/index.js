import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILSuccessSignUp></ILSuccessSignUp>
      <Gap height={30}></Gap>
      <Gap></Gap>
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6}></Gap>
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text>some foods as a self-reward</Text>
      <Gap height={30}></Gap>
      <View style={styles.buttonContainer}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('MainApp')}></Button>
      </View>
    </View>
  );
};

export default SuccessSignUp;

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
