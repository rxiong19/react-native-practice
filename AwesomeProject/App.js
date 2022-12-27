import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput 
        style = {styles.input}
        placeholder='Enter my goal!'/>
        <Button title = 'Add'/>

      </View>

      <View>
        <Text> List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer :{
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  input :{
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%'
  }
});

export default App;