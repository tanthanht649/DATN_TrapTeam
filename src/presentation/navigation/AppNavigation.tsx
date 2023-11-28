import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {OnboardingLoginStack} from './OnboardingLoginStack';
import {BottomNavigation} from './BottomNavigation';
import {AppContext} from '../shared-state/context';

const _AppNavigation = () => {
  const {isLoggedIn} = useContext(AppContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomNavigation /> : <OnboardingLoginStack />}
    </NavigationContainer>
  );
};

export const AppNavigation = React.memo(_AppNavigation);
