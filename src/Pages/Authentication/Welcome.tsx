import React from 'react';
import { Dimensions, Image } from 'react-native';
import Button from '../../Components/Button';
import { Routes, StackNavigationProps } from '../../Navigators/Navigation';
import theme, { Box, Text } from '../../Themes/Theme';

interface WelcomeProps {}

const picture = {
  src: require('./../../../assets/images/5.png'),
  width: 3383,
  height: 5074,
};

const {width, height} = Dimensions.get('window');

export const Welcome = ({
  navigation,
}: StackNavigationProps<Routes, 'Welcome'>): JSX.Element => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end">
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}>
          <Box
            backgroundColor="white"
            borderTopLeftRadius="xl"
            flex={1}
            alignItems="center"
            justifyContent="space-evenly"
            padding={'xl'}>
            <Text variant="title2">Let's get started</Text>
            <Text variant="body" textAlign="center">
              Login to your account below or signup for an amazing experience
            </Text>
            <Button
              variant="primary"
              label="Have an account? Login"
              onPress={() => navigation.navigate('Login')}
            />
            <Button variant="default" label="Join us, it's free" />
            <Button variant="transparent" label="Forgot password ?" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
