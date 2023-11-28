import React, {createContext, useState} from 'react';

interface AppContextProps {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

type AppContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: AppContextProps = {
  isLoggedIn: false,
  setLoggedIn: () => {},
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const AppContextProvider = ({children}: AppContextProviderProps) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const appContextValue: AppContextProps = {
    isLoggedIn,
    setLoggedIn,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
