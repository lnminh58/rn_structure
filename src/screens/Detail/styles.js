import { StyleSheet } from 'react-native';

import { fontMaker, APP_COLOR } from '@/styles';

const styles = StyleSheet.create({
  txtTitle: {
    color: APP_COLOR.PRIMARY,
    fontSize: 25,
    padding: 5,
    alignSelf: 'center',
    textTransform: 'uppercase',
    ...fontMaker({ weight: '700' }),
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default styles;
