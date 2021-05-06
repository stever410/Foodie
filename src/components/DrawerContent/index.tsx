import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import Color from '../../constants/colors.enum';
import useHooks, {Props} from './hooks';

const drawerItemsList = [
  {
    name: 'Profile',
    icon: 'account-circle-outline',
  },
  {
    name: 'Orders',
    icon: 'cart-arrow-down',
  },
  {
    name: 'Promotions',
    icon: 'tag-outline',
  },
  {
    name: 'Privacy policy',
    icon: 'file-document-outline',
  },
  {
    name: 'Options',
    icon: 'cog-outline',
  },
];

const DrawerContent: React.FC<Props> = props => {
  const {handlers} = useHooks(props);
  const {handleLogOut} = handlers;
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          {drawerItemsList.map(item => (
            <>
              <ListItem key={item.name} containerStyle={styles.bgTransparent}>
                <Icon name={item.icon} type="material-community" color="#fff" />
                <ListItem.Content>
                  <ListItem.Title style={styles.listItemTitle}>
                    {item.name}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </>
          ))}
        </View>
      </DrawerContentScrollView>
      <View>
        <ListItem
          containerStyle={styles.bgTransparent}
          underlayColor={Color.Gray1}
          onPress={handleLogOut}>
          <ListItem.Content>
            <ListItem.Title style={styles.listItemTitle}>
              Log out
            </ListItem.Title>
          </ListItem.Content>
          <Icon name="arrow-right" type="material-community" color="#fff" />
        </ListItem>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Orange1,
  },
  avatar: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  listItemTitle: {
    fontFamily: 'SF-Pro-Rounded-Semibold',
    color: '#fff',
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
});
