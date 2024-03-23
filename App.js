import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f44336', 
        tabBarInactiveTintColor: 'gray', 
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="settings" component={SettingsScreen} />
      
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Tab" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
