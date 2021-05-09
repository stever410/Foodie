import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ButtonGroup, Icon, Input} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import {DrawerParamList} from '../../common/types/DrawerParamList';
import FoodieCard, {FoodieCardProps} from '../../components/FoodieCard';
import Header from '../../components/Header';
import Color from '../../constants/colors.enum';
import useHooks from './hooks';

interface Props {
  navigation: DrawerNavigationProp<DrawerParamList, 'Home'>;
}

const SLIDER_WIDTH = Dimensions.get('window').width;

const mockData = [
  {
    title: 'Toast bread with blueberry',
    description: '59.000 VND',
    image:
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Summer salad',
    description: '39.000 VND',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    title: 'Dim sum',
    description: '29.000 VND',
    image:
      'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];
const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {states, handlers} = useHooks();
  const {buttons, selectedButtonIndex} = states;
  const {handleChangeTab} = handlers;

  const renderItem = ({item}: {item: FoodieCardProps}) => {
    return (
      <FoodieCard
        title={item.title}
        description={item.description}
        image={item.image}
        containerStyle={{marginVertical: 5}}
      />
    );
  };

  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Delicious food for you</Text>
          <Input
            placeholder="Search"
            containerStyle={styles.inputContainer}
            keyboardAppearance="dark"
            autoCorrect={false}
            leftIcon={
              <Icon type="material-community" name="magnify" size={24} />
            }
            inputContainerStyle={styles.inputInputContainer}
            inputStyle={styles.input}
          />
        </View>
        <ButtonGroup
          containerStyle={styles.buttonGroupContainer}
          textStyle={styles.buttonGroupText}
          selectedButtonStyle={styles.selectedButton}
          selectedTextStyle={styles.buttonGroupSelectedText}
          innerBorderStyle={styles.buttonGroupInnerBorderStyle}
          buttons={buttons}
          buttonStyle={styles.buttonGroupButton}
          selectedIndex={selectedButtonIndex}
          onPress={handleChangeTab}
        />
        <View style={styles.mt50}>
          <Carousel
            activeSlideAlignment="start"
            data={mockData}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={220}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginHorizontal: 50,
  },
  mt50: {marginTop: 50},
  heading: {
    fontFamily: 'SF-Pro-Rounded-Bold',
    fontSize: 34,
    marginTop: 15,
    width: 200,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 65,
  },
  inputInputContainer: {
    borderBottomWidth: 0,
  },
  input: {
    fontFamily: 'SF-Pro-Text-Semibold',
    fontSize: 14,
  },
  buttonGroupContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  buttonGroupText: {
    fontFamily: 'SF-Pro-Text-Regular',
    color: '#9A9A9D',
    fontSize: 17,
  },
  buttonGroupSelectedText: {
    fontFamily: 'SF-Pro-Text-Regular',
    color: Color.Orange1,
  },
  buttonGroupInnerBorderStyle: {
    width: 0,
  },
  selectedButton: {
    backgroundColor: 'transparent',
    borderBottomColor: Color.Orange1,
    borderBottomWidth: 3,
  },
  buttonGroupButton: {backgroundColor: 'transparent'},
});
