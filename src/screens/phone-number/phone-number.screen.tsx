import React, {useState} from 'react';
import AppButton from '../../components/app-button/app-button';
import AppInput from '../../components/app-input/app-input';
import ButtonGroup from '../../components/button-group/button-group';
import ScreenView from '../../components/screen-view/screen-view';
import Spacer from '../../components/spacer/spacer';
import {AuthStackNavigatorScreenProps} from '../../navigation/auth/auth.types';

const PhoneNumberScreen = ({
  navigation,
}: AuthStackNavigatorScreenProps<'PhoneNumber'>) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <ScreenView>
      <Spacer />
      <AppInput
        placeholder="+1 123 456 7890"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <ButtonGroup>
        <AppButton
          label="Go Back"
          onPress={() => navigation.goBack()}
          backgroundColor="white"
          borderColor="black"
          color="black"
        />
        <AppButton
          label="Next"
          onPress={() =>
            navigation.navigate('VerificationCode', {
              phoneNumber,
            })
          }
        />
      </ButtonGroup>
    </ScreenView>
  );
};

export default PhoneNumberScreen;
