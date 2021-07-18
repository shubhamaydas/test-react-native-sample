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

import GoalItem from './components/GoalItem'; 
import GoalInput from './components/GoalInput';

const App: () => Node = () => {
  
  const [courseGoals, setcourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setcourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]);
  }

  const removeGoalHandler = goalId => {
    setcourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
      data = {courseGoals}
      renderItem = {
        itemData => (
          <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={removeGoalHandler}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 30
  }
});

export default App;
