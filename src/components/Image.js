import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import FastImage from 'react-native-fast-image';

const UIImage = props => {
  const { uri, style, resizeMode, isFastImage, ...rest } = props;

  if (!isFastImage) {
    return (
      <Image source={uri} style={style} resizeMode={resizeMode} {...rest} />
    );
  }

  return (
    <FastImage
      style={style}
      source={{
        uri,
      }}
      resizeMode={resizeMode}
    />
  );
};

UIImage.defaultProps = {
  style: {},
  resizeMode: 'contain',
  isFastImage: false,
};

UIImage.propTypes = {
  uri: PropTypes.any.isRequired,
  style: PropTypes.object,
  resizeMode: PropTypes.string,
  isFastImage: PropTypes.bool,
};

export default UIImage;
