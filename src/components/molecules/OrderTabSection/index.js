import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
  FoodDummy6,
} from '../../../assets';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '0.2%',
    }}
    style={{backgroundColor: 'white', elevation: 0}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListFood
        image={FoodDummy1}
        name={'Salad Sehat'}
        price={'49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
      />
      <ItemListFood
        image={FoodDummy2}
        name={'Soup Bumil'}
        price={'69.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
      />
      <ItemListFood
        image={FoodDummy3}
        name={'Avocado Salad'}
        price={'49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
      />
      <ItemListFood
        image={FoodDummy4}
        name={'Ice Cream Walls'}
        price={'9.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
      />
      <ItemListFood
        image={FoodDummy5}
        name={'Ice Coffee Latte '}
        price={'6.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
      />
      <ItemListFood
        image={FoodDummy6}
        name={'Bawang Kupas/100gr'}
        price={'4.900'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        items={3}
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListFood
        image={FoodDummy1}
        name={'Salad Sehat'}
        price={'49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
        date="Jun 12, 14:00"
        status=""
      />
      <ItemListFood
        image={FoodDummy2}
        name={'Soup Bumil'}
        price={'69.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
        date="Jun 12, 14:00"
        status="Canceled"
      />
      <ItemListFood
        image={FoodDummy3}
        name={'Avocado Salad'}
        price={'49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="past-orders"
        items={3}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 3,
  },
});
