import * as React from 'react';

import Home from '../containers/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerTitle: 'Clara Martins',
                    headerTintColor: '#000111',
                    headerStyle: {
                        backgroundColor: 'pink'
                    },
                }} name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;