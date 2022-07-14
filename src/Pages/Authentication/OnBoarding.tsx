import React, { useRef } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import Dot from '../../Components/Dot';
import Slide from '../../Components/Slide';
import Subslide from '../../Components/Subslide';
import theme from '../../Themes/Theme';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    color: '#BFEAF5',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    picture: {
      src: require('./../../../assets/images/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    color: '#BEECC4',
    description:
      'Hating the clothes in your wardrobe? Explore hundred of outfit ideas',
    picture: {
      src: require('./../../../assets/images/2.png'),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    color: '#FFE4D9',
    description:
      'Create your individual & unique style and look amazing everyday',
    picture: {
      src: require('./../../../assets/images/3.png'),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    color: '#FFDDDD',
    description:
      'Discover the latest trends in fashion and explore your personality',
    picture: {
      src: require('./../../../assets/images/4.png'),
      width: 1757,
      height: 2551,
    },
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
        {slides.map(({picture}, index) => {
          const opacityStyles = useAnimatedStyle(() => {
            return {
              opacity: interpolate(
                x.value,
                [(index - 0.5) * width, index * width, (index + 0.5) * width],
                [0, 1, 0],
                Extrapolate.CLAMP,
              ),
            };
          });
          return (
            <Animated.View key={index} style={[styles.underlay, opacityStyles]}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
                }}
              />
            </Animated.View>
          );
        })}
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
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  sliders: {
    height: 0.61 * height,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {flex: 1},
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  footerMainContent: {
    flex: 1,
    flexDirection: 'row',
    width: width * slides.length,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
