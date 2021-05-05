import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {DrawerParamList} from '../../common/types/DrawerParamList';

interface Props {
  navigation: DrawerNavigationProp<DrawerParamList, 'Home'>;
}

const Header: React.FC<Props> = ({navigation}) => (
  <View>
    <View style={styles.container}>
      <Icon
        type="material-community"
        name="menu"
        onPress={() => navigation.openDrawer()}
      />
      <Icon
        type="material-community"
        name="cart-outline"
        style={styles.cartIcon}
      />
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 15,
  },
  cartIcon: {
    opacity: 0.4,
  },
});
