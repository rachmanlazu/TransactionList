import React from 'react';
import { View, Image, Text } from 'react-native';
import moment from 'moment/min/moment-with-locales';
import dot from './round_fiber_manual_record_black_18dp.png';
import arrow from './round_arrow_forward_black_18dp.png';
import NumberFormat from 'react-number-format';


class CardTransaction extends React.Component{
    render(){
        let data = this.props.data; 
        moment.locale('id');
        let date = moment(data.completed_at).format('DD MMMM YYYY'); 
        let color=''; 
        let status='';
        switch(data.status){
            case 'SUCCESS':{ color = '#66b081'; break};
            case 'PENDING': {color = '#fc6866'; break};
            case 'CANCEL': {color = '#c2b8b8'; break};
            default: color = '#fff';
        }
        switch(data.status){
            case 'SUCCESS':{ status = 'Berhasil'; break};
            case 'PENDING': {status = 'Menunggu'; break};
            case 'CANCEL': {status = 'Batal'; break};
            default: status = '#fff';
        }
        return (
            <View style={[styles.container, {borderLeftColor: color}]}>
                <View style={{width: '70%' , flexDirection:'column'}}>
                    <View style={[styles.row, {width: '70%', marginBottom: 3}]}>
                        <Text style={styles.textBank}>{data.sender_bank}</Text>
                        <Image source={arrow} style={{width: 15, height: 15}}/>
                        <Text style={styles.textBank}>{data.beneficiary_bank}</Text>
                    </View>
                    
                    <Text style={{textTransform: 'uppercase', marginBottom: 3}}>{data.beneficiary_name}</Text>
                    
                    <View style={styles.row}>
                        <NumberFormat value={data.amount} displayType={'text'} thousandSeparator={'.'} 
                            decimalSeparator={','} prefix={'Rp'} 
                            renderText={value => <Text>{value}</Text>} />
                        <Image style={{width: 10, height: 10, margin: 3}} source={dot}/>
                        <Text>{date}</Text>
                    </View>   
                </View>

                <View style={styles.status}>
                    <Text style={[styles.textStatus,{backgroundColor:color}]}>{status}</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        marginBottom:10,
        padding:10,
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        flexDirection:'row',
        borderLeftWidth: 5,
        borderRadius: 8 
    },
    status: {
        width: '30%',
        alignItems:'flex-end'
    },
    row: {
        flexDirection:'row',
        alignItems: 'center'
    },
    textBank: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    textStatus: {
        color:'white',
        padding:5,
        borderRadius:5
    }
}

export default CardTransaction;
