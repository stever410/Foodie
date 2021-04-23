import React, {useRef} from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Color from '../../../configs/colors.enum';
import useHooks from './hooks';

const RegisterPanel: React.FC = () => {
  const {states, handlers} = useHooks();
  const passwordInputRef = useRef<TextInput>();
  const {control} = states;
  const {handleSubmit, handleLogin} = handlers;

  return (
    <View style={styles.container}>
      {/* <View>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({field}) => (
            <Input
              label="Email Address"
              labelStyle={styles.label}
              value={field.value}
              onChangeText={text => field.onChange(text)}
              onSubmitEditing={() => passwordInputRef.current?.focus()}
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
              inputStyle={styles.input}
              label="Password"
              labelStyle={styles.label}
              onChangeText={text => field.onChange(text)}
              value={field.value}
              ref={passwordInputRef}
            />
          )}
        />
      </View>
      <View>
        <Text style={styles.forgotPassword}>Forgot passcode ?</Text>
      </View>
      <Button
        title="Login"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={handleSubmit(handleLogin)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 40,
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    borderRadius: 30,
    backgroundColor: Color.Orange1,
    height: 70,
  },
  label: {
    fontFamily: 'SF-Pro-Text-Semibold',
    color: '#000',
    opacity: 4 / 10,
    fontSize: 15,
  },
  input: {
    fontFamily: 'SF-Pro-Text-Semibold',
    color: '#000',
    fontSize: 17,
  },
  forgotPassword: {
    fontFamily: 'SF-Pro-Text-Semibold',
    color: Color.Orange1,
    marginLeft: 10,
  },
});
export default RegisterPanel;