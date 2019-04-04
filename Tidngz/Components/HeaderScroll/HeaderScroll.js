import { Animated } from 'react-native'


 
export const _handleScroll = (previous, current, HEIGHT, offsetAnim) => {
        

    if (previous > current && current > HEIGHT) { 
      Animated.spring(offsetAnim, {
        toValue: -current,
        tension: 300,
        friction: 35,
      }).start();
    } else {
      Animated.timing(offsetAnim, {
        toValue: 0,
        duration: 1000,
      }).start();
    }

};


