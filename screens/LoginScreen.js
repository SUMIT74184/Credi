import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InputField from '../components/InputField';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 🔐 TODO: Add your login logic here
    console.log('Login with', email, password);
    navigation.navigate('Dashboard'); // After success
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credxx Book</Text>

      <Text style={styles.subheading}>Simplyfying payments amplifying credits</Text>

      <InputField placeholder="Name" value={email} onChangeText={setEmail} />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24,fontFamily:'Inter-Regular' },
  title: { fontSize: 32, marginBottom: 30, textAlign: 'center' },
  button: {
    backgroundColor: '#00008b',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontSize: 16 },
  link: { textAlign: 'center', color: '#007AFF' },
  subheading: {
    fontSize: 15,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold', 
    }
});

export default LoginScreen;