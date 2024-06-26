import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderSummary = () => {
  return (
    <View>
      <Header title="Payment" subTitle="You deserve better meal" />
      <Gap height={16} />
      <View style={styles.content}>
        <ItemListFood
          image={FoodDummy1}
          text={'Salad Sehat'}
          price={'IDR 49.000'}
          items={14}
        />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label={'label'} value={'value'} />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver To:</Text>
        <ItemValue label={'label'} value={'value'} />
      </View>
      <View style={styles.button}>
        <Button text="Checkout Now" />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 8,
  },
});
