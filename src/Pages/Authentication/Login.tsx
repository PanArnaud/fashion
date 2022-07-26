import { useFormik } from 'formik';
import React, { useRef } from 'react';
import * as Yup from 'yup';
import AuthFooter from '../../Components/AuthFooter';
import Button from '../../Components/Button';
import Checkbox from '../../Components/Checkbox';
import Container from '../../Components/Container';
import TextInput from '../../Components/Form/TextInput';
import { Routes, StackNavigationProps } from '../../Navigators/Navigation';
import { Box, Text } from '../../Themes/Theme';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = ({
  navigation,
}: StackNavigationProps<Routes, 'Login'>): JSX.Element => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: {email: '', password: '', remember: true},
    onSubmit: values => console.log(values),
  });

  const email = useRef<typeof TextInput>(null);
  const password = useRef<typeof TextInput>(null);

  const footer = (
    <AuthFooter
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );

  return (
    <Container {...{footer}}>
      <Box padding={'xl'}>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
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
              returnKeyType='next'
              returnKeyLabel='next'
              onSubmitEditing={() => password.current?.focus()}
              />
          </Box>
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
            returnKeyType='go'
            returnKeyLabel='go'
            onSubmitEditing={handleSubmit}
          />
          <Box flexDirection="row" justifyContent="space-between">
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue('remember', !values.remember)}
            />
            <Button
              variant="transparent"
              onPress={() => true}
              label="Forgot password">
              <Text variant="body" color="primary">
                Forgot password
              </Text>
            </Button>
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Log into your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
