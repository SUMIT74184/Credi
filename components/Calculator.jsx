import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const buttons = [
  ['C', 'M+', 'M-', '⌫'],
  ['7', '8', '9', '%'],
  ['4', '5', '6', '/'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+'],
];

const Calculator = ({ onPress }) => {
  return (
    <View style={styles.container}>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((btn) => (
            <TouchableOpacity
              key={btn}
              onPress={() => onPress(btn)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{btn}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 4,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Calculator;
