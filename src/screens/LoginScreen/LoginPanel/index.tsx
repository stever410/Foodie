import React from 'react';
import {Controller} from 'react-hook-form';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Color from '../../../constants/colors.enum';
import useHooks from './hooks';

const windowWidth = Dimensions.get('window').width;

const LoginPanel: React.FC = () => {
  const {states, handlers} = useHooks();
  const {control} = states;
  const {handleSubmit, handleLogin} = handlers;

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({field}) => (
              <Input
                label="Email Address"
                labelStyle={[styles.label, styles.semiboldFont]}
                inputStyle={styles.semiboldFont}
                value={field.value}
                onChangeText={text => field.onChange(text)}
              />
            )}
          />
        </View>
        <View>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({field}) => (
              <Input
                secureTextEntry
                inputStyle={[styles.input, styles.semiboldFont]}
                label="Password"
                labelStyle={[styles.label, styles.semiboldFont]}
                onChangeText={text => field.onChange(text)}
                value={field.value}
              />
            )}
          />
        </View>
        <View>
          <Text style={[styles.forgotPassword, styles.semiboldFont]}>
            Forgot passcode ?
          </Text>
        </View>
      </View>
      <Button
        title="Login"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={handleSubmit(handleLogin)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 40,
  },
  buttonContainer: {
    position: 'relative',
    bottom: 0,
    alignSelf: 'center',
    width: windowWidth,
    paddingHorizontal: 40,
    marginTop: 50,
  },
  button: {
    borderRadius: 30,
    backgroundColor: Color.Orange1,
    height: 70,
  },
  label: {
    color: '#000',
    opacity: 4 / 10,
    fontSize: 15,
  },
  input: {
    color: '#000',
    fontSize: 17,
  },
  forgotPassword: {
    color: Color.Orange1,
    marginLeft: 10,
  },
  semiboldFont: {
    fontFamily: 'SF-Pro-Text-Semibold',
  },
});

export default LoginPanel;
