import React, { ReactNode } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Box, useTheme } from '../Themes/Theme';

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({children}: SocialIconProps) => {
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={44}
      height={44}
      borderRadius={'l'}
      justifyContent="center"
      alignItems="center">
      {children}
    </Box>
  );
};

export const SocialLogin = () => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l;

  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center">
      <SocialIcon>
        <Icon name="logo-facebook" color={'black'} size={SIZE} />
      </SocialIcon>
      <SocialIcon>
        <Icon name="logo-google" color={'black'} size={SIZE} />
      </SocialIcon>
      <SocialIcon>
        <Icon name="logo-apple" color={'black'} size={SIZE} />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
