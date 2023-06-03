import React, {createContext, useState} from 'react';

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signInWithPhone = async (phoneNumber: string) => {
    return null;
  };

  const confirmCode = async (verificationCode: string) => {
    return null;
  };

  const signOut = async () => {
    return null;
  };

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
