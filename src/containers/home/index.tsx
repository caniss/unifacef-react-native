import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {ThemeProvider, Button, Text, Icon, icon} from 'react-native-elements';
import HomeStore from '../../stores/home.store';

interface Props {
    homeStore: HomeStore
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {
    
    render() {
        const {numbers, increment, reset, decrement} = this.props.homeStore;
        return (<>
            <ThemeProvider>
                <Text>Números</Text>
                <Text>{numbers}</Text>
                <Button icon={
                    <Icon
                    name="rowing"
                    color="white"
                    />
                } onPress={() => increment()} title="Incrementar"></Button>
                <Button onPress={() => decrement()} title="Decrementar"></Button>
                <Button onPress={() => reset()} title="Resetar"></Button>
                <Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>
            </ThemeProvider>
        </>);
    }
}