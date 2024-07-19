import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form: ', form);
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find you best ever meal"></Header>
      <View style={styles.container}>
        <TextInput
          label="Email address"
          placeholder="email@gmail.com"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16}></Gap>
        <TextInput
          label="Password"
          placeholder="xxxxxxxxx"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24}></Gap>
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={12}></Gap>
        <Button
          text="Create new account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
