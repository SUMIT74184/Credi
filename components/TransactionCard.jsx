// components/TransactionCard.jsx
import { Image, StyleSheet, Text, View } from 'react-native';

const TransactionCard = ({ name, amount, type, note, imageUrl }) => {
  const isReceivable = type === 'receivable';

  return (
    <View style={styles.card}>
      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.avatar} />
        ) : (
          <View style={styles.initials}>
            <Text style={styles.initialsText}>{name?.slice(0, 2).toUpperCase()}</Text>
          </View>
        )}
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.note}>{note}</Text>
      </View>

      {/* Amount */}
      <View style={styles.amountWrapper}>
        <Text style={[styles.amount, isReceivable ? styles.green : styles.red]}>
          ₹{amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
    alignItems: 'center',
  },
  avatarWrapper: {
    marginRight: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
  },
  initials: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  note: {
    color: '#666',
    fontSize: 13,
  },
  amountWrapper: {
    marginLeft: 10,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
});

export default TransactionCard;
