import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button, Divider, Tooltip } from 'react-native-elements';
import Modal from 'react-native-modal';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          zipcode: '',
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
            
            <View style={{paddingTop:15, paddingBottom:200, backgroundColor: '#ffffff'}}>

                <Text style={styles.HeaderTitle}>Find A <Text style={styles.HeaderTitle2}>Covid-19 </Text>Vaccine Near You</Text>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', padding:1}}/>
                
                {/* Pop Up Eligibility Question
                
                <Tooltip
                    popover={ 
                        <View>
                            <Text style={styles.TooltipText}>Are You Eligibile For The Covid-19 Vaccine?{"\n"}{"\n"}Take The Official Quiz? </Text>
                            <Button 
                                buttonStyle={styles.Button}
                                //containerStyle={styles.ButtonContainer}
                                //titleStyle={styles.TooltipText}
                                title="Quiz"
                                onPress={() =>  navigate('Eligibility')}> 
                            </Button>
                        </View>
                    
                    }
                    containerStyle={styles.TooltipContainer}
                    height={130}
                    width={200}
                    withPointer={false} 
                    >
                    <Text style={styles.Tooltip}>?</Text>

                </Tooltip>*/}

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
                  
                    
                

                <Text style={styles.Title}>Type A 5-Digit Zip Code</Text>
                <Input placeholder='Zip Code' 
                    style={styles.Input}
                    value={this.state.zipcode}
                    onChangeText= {(zipcode) => this.setState({zipcode})}
                />

                <Text style={styles.Title}>Within</Text>
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
                
                
                {/*<Text style={{fontSize: 18,fontFamily:'SourceSansPro_600SemiBold', paddingTop:100}}>A Volunteer-driven effort for a healthy Washington</Text>*/}
            </View>
        )
    }
}



//StyleSheet//

const styles= StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        textAlign:'center',
        fontSize: 23,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
    },
    HeaderTitle2: {
        color: '#70BAFF',
        textAlign:'center',
        fontSize: 27,
        letterSpacing: 1,
        
    },
    Title: {
        fontSize: 20,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingLeft:5,
        paddingTop:30,
      
        
    },
    Text: {
        fontSize: 16,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingLeft:5,
        paddingTop:7,
        //color:'#fff'
        
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
    },

    //Modal Styling//
    ModalContainer: {
        backgroundColor:'#B1DDF9',
        opacity:0.80,
        shadowColor:'#70BAFF',
        borderRadius:25,
        width:200,
        maxHeight:200,
        top:160,
        left:165,
        paddingLeft:5
    },
    ModalTrigger: {
        alignSelf:'flex-end',
        backgroundColor:'#B1DDF9',
        shadowColor:'#70BAFF',
        fontSize:30,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        padding:10,
        top:10,
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
