// components/InputField.jsx
import { StyleSheet, TextInput, View } from 'react-native';

const InputField = ({ value, onChangeText, placeholder, secureTextEntry,keyboardType }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#888"
        keyboardType={keyboardType || 'default'}
      />

    </View>
    
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
});

export default InputField;
