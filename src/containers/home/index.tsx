import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';

interface Props {
    homeStore: HomeStore
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {
    render() {
        const {numbers} = this.props.homeStore;

        return (<>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Teste</Text>
                <Text>{numbers}</Text>
            </View>
        </>);
    }
}