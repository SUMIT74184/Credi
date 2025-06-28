// components/CongratulationsModal.js
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CongratulationsModal = ({ visible, onClose, shopName }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.subtext}>
            {shopName}{"\n"}Your account has been successfully created with us.
          </Text>
          <Text style={styles.desc}>
            Your <Text style={{ fontWeight: 'bold' }}>Credit Ledger Book</Text> is now ready — empowering your business with trust, transparency, and seamless credit management.
          </Text>

          <Text style={styles.link}>Start managing your finances smarter today!</Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CongratulationsModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000090',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    width: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
    color: '#555',
  },
  desc: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 18,
    color: '#444',
  },
  link: {
    textAlign: 'center',
    color: '#00008b',
    fontWeight: '600',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00008b',
    padding: 14,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
