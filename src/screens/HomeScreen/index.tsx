import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerParamList} from '../../common/types/DrawerParamList';
import Header from '../../components/Header';

interface Props {
  navigation: DrawerNavigationProp<DrawerParamList, 'Home'>;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text style={styles.heading}>Delicious food for you</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'SF-Pro-Rounded-Bold',
    fontSize: 34,
    marginTop: 15,
    width: 200,
    marginLeft: 50,
  },
});
