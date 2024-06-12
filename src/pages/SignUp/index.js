import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignUp = () => {
  return (
    <View style={styles.page}>
      <Header
        title="Sign Up"
        subTitle="Register and eat"
        onBack={() => {}}
        onPress={() => navigation.navigate('SignIn')}
      />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add photo</Text>
            </View>
          </View>
        </View>
        <TextInput
          label="Full Name"
          placeholder="Type your full name"></TextInput>
        <Gap height={16}></Gap>
        <TextInput
          label="Email address"
          placeholder="email@gmail.com"></TextInput>
        <Gap height={16}></Gap>
        <TextInput label="Password" placeholder="xxxxxxxxx"></TextInput>
        <Gap height={24}></Gap>
        <Button text="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

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
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
