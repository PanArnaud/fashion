import React, {useRef} from 'react';
import * as Yup from 'yup';
import {View} from 'react-native';
import {Routes, StackNavigationProps} from '../../Navigators/Navigation';
import {useFormik} from 'formik';
import TextInput from '../../Components/Form/TextInput';
import Container from '../../Components/Container';
import {Box, Text} from '../../Themes/Theme';
import Checkbox from '../../Components/Checkbox';
import Button from '../../Components/Button';
import AuthFooter from '../../Components/AuthFooter';

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref('password')], "Passwords don't match")
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = ({
  navigation,
}: StackNavigationProps<Routes, 'Login'>): JSX.Element => {
  const {handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    validationSchema: SignUpSchema,
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    onSubmit: values => console.log(values),
  });

  const email = useRef<typeof TextInput>(null);
  const password = useRef<typeof TextInput>(null);
  const passwordConfirmation = useRef<typeof TextInput>(null);

  const footer = (
    <AuthFooter
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate('Login')}
    />
  );

  return (
    <Container {...{footer}}>
      <Box padding={'xl'}>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let's us know what your name, email and your password
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              ref={email}
              icon="mail-outline"
              placeholder="Enter your Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              autoComplete="email"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={password}
              icon="lock-closed-outline"
              placeholder="Enter your Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
              autoComplete="password"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => passwordConfirmation.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={passwordConfirmation}
              icon="lock-closed-outline"
              placeholder="Confirm your Password"
              onChangeText={handleChange('passwordConfirmation')}
              onBlur={handleBlur('passwordConfirmation')}
              error={errors.passwordConfirmation}
              touched={touched.passwordConfirmation}
              secureTextEntry
              autoComplete="password"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit}
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Create your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
