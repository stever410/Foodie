import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LikeScreen: React.FC = () => {
  return (
    <View>
      <Text style={styles.heading}>Hello Wolrd</Text>
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'SF-Pro-Rounded-Bold',
    fontSize: 34,
    marginTop: 15,
    width: 200,
    marginLeft: 50,
  },
});
