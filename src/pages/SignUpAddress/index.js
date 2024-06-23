import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it's valid"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput
          label="Phone No."
          placeholder="Type your phone number"></TextInput>
        <Gap height={16}></Gap>
        <TextInput label="Address" placeholder="Type your address"></TextInput>
        <Gap height={16}></Gap>
        <TextInput
          label="House No."
          placeholder="Type your house number"></TextInput>
        <Gap height={16}></Gap>
        <Select label="City" />
        <Gap height={24}></Gap>
        <Button
          text="Sign Up Now"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  page: {
    flex: 1,
  },
});
