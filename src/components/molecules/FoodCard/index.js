import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Rating from '../Rating';

const FoodCard = ({image, text, price}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
        <Rating />
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 13,
            color: '#8D92A3',
            justifyContent: 'flex-end',
          }}>
          {price}
        </Text>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 7,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {width: 200, height: 140, resizeMode: 'cover'},
  content: {padding: 12},
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
