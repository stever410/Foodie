import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonGroup, Icon, Input} from 'react-native-elements';
import {DrawerParamList} from '../../common/types/DrawerParamList';
import FoodieCard from '../../components/FoodieCard';
import Header from '../../components/Header';
import Color from '../../constants/colors.enum';
import useHooks from './hooks';

interface Props {
  navigation: DrawerNavigationProp<DrawerParamList, 'Home'>;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {states, handlers} = useHooks();
  const {buttons, selectedButtonIndex} = states;
  const {handleChangeTab} = handlers;
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
          <FoodieCard
            title="Toast bread with blueberry"
            description="59.000 VND"
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
