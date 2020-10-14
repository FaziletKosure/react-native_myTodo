import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TodoItem = ({item, pressHandler, pressCheck}) => {
  //   const check = <Icon name="check" size={30} color="#819ca9" />;
  //   const del = (
  //     <Icon style={styles.delete} name="trash" size={30} color="#819ca9" />
  //   );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.check, {backgroundColor: item.done ? 'black' : 'white'}]}
        onPress={() => {
          return pressCheck(item.key), console.log('fazi');
        }}>
        {item.check}
      </TouchableOpacity>
      <Text
        style={[
          styles.list,
          {textDecorationLine: item.done ? 'line-through' : null},
          {backgroundColor: item.done ? '#80deea' : '#546e7a'},
          {color: item.done ? 'black' : 'white'},
        ]}>
        {item.text}
      </Text>

      <TouchableOpacity
        onPress={() => {
          return pressHandler(item.key), console.log('fazi');
        }}>
        {item.del}
      </TouchableOpacity>
    </View>
  );
};

export {TodoItem};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    // alignContent: 'space-between',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#546e7a',
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  check: {
    // backgroundColor: 'rgba(105,105,105, 0.5)',
    borderRadius: 100,
    borderColor: '#546e7a',
    borderWidth: 3,
  },
});
