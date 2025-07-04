 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DashboardScreen from './screens/DashboardScreen'; // later
import CashbookScreen from './screens/CashbookScreen.js';
import DashBoardScreen from './screens/DashBoardScreen.js';
import InEntryScreen from './screens/InEntryScreen.js';
import LoginScreen from './screens/LoginScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';
import OutScreen from './screens/OutScreen.js';
import PayableScreen from './screens/PayableScreen.js';
import ReceivableScreen from './screens/ReceivableScreen.js';
import ShopSetupScreen from './screens/ShopSetupScreen.js';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="OtpVerification" component={OtpVerificationScreen}/>
        <Stack.Screen name='ShopSetup' component={ShopSetupScreen}/>
        <Stack.Screen name='Dashboard' component={DashBoardScreen}/>
        <Stack.Screen name='Receivable' component={ReceivableScreen}/>
        <Stack.Screen name='Payable' component={PayableScreen}/>
        <Stack.Screen name='Cashbook' component={CashbookScreen}/>
        <Stack.Screen name="InEntry" component={InEntryScreen}/>
        <Stack.Screen name="OutEntry" component={OutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
