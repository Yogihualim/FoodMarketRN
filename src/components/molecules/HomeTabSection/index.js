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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingVertical: 3}}>
      <ItemListFood
        image={FoodDummy1}
        text={'Salad Sehat'}
        price={'IDR 49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy2}
        text={'Soup Bumil'}
        price={'IDR 69.000'}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy3}
        text={'Avocado Salad'}
        price={'IDR 49.000'}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy4}
        text={'Ice Cream Walls'}
        price={'IDR 9.000'}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy5}
        text={'Ice Coffee Latte '}
        price={'IDR 6.000'}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={FoodDummy6}
        text={'Bawang Kupas/100gr'}
        price={'IDR 4.900'}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingVertical: 3}}>
      <ItemListFood
        image={FoodDummy1}
        text={'Salad Sehat'}
        price={'IDR 49.000'}
      />
      <ItemListFood
        image={FoodDummy2}
        text={'Soup Bumil'}
        price={'IDR 69.000'}
      />
      <ItemListFood
        image={FoodDummy3}
        text={'Avocado Salad'}
        price={'IDR 49.000'}
      />
      <ItemListFood
        image={FoodDummy4}
        text={'Ice Cream Walls'}
        price={'IDR 9.000'}
      />
      <ItemListFood
        image={FoodDummy5}
        text={'Ice Coffee Latte '}
        price={'IDR 6.000'}
      />
      <ItemListFood
        image={FoodDummy6}
        text={'Bawang Kupas/100gr'}
        price={'IDR 4.900'}
      />
    </View>
  );
};
const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingVertical: 3}}>
      <ItemListFood
        image={FoodDummy1}
        text={'Salad Sehat'}
        price={'IDR 49.000'}
      />
      <ItemListFood
        image={FoodDummy2}
        text={'Soup Bumil'}
        price={'IDR 69.000'}
      />
      <ItemListFood
        image={FoodDummy3}
        text={'Avocado Salad'}
        price={'IDR 49.000'}
      />
      <ItemListFood
        image={FoodDummy4}
        text={'Ice Cream Walls'}
        price={'IDR 9.000'}
      />
      <ItemListFood
        image={FoodDummy5}
        text={'Ice Coffee Latte '}
        price={'IDR 6.000'}
      />
      <ItemListFood
        image={FoodDummy6}
        text={'Bawang Kupas/100gr'}
        price={'IDR 4.900'}
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

const styles = StyleSheet.create({});
