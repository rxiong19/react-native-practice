import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button, Alert} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import {StatusBar} from 'expo-status-bar';

const App = () => {
  const [goal, setGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function prepAddGoal() {
    setModalVisible(true);
  }
  function postAddGoal() {
    setModalVisible(false);
  }

  function addGoal(text) {
    if (text !== '') {
      setGoal(curGoal => [...goal, {text: text, id: Date.now()}]);
      postAddGoal();
    } else {
      Alert.alert('GOAL CANNOT BE EMPTY!', 'Please enter your goal again.', [
        {text: 'OK'},
      ]);
    }
  }
  function deleteGoal(id) {
    setGoal(curGoal => {
      return curGoal.filter(go => id !== go.id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      {/* StatusBar and view are sibling components, which is not allowed at of root level of JSX. so we add <></> fragment to wrap around them. */}
      <View style={styles.container}>
        <Button
          title="Back to Adding"
          color="lightpurple"
          onPress={prepAddGoal}
        />
        {modalVisible && (
          <GoalInput
            visible={modalVisible}
            onAddGoal={addGoal}
            onCancel={postAddGoal}
          />
        )}
        <View style={styles.goalContainer}>
          <FlatList
            data={goal}
            renderItem={item => {
              return (
                <GoalItem
                  text={item.item.text}
                  index={item.item.id}
                  onDeleteItem={deleteGoal}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //so the outer container can take all the available space and the inner ones can divide
    padding: 50,
    justifyContent: 'center',
  },
  goalContainer: {
    flex: 5,
  },
});

export default App;
