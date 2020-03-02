import { StyleSheet } from 'react-native';

import { fontMaker, APP_COLOR } from '@/styles';

const styles = StyleSheet.create({
  txtTitle: {
    color: APP_COLOR.PRIMARY,
    fontSize: 25,
    padding: 5,
    alignSelf: 'center',
    textTransform: 'uppercase',
    ...fontMaker({ weight: '400' }),
  },
  image: {
    width: '100%',
    height: 200,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtCounter: {
    color: APP_COLOR.SECONDARY,
    fontSize: 20,
    ...fontMaker({ weight: '900' }),
  },
});

export default styles;
