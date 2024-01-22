import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { styles } from './styles';

const Input = ({ value, placeholder, onChangeText }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </SafeAreaView>
  );
};

export default Input;