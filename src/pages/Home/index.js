import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy4, FoodDummy7} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              <FoodCard
                image={FoodDummy1}
                text={'Salad Sehat'}
                price={'IDR 49.000'}
              />
              <FoodCard
                image={FoodDummy7}
                text={'Soup Bumil'}
                price={'IDR 69.000'}
              />
              <FoodCard
                image={FoodDummy2}
                text={'Paket Burger'}
                price={'IDR 109.000'}
              />
              <FoodCard
                image={FoodDummy4}
                text={'Ice Cream Walls'}
                price={'IDR 9.000'}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodCardContainer: {flexDirection: 'row', marginVertical: 12},
  tabContainer: {flex: 1},
});
