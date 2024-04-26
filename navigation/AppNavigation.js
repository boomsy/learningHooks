/* eslint-disable prettier/prettier */
import { LogBox } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Hooks from '../screens/Hooks';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',   
]);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
            <Stack.Screen name='Hooks' options={{headerShown : false}} component={Hooks} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;