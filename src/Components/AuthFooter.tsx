import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Box, Text } from '../Themes/Theme';
import SocialLogin from './SocialLogin';

interface AuthFooterProps {
  onPress: () => void;
  title: string;
  action: string;
};

const AuthFooter = ({ onPress, title, action }: AuthFooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <TouchableWithoutFeedback { ... { onPress }}>
          <Text variant="button">
            <Text variant="button" color="white">{`${title} `}</Text>
            <Text marginLeft="s" variant="button" color="primary">{`${action}`}</Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default AuthFooter;