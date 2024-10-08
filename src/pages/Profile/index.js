import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../assets';
import {Gap, ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.profileDetail}>
          <View style={styles.photo}>
            <View style={styles.borderPhoto}>
              <Image source={ProfileDummy} style={styles.photoContainer} />
            </View>
          </View>
          <Text style={styles.name}>Angga Risky</Text>
          <Text style={styles.email}>wepanda@gmail.com</Text>
        </View>

        <View style={styles.content}>
          <ProfileTabSection />
        </View>
      </View>
      <Gap height={12} />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1, marginTop: 16},
  profileDetail: {
    backgroundColor: 'white',
    paddingBottom: 24,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppin-Regular',
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
