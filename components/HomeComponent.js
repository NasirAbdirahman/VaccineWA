import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button} from 'react-native-elements';


class Home extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View  style={{paddingTop:20}}>

                <Text style={styles.HeaderTitle}>Find A <Text style={styles.HeaderTitle2}>Covid-19 </Text>Vaccine Near You</Text>
                
                <Button //Add this to all the information Pages
                    title="Search Providers"
                    onPress={() => navigate('Results')}> 
                </Button>
                
            
            </View>
        )
    }
}


const styles= StyleSheet.create({
    HeaderTitle:{
        color: '#000',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    HeaderTitle2:{
        color: '#70BAFF',
        textAlign:'center',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1
    }

})


export default Home;
