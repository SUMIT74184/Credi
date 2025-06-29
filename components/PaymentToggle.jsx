// ✅ PaymentToggle.jsx
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PaymentToggle = ({ selected, onChange }) => {
  return (
    <View style={styles.toggleContainer}>
      {['Cash', 'Online'].map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => onChange(option)}
          style={[styles.toggleButton, selected === option && styles.selectedToggle]}
        >
          <Text
            style={[styles.toggleText, selected === option && styles.selectedText]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 20,
  },
  selectedToggle: {
    backgroundColor: '#4CAF50',
  },
  toggleText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  selectedText: {
    color: 'white',
  },
});

export default PaymentToggle;