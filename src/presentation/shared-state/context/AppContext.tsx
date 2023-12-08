import React, {createContext, useState} from 'react';
import {User} from '@domain';

interface AppContextProps {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  dataUser: User;
  setDataUser: React.Dispatch<React.SetStateAction<User>>;
  pay: string;
  setPay: React.Dispatch<React.SetStateAction<string>>;
}

type AppContextProviderProps = {
  children: React.ReactNode;
};

const defaultContextValue: AppContextProps = {
  isLoggedIn: false,
  setLoggedIn: () => {},
  dataUser: {} as User,
  setDataUser: () => {},
  pay: 'Momo',
  setPay: () => {},
};

export const AppContext = createContext<AppContextProps>(defaultContextValue);

export const AppContextProvider = ({children}: AppContextProviderProps) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [pay, setPay] = useState<string>('Momo');
  const [dataUser, setDataUser] = useState<User>({} as User);

  const appContextValue: AppContextProps = {
    isLoggedIn,
    setLoggedIn,
    dataUser,
    setDataUser,
    pay,
    setPay,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
