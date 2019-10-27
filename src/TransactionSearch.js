import React from 'react';
import { View, TextInput, Image } from 'react-native';
import SearchIcon from './icon-search.png';

class TransactionSearch extends React.Component{
    render(){
        return (
            <View style = {styles.searchBar}>
                <Image style={{width: 30, height: 30}} 
                source={SearchIcon}
                />
                    <TextInput
                        placeholder= 'Cari nama'
                        onChangeText={(text) => this.props.onChange(text)}
                        value={this.props.input}
                        style={styles.inputStyle}
                        >
                    </TextInput>
            </View>
        )
    }
}

const styles = {
    searchBar: {
        flexDirection: 'row',
        backgroundColor:'#fff',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8
    },
    inputStyle: {
        height: 30,
        width: 380,
        marginLeft: 5,
        borderColor: '#fff'
    }
} 

export default TransactionSearch;
