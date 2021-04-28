import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {RootStackParamList} from '../../common/types/RootStackParamListType';
import useToken from '../../hooks/useToken';

export interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

const HomeScreen: React.FC<Props> = (props: Props) => {
  const {
    navigation: {navigate},
  } = props;
  const {deleteToken} = useToken();
  return (
    <View>
      <Text>This is home screen</Text>
      <Button
        title="Log out"
        onPress={async () => {
          await deleteToken();
          navigate('Login', {});
        }}
      />
    </View>
  );
};

export default HomeScreen;
