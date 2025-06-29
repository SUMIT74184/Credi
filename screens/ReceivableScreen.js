import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import TransactionCard from '../components/TransactionCard';

const receivableData = [
  { id: '1', name: 'Amit Singh', amount: 1200, note: 'Milk delivery', type: 'receivable' },
  { id: '2', name: 'Rekha Yadav', amount: 2300, note: 'Monthly groceries', type: 'receivable' },
];

const ReceivableScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Receivable');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/react-logo.png')} style={styles.shopIcon} />
        <Text style={styles.greeting}>
          Hi, <Text style={styles.shopName}>Shri Ram Kirana Store</Text>
        </Text>
        <Feather name="bell" size={24} color="black" style={styles.bellIcon} />
      </View>

      <Text style={styles.sectionTitle}>Profit & loss Summary</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Analytics', 'Receivable', 'Payable'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => {
              if (tab === 'Analytics') {
                setActiveTab('Analytics');
                navigation.navigate('Dashboard');
              } else {
                setActiveTab(tab);
                navigation.navigate(tab);
              }
            }}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.cashbookButton}
        onPress={() => navigation.navigate('Cashbook')}
      >
        <Text style={styles.cashbookButtonText}>Go to Cashbook</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Receivable</Text>
      <FlatList
        data={receivableData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  shopIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  greeting: {
    flex: 1,
    fontSize: 16,
  },
  shopName: {
    fontWeight: 'bold',
  },
  bellIcon: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  tabActive: {
    backgroundColor: '#00008b',
  },
  tabText: {
    color: '#333',
  },
  tabTextActive: {
    color: '#fff',
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  cashbookButton: {
    backgroundColor: '#00008b',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  cashbookButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ReceivableScreen;
