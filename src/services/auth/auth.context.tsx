import React, {createContext, useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Alert} from 'react-native';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: any;
  loading: boolean;
  error: any;
  signInWithPhone: (phoneNumber: string) => void;
  confirmCode: (verificationCode: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
  signInWithPhone: (phoneNumber: string) => null,
  confirmCode: (verificationCode: string) => null,
  signOut: () => null,
});

const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<null | FirebaseAuthTypes.User>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const [confirm, setConfirm] =
    useState<null | FirebaseAuthTypes.ConfirmationResult>(null);

  const signInWithPhone = async (phoneNumber: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error: any) {
      console.log(error);
      switch (error.code) {
        case 'auth/invalid-phone-number':
          Alert.alert(
            'Error',
            'The provided phone number is not valid. Please check and try again.'
          );
          break;
        default:
          Alert.alert(
            'Error',
            'An unexpected error occurred. Please try again later.'
          );
      }
    }
  };

  const confirmCode = async (verificationCode: string) => {
    try {
      await confirm?.confirm(verificationCode);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-phone-number':
          Alert.alert(
            'Error',
            'The provided verification code is not valid. Please check and try again.'
          );
          break;
        default:
          Alert.alert(
            'Error',
            'An unexpected error occurred. Please try again later.'
          );
      }
    }
  };

  const signOut = async () => {
    await auth().signOut();
  };

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (loading) setLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        signInWithPhone,
        confirmCode,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
