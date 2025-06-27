import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const OtpVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp === '1234') { // mock validation
      navigation.navigate('ShopSetup');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>We’ve sent an OTP to your phone</Text>

      <TextInput
        style={styles.otpInput}
        keyboardType="numeric"
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        maxLength={6}
      />

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.resend}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  subtitle: { fontSize: 14, textAlign: 'center', color: '#666', marginBottom: 24 },
  otpInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  verifyButton: {
        backgroundColor: '#00008b',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  resend: { textAlign: 'center', color: '#007AFF', fontSize: 14 },
});

export default OtpVerificationScreen;
