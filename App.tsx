import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import {RootStackParamList} from './src/common/types/RootStackParamListType';
import {UserToken} from './src/dto/UserToken';
import AuthContext from './src/context/AuthContext';
import {getUserToken} from './src/utils/TokenUtils';

const UnAuth = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [userToken, setUserToken] = useState<UserToken | null>(null);

  useEffect(() => {
    getUserToken()
      .then(user => setUserToken(user))
      .catch(err => console.log(err));
  }, []);

  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={{userToken, setUserToken}}>
        <NavigationContainer>
          {userToken ? (
            <AuthStack.Navigator screenOptions={{headerShown: false}}>
              <UnAuth.Screen name="Home" component={HomeScreen} />
            </AuthStack.Navigator>
          ) : (
            <UnAuth.Navigator screenOptions={{headerShown: false}}>
              <UnAuth.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  animationTypeForReplace: 'pop',
                }}
              />
              <UnAuth.Screen name="Welcome" component={WelcomeScreen} />
            </UnAuth.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
