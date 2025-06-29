// screens/InEntryScreen.jsx
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Calculator from '../components/Calculator';
import PaymentToggle from '../components/PaymentToggle';

const InEntryScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('Cash');

  const handleSave = () => {
    if (!amount) return alert('Please enter an amount');
    // You can add save logic here
    alert(`Saved ₹${amount} via ${paymentMode}`);
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>IN Entry</Text>

      <TextInput
        placeholder="₹ Enter Amount"
        value={amount}
        onChangeText={setAmount}
        style={styles.amountInput}
        keyboardType="numeric"
      />

      <PaymentToggle selected={paymentMode} onChange={setPaymentMode} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      <Calculator onKeyPress={(key) => {
        if (key === 'C') return setAmount('');
        if (key === '<') return setAmount(amount.slice(0, -1));
        setAmount(amount + key);
      }} />
    </View>
  );
};

export default InEntryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:34,
    padding: 23,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 65,
  },
  amountInput: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 6,
    padding: 12,
    fontSize: 18,
    marginBottom: 100,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
