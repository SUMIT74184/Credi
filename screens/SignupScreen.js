import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
//phone number international is not working properly


const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const handleSendOtp = () => {
    console.log("Phone:", phoneNumber);
    navigation.navigate('OtpVerification');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Sign up</Text>

      <Text style={styles.label}>Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Phone Number</Text>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        onChangeFormattedText={(text) => setPhoneNumber(text)}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.phoneTextContainer}
        textInputStyle={styles.phoneInputText}
        withShadow
        autoFocus={false}
      />

      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.terms}>
        By continuing, you agree to our <Text style={styles.bold}>Terms &{'\n'}Conditions</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>We Keep it simple</Text>
      <View style={styles.dots}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
  },
  input: {
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 16,
    fontSize: 16,
  },
  phoneContainer: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    marginBottom: 16,
  },
  phoneTextContainer: {
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  phoneInputText: {
    color: '#000',
    fontSize: 16,
  },
  terms: {
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
    marginTop: 10,
    marginBottom: 16,
  },
  bold: {
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#00008b',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    textAlign: 'center',
    color: '#ccc',
    fontSize: 12,
    marginBottom: 10,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333',
  },
});

export default SignupScreen;
