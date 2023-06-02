import React from 'react';
import AppText from '../../components/app-text/app-text';
import ScreenView from '../../components/screen-view/screen-view';
import ButtonGroup from '../../components/button-group/button-group';
import AppButton from '../../components/app-button/app-button';

const HomeScreen = () => {
  return (
    <ScreenView>
      <AppText>Welcome</AppText>
      <ButtonGroup>
        <AppButton label="Sign Out" onPress={() => null} />
      </ButtonGroup>
    </ScreenView>
  );
};

export default HomeScreen;
