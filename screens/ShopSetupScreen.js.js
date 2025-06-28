import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CongratulationsModal from '../components/CongtulationModal';
const ShopSetupScreen = ({ navigation }) => {
  const [shopName, setShopName] = useState('');
  const [shopCategory, setShopCategory] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  const [showCongrats, setShowCongrats] = useState(false);

  const handleContinue = () => {
    if (shopName && shopCategory && shopAddress) {
      // save shop details logic here or call an API
      console.log({ shopName, shopCategory, shopAddress });
      // navigation.navigate('Dashboard'); // or next step
      setShowCongrats(true)
    } else {
      alert('Please fill all fields.');
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setup Your Shop</Text>

      <Text style={styles.label}>Shop Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Gupta Kirana Store"
        value={shopName}
        onChangeText={setShopName}
      />

      <Text style={styles.label}>Shop Category</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={shopCategory}
          onValueChange={(itemValue) => setShopCategory(itemValue)}
          style={Platform.OS === 'android' ? {} : styles.pickerIOS}
        >
          <Picker.Item label="Select Category" value="" />
          <Picker.Item label="Grocery" value="grocery" />
          <Picker.Item label="Clothing" value="clothing" />
          <Picker.Item label="Electronics" value="electronics" />
          <Picker.Item label="Medical" value="medical" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <Text style={styles.label}>Shop Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Street, City, Pincode"
        value={shopAddress}
        onChangeText={setShopAddress}
        multiline
        numberOfLines={3}
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Save & Continue</Text>
      </TouchableOpacity>

      <CongratulationsModal
        visible={showCongrats}
        onClose={() => {
          setShowCongrats(false);
          navigation.navigate('Dashboard'); // or next screen
        }}
        shopName={shopName}
      />

    </View>

  );
};

export default ShopSetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  input: {
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 16,
    fontSize: 16,
  },
  pickerWrapper: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  pickerIOS: {
    height: 200,
  },
  button: {
    backgroundColor: '#00008b',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
