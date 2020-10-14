import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const AddTodo = ({submitHandler}) => {
  const [todo, setTodo] = useState('');
  const changeHandler = (val) => {
    setTodo(val);
  };

  const clearInputFunc = (val) => {
    setTodo('');
  };

  return (
    <View style={{margin: 40, alignItems: 'center'}}>
      <TextInput
        style={styles.input}
        placeholder="Add new todo..."
        onChangeText={changeHandler}
        value={todo}
      />
      <TouchableOpacity
        onPress={() => {
          submitHandler(todo), clearInputFunc(todo);
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          <Icon name="plus" size={30} color="#819ca9" /> Add Todo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export {AddTodo};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 3,
    borderColor: '#37474f',
  },
});
