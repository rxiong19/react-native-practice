import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <View key={props.index} style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.index)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: 'lightblue',
  },
  goalText: {
    color: 'black',
    padding: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
