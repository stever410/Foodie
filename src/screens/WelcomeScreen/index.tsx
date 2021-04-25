import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Color from '../../constants/colors.enum';
import {Button} from 'react-native-elements';
import {Props} from '../../../App';

const windowWidth = Dimensions.get('window').width;

const WelcomeScreen: React.FC<Props> = (props: Props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.title}>Food for</Text>
        <Text style={[styles.title, styles.mtn60]}>Everyone</Text>
      </View>
      <View>
        <Image
          style={styles.faceImageLeft}
          source={require('../../assets/images/leftface.png')}
        />
        <Image
          style={styles.faceImageRight}
          source={require('../../assets/images/rightface.png')}
        />
      </View>
      <Button
        title="Get started"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={{color: Color.Orange}}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Red,
  },
  header: {
    marginBottom: 50,
    marginLeft: 30,
  },
  mtn60: {
    marginTop: -60,
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 20,
  },
  title: {
    fontFamily: 'SF-Pro-Rounded-Heavy',
    color: '#fff',
    fontSize: 55,
    letterSpacing: 3 / 100,
  },
  faceImageLeft: {
    position: 'absolute',
    width: 300,
    zIndex: 1,
  },
  faceImageRight: {
    position: 'absolute',
    width: 300,
    height: 450,
    right: -20,
  },
  buttonContainer: {
    zIndex: 1,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  button: {
    width: windowWidth / 1.2,
    height: 70,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
});
