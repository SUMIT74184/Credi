 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DashboardScreen from './screens/DashboardScreen'; // later
import LoginScreen from './screens/LoginScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
