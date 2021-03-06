import React, {useRef} from 'react';
import {Controller} from 'react-hook-form';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Color from '../../../constants/colors.enum';
import useHooks from './hooks';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterPanel: React.FC = () => {
  const {states, handlers} = useHooks();
  const passwordInputRef = useRef<TextInput>();
  const confirmPasswordInputRef = useRef<TextInput>();
  const {control, validationRules, errors} = states;
  const {handleSubmit, handleRegister, handleErrors} = handlers;

  return (
    <View>
      <KeyboardAvoidingView>
        <ScrollView style={styles.container}>
          <View>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={validationRules.firstName}
              render={({field}) => (
                <Input
                  label="First Name"
                  labelStyle={[styles.label, styles.semiboldFont]}
                  errorMessage={errors.firstName?.message}
                  errorStyle={[styles.error, styles.semiboldFont]}
                  inputStyle={styles.semiboldFont}
                  renderErrorMessage={!!errors.firstName}
                  value={field.value}
                  onChangeText={text => field.onChange(text)}
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                />
              )}
            />
          </View>
          <View>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={validationRules.lastName}
              render={({field}) => (
                <Input
                  label="Last Name"
                  labelStyle={[styles.label, styles.semiboldFont]}
                  errorMessage={errors.lastName?.message}
                  errorStyle={[styles.error, styles.semiboldFont]}
                  renderErrorMessage={!!errors.lastName}
                  inputStyle={styles.semiboldFont}
                  value={field.value}
                  onChangeText={text => field.onChange(text)}
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                />
              )}
            />
          </View>
          <View>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={validationRules.email}
              render={({field}) => (
                <Input
                  label="Email Address"
                  labelStyle={[styles.label, styles.semiboldFont]}
                  renderErrorMessage={!!errors.email}
                  errorMessage={errors.email?.message}
                  errorStyle={[styles.error, styles.semiboldFont]}
                  inputStyle={styles.semiboldFont}
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
              rules={validationRules.password}
              render={({field}) => (
                <Input
                  secureTextEntry
                  inputStyle={styles.semiboldFont}
                  label="Password"
                  labelStyle={[styles.label, styles.semiboldFont]}
                  errorMessage={errors.password?.message}
                  errorStyle={[styles.error, styles.semiboldFont]}
                  renderErrorMessage={!!errors.password}
                  onChangeText={text => field.onChange(text)}
                  value={field.value}
                  onSubmitEditing={() =>
                    confirmPasswordInputRef.current?.focus()
                  }
                />
              )}
            />
          </View>
          <View>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={validationRules.confirmPassword}
              render={({field}) => (
                <Input
                  secureTextEntry
                  inputStyle={styles.semiboldFont}
                  label="Confirm Password"
                  labelStyle={[styles.label, styles.semiboldFont]}
                  errorMessage={errors.confirmPassword?.message}
                  errorStyle={[styles.error, styles.semiboldFont]}
                  renderErrorMessage={!!errors.confirmPassword}
                  onChangeText={text => field.onChange(text)}
                  value={field.value}
                />
              )}
            />
          </View>
        </ScrollView>
        <Button
          title="Register"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={handleSubmit(handleRegister, handleErrors)}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 40,
    height: windowHeight / 3 + 50,
  },
  buttonContainer: {
    position: 'relative',
    bottom: 0,
    alignSelf: 'center',
    width: windowWidth,
    paddingHorizontal: 40,
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
  error: {
    fontSize: 12,
    color: Color.Orange1,
    marginBottom: 20,
  },
  input: {
    color: '#000',
    fontSize: 17,
  },
  semiboldFont: {
    fontFamily: 'SF-Pro-Text-Semibold',
  },
});
export default RegisterPanel;
