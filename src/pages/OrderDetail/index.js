import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <ItemListFood
          type="order-summary"
          image={FoodDummy1}
          name={'Salad Sehat'}
          price={'IDR 49.000'}
          items={14}
        />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label={'Cherry Healthy'} value={'IDR 686.000'} />
        <ItemValue label={'Driver'} value={'IDR 15.000'} />
        <ItemValue label={'Tax 10%'} value={'IDR 68.600'} />
        <ItemValue
          label={'Total Price'}
          value={'IDR 769.600'}
          valueColor="#1ABC9C"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver To:</Text>
        <ItemValue label={'Name'} value={'Angga'} />
        <ItemValue label={'Phone No.'} value={'0822 9999 9999'} />
        <ItemValue label={'Address'} value={'Setra Duta Palima'} />
        <ItemValue label={'House No.'} value={'A5 Hook'} />
        <ItemValue label={'City'} value={'Yogyakarta'} />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue label={'#FM209391'} value={'Paid'} valueColor="#1ABC9C" />
      </View>
      <View style={styles.button}>
        <Button
          text="Cancel My Order"
          onPress={() => navigation.replace('SuccessOrder')}
          color="#D9435E"
          textColor="white"
        />
      </View>
      <Gap height={24} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
});
