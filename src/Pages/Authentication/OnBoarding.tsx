import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import Dot from '../../Components/Dot';
import Slide from '../../Components/Slide';
import Subslide from '../../Components/Subslide';

const {width, height} = Dimensions.get('window');
const BORDER_RADIUS = 75;

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    color: '#BFEAF5',
    description:
      "Confused abobut your outfit? Don't worry! Find the best outfit here!",
    picture: require("./../../../assets/images/1.png")
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    color: '#BEECC4',
    description:
      'Hating the clothes in your wardrobe? Explore hundred of outfit ideas',
    picture: require('./../../../assets/images/2.png')
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    color: '#FFE4D9',
    description:
      'Create your individual & unique style and look amazing everyday',
    picture: require('./../../../assets/images/3.png')
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    color: '#FFDDDD',
    description:
      'Discover the latest trends in fashion and explore your personality',
    picture: require('./../../../assets/images/4.png')
  },
];

const OnBoarding = (): JSX.Element => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      x.value = e.contentOffset.x;
    },
  });

  const backgroundStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map(slide => slide.color),
    );

    return {
      backgroundColor,
    };
  });

  const footerStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: -x.value}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sliders, backgroundStyles]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          onScroll={scrollHandler}>
          {slides.map(({title, picture}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title, picture}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[{...StyleSheet.absoluteFillObject}, backgroundStyles]}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={x} {...{index}} />
            ))}
          </View>
          <Animated.View style={[styles.footerMainContent, footerStyles]}>
            {slides.map(({subtitle, description}, index) => (
              <Subslide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current.scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                }}
                last={index === slides.length - 1}
                {...{subtitle, description}}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  sliders: {
    height: 0.61 * height,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {flex: 1},
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  footerMainContent: {
    flex: 1,
    flexDirection: 'row',
    width: width * slides.length,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
