import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { View } from 'react-native';

import X from '../../themes';
import SetupWifi from '../SetupWifi';

class SettingsWifi extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View>
                <SetupWifi
                    handleBackPressed={ this.props.handleBackPressed } />
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleBackPressed: () => {
            dispatch(NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({ routeName: 'Settings' })
                ]
            }));
        }
    }
}

export default connect(null, mapDispatchToProps)(SettingsWifi);
