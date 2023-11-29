import {WelcomeTeam} from '@containers';
import {StackTest} from '@presentation';
import {AppContextProvider} from '@presentation';
import {AppNavigation} from '@presentation';
import React from 'react';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <AppNavigation />
    </AppContextProvider>
  );
  // <StackTest />;
};

export default App;
