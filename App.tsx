import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStackNavigator from './navigation/auth/auth.navigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
