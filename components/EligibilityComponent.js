import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet} from 'react-native';
import { Button, Divider } from 'react-native-elements';


class Eligibility extends Component {


    static navigationOptions = {
        title: 'Eligibility'
    };

    render () {

        return (
            
           
            <ScrollView style={{paddingTop:15,paddingBottom:20, backgroundColor: '#ffffff'}}>
                 
                <View style={{paddingLeft:7, paddingBottom:20}}>      
                    <Text style={styles.HeaderTitle}>Check your Covid-19 Vaccine Eligibility</Text>          
                    <Text style={styles.Text}>By Answering the <Text style={styles.Text2}>Official State Phase Finder</Text> Questionnaire, you can see when You are eligible to receive the vaccine.</Text>  
                </View>

                <View style={{paddingBottom:15}}>
                    <Button 
                        buttonStyle={styles.Button}
                        containerStyle={styles.ButtonContainer}
                        titleStyle={styles.Button}
                        
                        title="Start"
                        //onPress={() =>  navigation.goBack()} {NEEDS TO GO TO FORM START}
                        > 
                    </Button>
                    <Text>Hey</Text>
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:10, padding:1}}/>

                <View style={{paddingLeft:7, paddingTop:10, paddingBottom:15}}>
                    <Text style={styles.Title}>Why A Questionnaire?</Text>
                    <Text style={styles.Text}>Due to a limited vaccine supply, we need to provide the vaccine in phases. 
                        We are starting with <Text style={styles.Text2}>people who are most at risk such as healthcare workers, elders, vulnerable individuals, and high-risk critical workers.</Text> Our goal is for this process to be as fair and transparent as possible. 
                    </Text> 
                    <Text style={styles.Text}>Visit <Text /*NEEDS TO LINK TO Pdf*/style={styles.Link}>doh.wa.gov/VaccinationPhasesInfographic.pdf</Text> to find out more about Washington's Covid-19 Vaccine Phases.</Text>
                    <Text style={styles.Text}>Or View<Text /*NEEDS TO LINK TO Phases Page*/style={styles.Link}> Washington's Covid-19 Vaccine Phases On The App </Text></Text>
                    
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin:10, padding:1}}/>

                <View style={{paddingLeft:7,paddingTop:10, paddingBottom:15}}>
                    <Text style={styles.Title}>Who can Receive The Vaccine?</Text>
                    <Text style={styles.Text}><Text style={styles.Text2}>Everyone will be eligible to receive the COVID-19 vaccine over the coming months.</Text> </Text>
                    <Text style={styles.Text2}>The COVID-19 vaccine is free for all, regardless of whether you have private health insurance, are uninsured, or are on Medicare.</Text>
                    <Text style={styles.Text}><Text style={styles.Text2}>We all will benefit if those who face the highest risk get vaccinated first.</Text> This will reduce the burden on hospitals, slow the spread of COVID, and help us reopen our communities faster. 
                        We are committed to ensuring that every eligible person in Washington will get vaccinated.</Text>  
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin:10, padding:1}}/>

                <View style={{paddingLeft:7, paddingTop:10, paddingBottom:15}}>
                    <Text style={styles.Title}>How do I know if I am Eligible?</Text>
                    <Text style={styles.Text}>Please complete the following questions to determine whether you are eligible to get the COVID-19 vaccine now. </Text>
                    <Text style={styles.Text2}>Please know we will NOT share your information with anyone. We will use it to assess eligibility and inform planning.</Text>
                    <Text style={styles.Text2}>If you are eligible, you can use the confirmation page to show your eligibility when you go to get vaccinated. The confirmation page is not an appointment. You will still need to make an appointment with a vaccine provider. 
                    </Text>
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin:10, padding:1}}/>

                <View style={{paddingLeft:7, paddingTop:10, paddingBottom:50}}>
                    <Text style={styles.Title}>How About If I Am Not Eligible?</Text>
                    <Text style={styles.Text}>If you are not eligible yet, please provide contact information and the Washington State Department of Health will provide updates on COVID vaccinations and notify you when you become eligible.</Text>
                    <Text style={styles.Text2}>We can contact you via phone, text, email or through this App and let you know when you’re eligible to receive the vaccine.</Text>
                    <Text style={styles.Text}>Or you can also check back later.</Text>                   
                </View>

            </ScrollView>
        )
    }
}


//StyleSheet//

const styles = StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        //textAlign:'center',
        fontSize: 28,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
    },
    /*HeaderTitle2: {
        color: '#70BAFF',
        textAlign:'center',
        fontSize: 35,
        letterSpacing: 1,
        
    },*/
    Title: { //Provider Font Styling//
        color: '#000',
        fontSize: 18,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingBottom:3
        
    },
    /*Title2: {
        color: '#000',
        fontSize: 17,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
    },*/
    Text: {
        fontSize: 15,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingTop:10,
        color:'#7F7F7F'
      
        
    },
    Text2: {
        fontSize: 15,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingTop:7,
        color:'#000'//#70BAFF-Alt. Color//
        
        
    },
    Button: {
        backgroundColor:'#70BAFF',
        borderRadius:25,
        padding:4,
        paddingTop:6,
        paddingBottom:6,
        alignSelf: "center",
        fontSize: 20,
        //bottom:1.7 = reveals light blue bg//
  
    },
    ButtonContainer: {
        elevation:15,
        alignSelf: "center",
        backgroundColor:'#B1DDF9',
        shadowColor:'#70BAFF',
        padding:1.7,
        borderRadius:25,
    },
    Link:{
        fontSize: 15,
        fontFamily:'SourceSansPro_700Bold',
        color: '#70BAFF',
        paddingTop:10
        
    },
    
});


export default Eligibility;