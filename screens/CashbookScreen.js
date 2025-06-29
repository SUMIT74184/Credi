import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CashbookScreen = ({ navigation }) => {
  const [tab, setTab] = useState('cash');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cashbook</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, tab === 'cash' && styles.activeTab]}
          onPress={() => setTab('cash')}
        >
          <Text>Cash in Hand</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'balance' && styles.activeTab]}
          onPress={() => setTab('balance')}
        >
          <Text>Today's Balance</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('InEntry')}
        style={{ margin:10, padding: 10, backgroundColor: 'green', borderRadius: 8 }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>+ Add IN Entry</Text>
      </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('OutEntry')}
        style={{ margin:10, padding: 10, backgroundColor: 'red', borderRadius: 8 }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>- Add Out Entry</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportButton}>
        <Text style={styles.reportText}>VIEW SALE & EXPENSE REPORT</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text>Today's balance: Daily total IN minus total OUT</Text>
        <Text>Cash in hand: Current cash balance in drawer/galla</Text>
        <Text>PDF Reports: Download reports</Text>
      </View>

      <TouchableOpacity style={styles.okButton} onPress={() => navigation.navigate('InEntry')}>
        <Text style={{ color: 'white' }}>Okay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CashbookScreen;

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#fff' },
  title: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  tabs: { flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderRadius: 10 },
  tab: { padding: 10, flex: 1, alignItems: 'center' },
  activeTab: { backgroundColor: '#e0e0e0' },
  reportButton: { marginVertical: 12, alignItems: 'center' },
  reportText: { color: '#1E2A78', fontWeight: '600' },
  card: { backgroundColor: '#f7f7f7', padding: 20, borderRadius: 10, marginTop: 20 },
  okButton: {
    backgroundColor: '#1E2A78',
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
});
