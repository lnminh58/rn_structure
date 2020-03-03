import { createIconSet } from 'react-native-vector-icons';
import PropTypes from 'prop-types';
import customFontGlyph from '../../assets/fonts/custom-font-icon.json';

const Icon = createIconSet(
  customFontGlyph,
  'custom-font-icon',
  'custom-font-icon.ttf',
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 60,
  color: 'black',
};

export default Icon;
