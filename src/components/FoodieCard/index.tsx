import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Image} from 'react-native-elements';
import Color from '../../constants/colors.enum';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  description?: string;
  image?: string;
  height?: number;
  width?: number;
  title: string;
  onPress?: Function;
}

const FoodieCard: React.FC<Props> = props => {
  const {title, description, containerStyle} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity style={styles.card} activeOpacity={0.9}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
          }}
          style={styles.image}
          containerStyle={styles.imageContainer}
        />
        <View style={styles.cardBody}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FoodieCard;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 220,
    backgroundColor: 'transparent',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    width: 220,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBody: {alignItems: 'center', marginTop: 60},
  imageContainer: {borderRadius: 90, position: 'absolute', top: -65},
  image: {width: 150, height: 150},
  title: {
    fontFamily: 'SF-Pro-Rounded-Semibold',
    fontSize: 22,
    textAlign: 'center',
    width: 150,
  },
  description: {
    fontFamily: 'SF-Pro-Rounded-Bold',
    fontSize: 17,
    color: Color.Orange1,
    marginTop: 15,
  },
});
