import React, {Component} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { inputPlaceholder } from '../utils/Colors';

export default class Input extends Component{

    constructor(props){
        super(props)
        inputValue : this.props.inputValue
        onChangeText : this.props.onChangeText
        onDoneAddItem : this.props.onDoneAddItem
    }

    render() {
        return(
            <TextInput
                style={styles.input}
                value={this.props.inputValue}
                onChangeText={this.props.onChangeText}
                placeholder="Type here to add note."
                placeholderTextColor={this.props.inputPlaceholder}
                multiline={true}
                autoCapitalize="sentences"
                underlineColorAndroid="transparent"
                selectionColor={'black'}
                maxLength={30}
                returnKeyType="done"
                autoCorrect={false}
                blurOnSubmit={true}
                onSubmitEditing={this.props.onDoneAddItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        paddingTop: 10,
        paddingRight: 15,
        fontSize: 34,
        color: 'black',
        fontWeight: '500'
    }
});