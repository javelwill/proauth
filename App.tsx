import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import AuthProvider from './src/services/auth/auth.context';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
