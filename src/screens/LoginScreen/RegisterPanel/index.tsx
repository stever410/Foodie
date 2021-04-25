import React, {useRef} from 'react';
import {Controller} from 'react-hook-form';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
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
  const {control} = states;
  const {handleSubmit, handleRegister} = handlers;

  return (
    <View>
      <ScrollView style={styles.container}>
        <View>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({field}) => (
              <Input
                label="First Name"
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
            name="lastName"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({field}) => (
              <Input
                label="Last Name"
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
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
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
            rules={{required: true}}
            render={({field}) => (
              <Input
                secureTextEntry
                inputStyle={styles.input}
                label="Password"
                labelStyle={styles.label}
                onChangeText={text => field.onChange(text)}
                value={field.value}
                onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
              />
            )}
          />
        </View>
        <View>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{required: true}}
            render={({field}) => (
              <Input
                secureTextEntry
                inputStyle={styles.input}
                label="Confirm Password"
                labelStyle={styles.label}
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
        onPress={handleSubmit(handleRegister)}
      />
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
});
export default RegisterPanel;
