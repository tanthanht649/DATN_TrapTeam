import React from 'react';
import {
  StyleSheet,
  StatusBar,
  ImageBackground,
  StyleProp,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';

export type BackgroundProps = {
  children: React.ReactNode;
  source: ImageSourcePropType;
  styleBackground?: StyleProp<ViewStyle>;
};

const _BackgroundApp: React.FC<BackgroundProps> = props => {
  const {children, styleBackground, source} = props;
  return (
    <ImageBackground
      source={source}
      style={[styles.container, styleBackground]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const BackgroundApp = React.memo(_BackgroundApp);
