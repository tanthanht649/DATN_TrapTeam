import {WelcomeTeam} from '@containers';
import {StackTest} from '@presentation';
import {AppContextProvider} from '@presentation';
import {AppNavigation} from '@presentation';
import React from 'react';
import {store} from '@shared-state';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <AppNavigation />
      </AppContextProvider>
    </Provider>
  );
  // <StackTest />;
};

export default App;
