import React, { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Box, useTheme } from '../../Themes/Theme';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({icon, touched, error, ...props}: TextInputProps, ref): JSX.Element => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;
    const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={reColor}>
        <Box padding="s">
          <Icon name={icon} size={16} {...{color}} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            {...{ref}}
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...props}
          />
        </Box>
        {touched && (
          <Box
            height={SIZE}
            width={SIZE}
            margin="s"
            alignItems="center"
            justifyContent="center"
            backgroundColor={!error ? 'primary' : 'danger'}
            style={{borderRadius: SIZE / 2}}>
            <Icon
              name={!error ? 'checkmark-outline' : 'close-outline'}
              color="white"
              size={16}
            />
          </Box>
        )}
      </Box>
    );
  },
);

export default TextInput;
