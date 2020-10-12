import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Header, AddTodo, TodoItem} from './components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      text: 'doe homework',
      done: false,
      check: <Icon name="check" size={30} color="#819ca9" />,
      del: <Icon name="trash" size={30} color="#819ca9" />,
      key: '1',
    },
    {
      text: 'recap js',
      done: true,
      check: <Icon name="check" size={30} color="#819ca9" />,
      del: <Icon name="trash" size={30} color="#819ca9" />,
      key: '2',
    },
  ]);
  // const renderItemList={()}
  const pressCheck = (key) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) =>
        todo.key === key ? (todo.done = !todo.done) : todo.done,
      );
    });
  };
  const pressHandler = (key) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.key != key);
    });
  };
  return (
    <View>
      <Header />
      <FlatList
        data={todoList}
        extraData={true}
        //  numColumns={2}
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
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
