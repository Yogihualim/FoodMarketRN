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
    style={{backgroundColor: 'white', elevation: 1}}
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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListFood
        rating={3}
        image={FoodDummy1}
        name={'Salad Sehat'}
        price={'49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy2}
        name={'Soup Bumil'}
        price={'69.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        name={'Avocado Salad'}
        price={'49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        name={'Ice Cream Walls'}
        price={'9.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy5}
        name={'Ice Coffee Latte '}
        price={'6.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy6}
        name={'Bawang Kupas/100gr'}
        price={'4.900'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListFood
        rating={3}
        image={FoodDummy1}
        name={'Salad Sehat'}
        price={'49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy2}
        name={'Soup Bumil'}
        price={'69.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        name={'Avocado Salad'}
        price={'49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        name={'Ice Cream Walls'}
        price={'9.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy5}
        name={'Ice Coffee Latte '}
        price={'6.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy6}
        name={'Bawang Kupas/100gr'}
        price={'4.900'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
    </View>
  );
};
const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListFood
        rating={3}
        image={FoodDummy1}
        name={'Salad Sehat'}
        price={'49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy2}
        name={'Soup Bumil'}
        price={'69.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        name={'Avocado Salad'}
        price={'49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        name={'Ice Cream Walls'}
        price={'9.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy5}
        name={'Ice Coffee Latte '}
        price={'6.000'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy6}
        name={'Bawang Kupas/100gr'}
        price={'4.900'}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
        items={3}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 3,
  },
});
