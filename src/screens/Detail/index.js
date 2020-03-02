import React, { PureComponent } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import { Image, Button } from '@/components';
import { getUserProfile } from '@/store/actions/user';

import styles from './styles';

class Detail extends PureComponent {
  static propTypes = {
    aGetUserProfile: PropTypes.func.isRequired,
    rProfile: PropTypes.object.isRequired,
  };

  render() {
    const { aGetUserProfile, rProfile } = this.props;
    const profile = get(rProfile, 'result.data');
    const requesting = get(rProfile, 'requesting');
    const name = get(profile, 'name');
    const age = get(profile, 'age');
    const hobbies = get(profile, 'hobbies', []);

    return (
      <>
        <SafeAreaView>
          <Text style={styles.txtTitle}>Detail screen</Text>
          <Image
            isFastImage
            uri="https://images.unsplash.com/photo-1582996939389-83ff2de8e91a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1667&q=80"
            style={styles.image}
          />
          <Button
            text="Fetch data"
            onPress={() => aGetUserProfile()}
            disabled={requesting}
            isLoading={requesting}
          />
          <View style={{ padding: 20 }}>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{hobbies.join(', ')}</Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default connect(
  state => ({
    rProfile: state.user.profile,
  }),
  dispatch => bindActionCreators(
    {
      aGetUserProfile: getUserProfile,
    },
    dispatch,
  ),
)(Detail);
