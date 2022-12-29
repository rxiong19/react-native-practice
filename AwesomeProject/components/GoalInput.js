import {useState} from 'react';
import {TextInput, View, Button, StyleSheet, Modal, Image} from 'react-native';

function GoalInput(props) {
  const [text, setText] = useState('');

  function goalInputHandler(enteredText) {
    setText(enteredText);
  }
  function addGoal() {
    props.onAddGoal(text);
    setText(''); // clear the input box
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/go.png')} />
        <TextInput
          style={styles.input}
          placeholder="Enter my goal!"
          onChangeText={goalInputHandler}
          value={text}
        />
        <View style={styles.buttonStyle}>
          <Button title="Add" onPress={addGoal} />
        </View>
        <View style={styles.buttonStyle}>
          <Button title="Cancel" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
