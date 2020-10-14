import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Header, AddTodo, TodoItem} from './components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      text: 'do homework',
      done: false,
      check: <Icon name="check" size={25} color="#819ca9" />,
      del: <Icon name="trash" size={30} color="#819ca9" />,
      key: '1',
    },
    {
      text: 'recap js',
      done: true,
      check: <Icon name="check" size={25} color="#819ca9" />,
      del: <Icon name="trash" size={30} color="#819ca9" />,
      key: '2',
    },
  ]);

  //Check isDone*******
  const pressCheck = (key) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) =>
        todo.key === key ? {...todo, done: !todo.done} : todo,
      );
    });
  };
  //Delete todo*****
  const pressHandler = (key) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.key != key);
    });
  };
  //submit Todo****
  const submitHandler = (todo) => {
    todo.length &&
      setTodoList((prevTodoList) => {
        return [
          {
            text: todo,
            key: Math.random().toString(),
            check: <Icon name="check" size={25} color="#819ca9" />,
            del: <Icon name="trash" size={30} color="#819ca9" />,
          },
          ...prevTodoList,
        ];
      });
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#e0f2f1'}}
      behavior={Platform.OS == 'android' ? null : 'padding:10'}>
      <ScrollView style={{flex: 1}} bounces={false}>
        <View style={{flex: 1}}>
          <Header />
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.container}>
            <FlatList
              data={todoList}
              extraData={true}
              renderItem={({item}) => (
                <TodoItem
                  item={item}
                  pressHandler={pressHandler}
                  pressCheck={pressCheck}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.listReport}>
            <Text style={[styles.text, {backgroundColor: '#80deea'}]}>
              Done: {todoList.filter((todo) => todo.done).length}
            </Text>
            <Text
              style={[
                styles.text,
                {backgroundColor: '#546e7a'},
                {color: 'white'},
              ]}>
              Not Done:
              {todoList.length - todoList.filter((todo) => todo.done).length}
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  listReport: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#cbc26d',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});
