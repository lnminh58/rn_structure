import React, { PureComponent } from 'react';
import { SafeAreaView, Text, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Image, Button } from '@/components';
import { decreaseCounter, increaseCounter } from '@/store/actions/counter';
import { APP_COLOR } from '@/styles';

import styles from './styles';

class Home extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    aIncreaseCounter: PropTypes.func.isRequired,
    aDecreaseCounter: PropTypes.func.isRequired,
    rCounter: PropTypes.number.isRequired,
  };

  render() {
    const {
      aIncreaseCounter,
      aDecreaseCounter,
      rCounter,
      navigation,
    } = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text style={styles.txtTitle}>Welcome to React Native</Text>
          <Image uri={require('@/assets/img/logo.png')} style={styles.image} />
          <View style={styles.rowContainer}>
            <Button text="Decrease" onPress={() => aDecreaseCounter(1)} />
            <Text style={styles.txtCounter}>{rCounter}</Text>
            <Button text="Increase" onPress={() => aIncreaseCounter(2)} />
          </View>
          <Button
            text="Go detail screen"
            containerStyle={{ backgroundColor: APP_COLOR.SECONDARY }}
            onPress={() => navigation.navigate('Detail')}
          />
        </SafeAreaView>
      </>
    );
  }
}

export default connect(
  state => ({
    rCounter: state.counter.counter,
  }),
  dispatch => bindActionCreators(
    {
      aIncreaseCounter: increaseCounter,
      aDecreaseCounter: decreaseCounter,
    },
    dispatch,
  ),
)(Home);
