import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import { fontMaker, APP_COLOR } from '@/styles';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  text: {
    color: APP_COLOR.WHITE,
    ...fontMaker({ weight: '500' }),
    alignSelf: 'center',
  },
});

const Button = ({
  children,
  text,
  containerStyle,
  textStyle,
  indicatorColor,
  isLoading,
  disabled,
  ...rest
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      {
        backgroundColor: APP_COLOR.PRIMARY + (disabled ? '55' : ''),
      },
      containerStyle,
    ]}
    disabled={disabled}
    {...rest}
  >
    {children || (isLoading ? (
      <ActivityIndicator color={indicatorColor || APP_COLOR.WHITE} />
    ) : (
      <Text style={[styles.text, textStyle]}>{text}</Text>
    ))}
  </TouchableOpacity>
);

Button.propTypes = {
  children: PropTypes.element,
  text: PropTypes.string,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  indicatorColor: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
