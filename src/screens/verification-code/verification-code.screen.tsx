import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import AppButton from '../../components/app-button/app-button';
import AppInput from '../../components/app-input/app-input';
import AppText from '../../components/app-text/app-text';
import ButtonGroup from '../../components/button-group/button-group';
import ScreenView from '../../components/screen-view/screen-view';
import Spacer from '../../components/spacer/spacer';
import {AuthStackNavigatorScreenProps} from '../../navigation/auth/auth.types';
import {useAuthContext} from '../../services/auth/auth.context';

const VerificationCodeScreen = ({
  navigation,
  route,
}: AuthStackNavigatorScreenProps<'VerificationCode'>) => {
  const [verificationCode, setVerificationCode] = useState('');
  const phoneNumber = route.params.phoneNumber;
  const {signInWithPhone, confirmCode, error, loading} = useAuthContext();

  useEffect(() => {
    console.log('VerificationCodeScreen');
    signInWithPhone(phoneNumber);
  }, []);

  return (
    <ScreenView>
      <Spacer />
      <AppText>Please enter the verification code sent to</AppText>
      <AppText>{phoneNumber}</AppText>
      <Spacer />
      <AppInput
        placeholder="123456"
        value={verificationCode}
        onChangeText={(text) => setVerificationCode(text)}
      />
      <ButtonGroup>
        <AppButton
          label="Go Back"
          onPress={() => navigation.goBack()}
          backgroundColor="white"
          borderColor="black"
          color="black"
        />
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <AppButton
            label="Submit"
            onPress={() => confirmCode(verificationCode)}
          />
        )}
      </ButtonGroup>
    </ScreenView>
  );
};

export default VerificationCodeScreen;
