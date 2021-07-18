/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';

import {
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Text,
  View,
  FlatList,
} from 'react-native';

const App: () => Node = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setcourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setcourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      {/* <ScrollView>
        {courseGoals.map((goal) => <View key={goal} style={styles.listItemView}><Text>{goal}</Text></View>)}
      </ScrollView> */}
      <FlatList
      data = {courseGoals}
      renderItem = {
        itemData => (
          <View style={styles.listItemView}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 30
  },
  inputContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textInput: {
    width: '90%',
    borderBottomColor: 'black', 
    borderWidth: 1
  },
  listItemView:{
    padding: 10,
    margin: 1,
    backgroundColor: '#189',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default App;
