import { FlatList, StyleSheet, Text, View } from 'react-native';
import TransactionCard from '../components/TransactionCard';

const payableData = [
  { id: '1', name: 'Suresh Bhai', amount: 1800, note: 'Rice supply', type: 'payable' },
  { id: '2', name: 'Lalita Traders', amount: 1500, note: 'Oil refill', type: 'payable' },
  // Add more...
];

const PayableScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payable</Text>
      <FlatList
        data={payableData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});

export default PayableScreen;
