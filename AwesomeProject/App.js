import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [goal, setGoal] = useState([]);

  function goalInputHandler(enteredText) {
    setText(enteredText);
  }
  function addGoal() {
    setGoal(curGoal => [...goal, text]);
  }
  function destroyGoal() {}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter my goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add" onPress={addGoal} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={goal}
          renderItem={item => {
            return (
              <View key={item.index} style={styles.goalItem}>
                <Text style={styles.goalText}>{item.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //so the outer container can take all the available space and the inner ones can divide
    padding: 50,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  input: {
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
  },
  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 6,
    borderRadius: 6,
    backgroundColor: 'lightblue',
  },
  goalText: {
    color: 'white',
  },
});

export default App;
