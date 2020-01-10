import React from 'react';
import {View, Image, Animated} from 'react-native';
import constant from '../../../config/constant';
import splashStyle from './splashStyle';

class Splash extends React.Component {
  state = {
    height: new Animated.Value(100),
    width: new Animated.Value(100),
  };

  componentDidMount = () => {
    Animated.timing(
      this.state.width, // The animated value to drive
      {
        toValue: 360, // Animate to opacity: 1 (opaque)
        duration: 3000, // Make it take a while
      },
    ).start(); // Starts the animation
    Animated.timing(
      this.state.height, // The animated value to drive
      {
        toValue: 360, // Animate to opacity: 1 (opaque)
        duration: 3000, // Make it take a while
      },
    ).start(); // Starts the animation
  };

  render() {
    const {height} = this.state;
    const {width} = this.state;
    return (
      <View style={splashStyle.imageViewStyle}>
        <Animated.Image
          source={constant.splashImage}
          style={{height: height, width: width, alignSelf: 'center'}}
        />
      </View>
    );
  }
}
export default Splash;
