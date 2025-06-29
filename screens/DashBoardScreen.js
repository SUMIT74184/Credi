import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SummaryChart from '../components/SummaryChart';
import TransactionCard from '../components/TransactionCard';


const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('Analytics');
  const [timeRange, setTimeRange] = useState('Monthly')

  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
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
              } else {
                navigation.navigate(tab); // Navigate to Receivable or Payable
              }
            }}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#00008b',
          padding: 14,
          borderRadius: 10,
          marginTop: 20,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Cashbook')}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Go to Cashbook</Text>
      </TouchableOpacity>


      {/* Chart */}
      <SummaryChart receivable={20000} payable={10000} />
      <TransactionCard
        name="Ramesh Sharma"
        amount={1200}
        type="receivable"
        note="Paid for groceries"
        imageUrl="" // optional
      />
      <TransactionCard
        name="Sita Devi"
        amount={900}
        type="payable"
        note="Milk supply"
        imageUrl=""
      />
      <View style={styles.dropdown}>
        <Picker
          selectedValue={timeRange}
          onValueChange={(itemValue) => setTimeRange(itemValue)}
          mode="dropdown"
        >
          <Picker.Item label="Monthly" value="Monthly" />
          <Picker.Item label="Weekly" value="Weekly" />
          <Picker.Item label="Quarterly" value="Quarterly" />
          <Picker.Item label="Yearly" value="Yearly" />
        </Picker>
      </View>
      {/* Footer summary */}
      <View style={styles.footerSummary}>
        <View style={styles.footerItem}>
          <View style={[styles.dot, { backgroundColor: 'green' }]} />
          <Text>Receivable</Text>
          <Text style={styles.amount}>20,000</Text>
        </View>
        <View style={styles.footerItem}>
          <View style={[styles.dot, { backgroundColor: 'red' }]} />
          <Text>Payable</Text>
          <Text style={styles.amount}>10,000</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  shopIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  greeting: {
    fontSize: 16,
  },
  shopName: {
    fontWeight: 'bold',
    color: '#0E1AB0',
  },
  bellIcon: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 8,
  },
  tabActive: {
    backgroundColor: '#0E1AB0',
  },
  tabText: {
    color: '#333',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 16,
  },
  footerSummary: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  footerItem: {
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginBottom: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default DashboardScreen;
