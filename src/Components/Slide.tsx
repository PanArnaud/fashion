import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Text} from '../Themes/Theme';

const {width, height} = Dimensions.get('window');

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide = ({title, right}: SlideProps): JSX.Element => {
  const transform = [
    {translateY: (0.61 * height - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text variant={'hero'}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width,
    overflow: 'hidden',
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
});
