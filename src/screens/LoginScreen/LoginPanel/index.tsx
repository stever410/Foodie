import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

const LoginPanel: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Email Address</Text>
        <Input />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <Input secureTextEntry inputStyle={styles.input} />
      </View>
      <View>
        <Text>Forgot passcode ?</Text>
      </View>
      <Button title="Login" containerStyle={styles.buttonContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 40,
  },
  buttonContainer: {
    marginTop: 30,
  },
  label: {
    fontFamily: 'SF-Pro-Text-Semibold',
    color: '#000',
    opacity: 4 / 10,
  },
  input: {
    fontFamily: 'SF-Pro-Text-Semibold',
    color: '#000',
  },
});
export default LoginPanel;
