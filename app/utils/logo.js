import React from 'react';
import { Image } from 'react-native';

const LogoTitle = () => {return (
    <Image
      source={require('../assets/images/login_logo.png')}
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      style={{width: 120, height: 35}}
      resizeMode="contain"
    />
  );
};

export default LogoTitle;
