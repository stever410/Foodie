import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import AuthContext from '../../context/AuthContext';
import useToken from '../../utils/TokenUtils';

const HomeScreen: React.FC = () => {
  const {deleteToken} = useToken();
  const {setUserToken} = useContext(AuthContext);
  return (
    <View>
      <Text>This is home screen</Text>
      <Button
        title="Log out"
        onPress={async () => {
          await deleteToken();
          setUserToken(null);
        }}
      />
    </View>
  );
};

export default HomeScreen;
