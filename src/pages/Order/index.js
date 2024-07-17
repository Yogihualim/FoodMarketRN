import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {EmptyOrder, OrderTabSection, Header, Gap} from '../../components';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <ScrollView>
      <View style={styles.page}>
        {isEmpty ? (
          <EmptyOrder />
        ) : (
          <View style={styles.content}>
            <Header
              title="Your Orders"
              subTitle="Wait for the best meals"></Header>
            <View style={styles.tabContainer}>
              <OrderTabSection />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    marginTop: 8,
  },
});
