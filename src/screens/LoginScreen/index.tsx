import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {Props} from '../../../App';
import Color from '../../configs/colors.enum';
import useHooks from './hooks';
import LoginPanel from './LoginPanel';
import RegisterPanel from './RegisterPanel';

const windowHeight = Dimensions.get('window').height;

const LoginScreen: React.FC<Props> = (props: Props) => {
  const {states, handlers} = useHooks(props);
  const {buttons, selectedButtonIndex} = states;
  const {handleChangeTab} = handlers;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <ButtonGroup
          containerStyle={styles.buttonGroupContainer}
          textStyle={styles.buttonGroupText}
          selectedButtonStyle={styles.selectedButton}
          selectedTextStyle={styles.buttonGroupText}
          innerBorderStyle={{width: 0}}
          buttons={buttons}
          onPress={handleChangeTab}
          selectedIndex={selectedButtonIndex}
        />
      </View>
      {selectedButtonIndex === 0 ? <LoginPanel /> : <RegisterPanel />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Gray,
    justifyContent: 'space-between',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 3,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  logo: {
    position: 'absolute',
    width: 70,
    height: 70,
  },
  buttonGroupContainer: {
    marginTop: 'auto',
    borderWidth: 0,
    width: 200,
  },
  buttonGroupText: {
    fontFamily: 'SF-Pro-Text-Semibold',
    color: '#000',
  },
  selectedButton: {
    backgroundColor: 'transparent',
    borderBottomColor: Color.Orange1,
    borderBottomWidth: 3,
  },
  loginButtonContainer: {},
  loginButton: {
    position: 'absolute',
  },
});

export default LoginScreen;