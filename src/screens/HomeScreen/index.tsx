import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonGroup, Icon, Input, Tab} from 'react-native-elements';
import {DrawerParamList} from '../../common/types/DrawerParamList';
import Header from '../../components/Header';
import Color from '../../constants/colors.enum';

interface Props {
  navigation: DrawerNavigationProp<DrawerParamList, 'Home'>;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
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
          selectedTextStyle={styles.buttonGroupText}
          innerBorderStyle={styles.buttonGroupInnerBorderStyle}
          buttons={['Foods', 'Drink', 'Snacks']}
          buttonStyle={{backgroundColor: 'transparent'}}
          selectedIndex={0}
        />
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
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    height: 65,
    borderWidth: 1,
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
    fontFamily: 'SF-Pro-Text-Semibold',
    color: '#000',
  },
  buttonGroupInnerBorderStyle: {
    width: 0,
  },
  selectedButton: {
    backgroundColor: 'transparent',
    borderBottomColor: Color.Orange1,
    borderBottomWidth: 3,
  },
});
