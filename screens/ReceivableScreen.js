import { FlatList, StyleSheet, Text, View } from 'react-native';
import TransactionCard from '../components/TransactionCard';

const receivableData = [
  { id: '1', name: 'Amit Singh', amount: 1200, note: 'Milk delivery', type: 'receivable' },
  { id: '2', name: 'Rekha Yadav', amount: 2300, note: 'Monthly groceries', type: 'receivable' },
  // Add more...
];

const ReceivableScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receivable</Text>
      <FlatList
        data={receivableData}
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

export default ReceivableScreen;
