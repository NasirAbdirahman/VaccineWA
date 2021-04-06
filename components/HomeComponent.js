import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import Modal from 'react-native-modal';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          zipcode: '',
          //radius:'',Operational if we take radius//
          showModal: false,
        };
        
    }

    static navigationOptions = {
        title: 'Home',
    };
  
    toggleModal = () => {
        this.setState({showModal : !this.state.showModal})
    }
    
    
  

    render () {
        
        const { navigate } = this.props.navigation;

        return (
            
            <View style={{paddingTop:30, paddingBottom:200, backgroundColor: '#ffffff'}}>

                <Text style={styles.HeaderTitle}>Find A <Text style={styles.HeaderTitle2}>Covid-19 </Text>Vaccine</Text>
               
                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', padding:1, marginBottom:50}}/>
                
                <Text style={styles.Title}>Enter Your Zip Code</Text>
                <Text style={styles.Title}>We'll Find The Closest Providers</Text>

                {/* Pop Up Eligibility Question*/}
                <Text style={styles.ModalTrigger} onPress={this.toggleModal}> ?</Text>

                <Modal 
                    isVisible={this.state.showModal}
                    onBackdropPress={() => this.setState({showModal : !this.state.showModal})}
                    onSwipeComplete={() => this.setState({showModal : !this.state.showModal})} swipeDirection="left" 
                    animationIn={'slideInRight'} animationOut={'slideOutRight'} animationOutTiming={500}
                    style={styles.ModalContainer}
                    backdropColor='#fff'
                    backdropOpacity={0.65}
                    >

                    <View>
                        <Text style={styles.ModalText}>Are You Eligible For A Covid-19 Vaccine?</Text>

                        <Button 
                            buttonStyle={styles.ModalButton}
                            containerStyle={styles.ButtonContainer}
                            titleStyle={styles.ModalText}
                            title="Find Out"
                            onPress={() =>  navigate('Eligibility',this.setState({showModal : !this.state.showModal}))}
                        /> 
                    
                    </View>

                </Modal>

                {/* ZipCode Input Section */}
                  
                <View style={{paddingBottom:60, alignSelf:'center'}}>
                    <TextInput 
                        placeholder='5-Digit ZIP Code' 
                        keyboardType="numeric"
                        clearButtonMode='always'
                        maxLength={5}
                        returnKeyLabel='search'

                        style={styles.Input}
                        value={this.state.zipcode}
                        onChangeText= {(zipcode) => this.setState({zipcode})}
                    />
                </View>  

                {/* Another ZipCode Input, RNE Input

                  <Input placeholder='5-Digit ZIP Code' 
                        style={styles.Input}
                        value={this.state.zipcode}
                        onChangeText= {(zipcode) => this.setState({zipcode})}
                    />

                */}


                {/* If we allow radius Search to be incorportated. Code will be functioning*/}
                {/*<Text style={styles.Title}>Within</Text>
                <Input 
                    placeholder='10 Miles' 
                    style={styles.Input}
                    //rightIcon={{ type: 'material-icons', name: 'arrow-drop-down' , size:30}}
                    
                    //value={this.state.radius} 
                    //onChangeText= {(radius) => this.setState({radius})}
                     
                />*/}
                
                <Button 
                    buttonStyle={styles.Button}
                    containerStyle={styles.ButtonContainer}
                    titleStyle={styles.Button}
                    title="Search For Vaccines"
                    onPress={() =>  navigate('Results', {zipCode: this.state.zipcode})}> {/*radius: this.state.radius}*/}
                </Button>
                
                
                <Text style={{fontSize: 18,fontFamily:'SourceSansPro_600SemiBold',alignSelf:'center', paddingTop:100}}>
                    Made With ❤️ for Washington
                </Text>
                
            </View>
        )
    }
}



//StyleSheet//

const styles= StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        textAlign:'center',
        fontSize: 30,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
    },
    HeaderTitle2: {
        color: '#70BAFF',
        textAlign:'center',
        fontSize: 38,
        letterSpacing: 1,
        
    },
    Title: {
        fontSize: 22,
        fontFamily:'SourceSansPro_700Bold',
        textAlign:'center',
        letterSpacing: 1,
        //paddingTop:10,
      
        
    },
    /*Text: {
        fontSize: 16,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingLeft:5,
        paddingTop:7,
        //color:'#fff'
        
    },*/
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
        paddingTop:100,
        paddingBottom:5,
        fontFamily:'SourceSansPro_600SemiBold',
        fontSize:20,
        letterSpacing: 1,
        textAlign:'center',
        borderBottomWidth:0.5,
        width:250
    },

    //Modal Styling//
    ModalContainer: {
        backgroundColor:'#B1DDF9',
        opacity:0.80,
        shadowColor:'#70BAFF',
        borderRadius:25,
        width:200,
        maxHeight:200,
        top:180,
        left:165,
        paddingLeft:5
    },
    ModalTrigger: {
        alignSelf:'flex-end',
        backgroundColor:'#B1DDF9',
        shadowColor:'#70BAFF',
        fontSize:35,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        padding:10,
        top:20,
        color:'#fff'
    },
    ModalButton: {
        backgroundColor:'#70BAFF',
        borderRadius:25,
        fontSize: 18,
    },
    ModalText: {
        fontSize: 23,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingTop:7,
    },
    
})


export default Home;
