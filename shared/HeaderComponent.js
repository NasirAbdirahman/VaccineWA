import React from'react';
import { View, StyleSheet, Text } from 'react-native';
import {Image} from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation, /*title*/}) {
    return (
        <View style={styles.Header}>
             <Image
                style={styles.Image}
                source = {require('../assets/vaccineWaLogo.png')}
                resizeMode='stretch'
            
            />
            <MaterialIcons 
                name='menu' style={styles.Icon} onPress={() => navigation.toggleDrawer()}
            />   
            
        </View>
        /*
        <View>
            <Text style={styles.HeaderText}>{title}</Text>
        </View>*/
    );
}

const styles = StyleSheet.create({ 
    Header: {
        backgroundColor: '#ffffff',
        width:'100%',
        height: '100%',
        flexDirection:'row',
        //paddingTop:15,
        alignItems: 'center',
        borderBottomColor:'#000000',
        
        
    },
   HeaderText: {
        color: '#000',
        textAlign:'right',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    Image: {
        height: 55,
        width: 180,
         
    },
    Icon: {
        position:'absolute',
        right:1,
        top:7,
        fontSize: 45,
        color:'#70BAFF',
        borderWidth:1,
        borderRadius:20,
        paddingRight:5,
        paddingLeft:5,
        borderStyle:'solid',
        borderColor:'#70BAFF'
        
    }
});

