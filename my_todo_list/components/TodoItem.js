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
      <Text
        style={[
          styles.list,
          {textDecorationLine: item.done ? 'line-through' : null},
        ]}>
        {' '}
        <TouchableOpacity
          onPress={() => {
            return pressCheck(item.key), console.log('fazi');
          }}>
          {item.check}
        </TouchableOpacity>
        {item.text}{' '}
        <TouchableOpacity
          onPress={() => {
            return pressHandler(item.key), console.log('fazi');
          }}>
          {item.del}
        </TouchableOpacity>{' '}
      </Text>
    </View>
  );
};

export {TodoItem};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    //   justifyContent:'space-between',
    // margin:0,
  },
  list: {
    alignContent: 'space-between',
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#546e7a',
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
  },

  delete: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
