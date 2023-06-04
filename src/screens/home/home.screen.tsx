import React from 'react';
import AppText from '../../components/app-text/app-text';
import ScreenView from '../../components/screen-view/screen-view';
import ButtonGroup from '../../components/button-group/button-group';
import AppButton from '../../components/app-button/app-button';
import {useAuthContext} from '../../services/auth/auth.context';

const HomeScreen = () => {
  const {signOut} = useAuthContext();
  return (
    <ScreenView>
      <AppText>Welcome</AppText>
      <ButtonGroup>
        <AppButton label="Sign Out" onPress={() => signOut()} />
      </ButtonGroup>
    </ScreenView>
  );
};

export default HomeScreen;
