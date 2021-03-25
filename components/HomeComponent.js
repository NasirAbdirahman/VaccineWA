import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button, Divider} from 'react-native-elements';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          zipcode: '',
        };
      }

    static navigationOptions = {
        title: 'Home',
    };

    render () {
        const { navigate } = this.props.navigation;
        return (
            
            <View  style={{paddingTop:10, paddingBottom:20, backgroundColor: '#ffffff'}}>

                <Text style={styles.HeaderTitle}>Find A <Text style={styles.HeaderTitle2}>Covid-19 </Text>Vaccine Near You</Text>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', bottom:10, padding:0.5}}/>

                <Text style={styles.Text}>Type A 5-Digit Zip Code</Text>
                <Input placeholder='Zip Code' 
                    style={styles.Input}
                    value={this.state.zipcode}
                    onChangeText= {(zipcode) => this.setState({zipcode})}
                />

                <Text style={styles.Text2}>Within</Text>
                <Input 
                    placeholder='10 Miles' 
                    style={styles.Input}
                    rightIcon={{ type: 'material-icons', name: 'arrow-drop-down' , size:30}}
                     
                />
                
                <Button 
                    buttonStyle={styles.Button}
                    containerStyle={styles.ButtonContainer}
                    titleStyle={styles.Button}
                    
                    title="Search For Vaccines"
                    onPress={() =>  navigate('Results', {zipCode: this.state.zipcode})}> 
                </Button>
                
            
            </View>
        )
    }
}



//StyleSheet//

const styles= StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        textAlign:'center',
        fontSize: 27,
        fontFamily:'Scheherazade_700Bold',
        letterSpacing: 1,
    },
    HeaderTitle2: {
        color: '#70BAFF',
        textAlign:'center',
        fontSize: 35,
        letterSpacing: 1,
        
    },
    Text: {
        fontSize: 20,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingLeft:5,
        paddingTop:50,
      
        
    },
    Text2: {
        fontSize: 20,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingLeft:5,
        paddingTop:7
        
    },
    Button: {
        backgroundColor:'#70BAFF',
        borderRadius:25,
        padding:4,
        paddingTop:6,
        paddingBottom:6,
        alignSelf: "center",
        fontSize: 25,
        //bottom:1.5 = reveals light blue bg//
  
    },
    ButtonContainer: {
        elevation:15,
        alignSelf: "center",
        backgroundColor:'#B1DDF9',
        shadowColor:'#70BAFF',
        padding:1.5,
        borderRadius:25,
    },
    Input: {
        paddingTop:10,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
    }
    
})


export default Home;
