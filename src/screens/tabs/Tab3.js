import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../styles/styles';

class Tab3 extends Component {
    render(){
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Tab 3</Text>
            </View>
        )
    }
}

export default Tab3;