import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon
        style={{marginHorizontal: 10}}
        name="bars"
        size={35}
        color="#819ca9"
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          marginHorizontal: 50,
          color: '#102027',
        }}>
        Todo List
      </Text>
    </View>
  );
};

export {Header};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 30,
  },
});
