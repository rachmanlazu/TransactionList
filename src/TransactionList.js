import React from 'react';
import { View, ScrollView } from 'react-native';
import CardTransaction from './CardTansaction'
import Axios from 'axios';
import TransactionSearch from './TransactionSearch'

import Spinner from './Spinner'

class TransactionList extends React.Component{
    state = {
        loading:true,
        data:[],
        show:[],
        keyFilter:''
    }
    async componentDidMount (){
        const url = 'https://nextar.flip.id/frontend-test';
        let res = await Axios.get(url);
        let data = Object.keys(res.data).map( k => {
            return res.data[k];
        })
        this.setState({
            data: data,
            show: data,
            loading: false
        })
    }
    async onChange(e){
        await this.setState({
            loading: true,
            keyFilter: e
        })
        this.filter();
    }
    filter() {
        this.setState({
            loading: true    
        })
        if(this.state.keyFilter === ''){
            this.setState({
                show: this.state.data,
                loading: false
            })
        } else {
            var re = new RegExp(this.state.keyFilter,"i");
            let filter = this.state.data.filter(dt => {
                return dt.beneficiary_name.match(re)
            })
            this.setState({
                show: filter,
                loading: false
            })
        }
    }
    render(){
        return (
            <ScrollView style={{padding:10, backgroundColor: '#F4F7FA', height: '100%'}}>
            <TransactionSearch input={this.state.keyFilter} onChange={(text) => this.onChange(text)}/>
            { this.state.loading ? 
                <Spinner />
                :
                <View>
                    {
                        this.state.show && this.state.show.map( dt => {
                            return <CardTransaction key={dt.id} data={dt}/>
                        })
                    }
                </View>  
            }
            </ScrollView>
        )
    }
}

export default TransactionList;
