import React, {useState} from 'react';
import AppButton from '../../components/app-button/app-button';
import AppInput from '../../components/app-input/app-input';
import ButtonGroup from '../../components/button-group/button-group';
import ScreenView from '../../components/screen-view/screen-view';
import Spacer from '../../components/spacer/spacer';

const VerificationCodeScreen = ({navigation}) => {
  const [verificationCode, setVerificationCode] = useState('');
  return (
    <ScreenView>
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
        <AppButton label="Submit" onPress={() => null} />
      </ButtonGroup>
    </ScreenView>
  );
};

export default VerificationCodeScreen;
