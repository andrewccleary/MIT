import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component{

    constructor(props){
        super(props)
        title : this.props.title
    }

    render(){
        return(
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{this.props.title.toUpperCase()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
      marginTop: 40
    },
    headerText: {
      color: 'black',
      fontSize: 22,
      fontWeight: '500'
    }
  });