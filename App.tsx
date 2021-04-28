import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import {RootStackParamList} from './src/common/types/RootStackParamListType';
interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  // const {token} = useToken();
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
