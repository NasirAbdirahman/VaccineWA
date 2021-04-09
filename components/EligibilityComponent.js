import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Pressable} from 'react-native';
import { Button, Divider } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';


class Eligibility extends Component {


    static navigationOptions = {
        title: 'Eligibility'
    };

    render () {

        const { navigate } = this.props.navigation;

        //Open Up Link to DOH //
        const dohPDF = () => WebBrowser.openBrowserAsync('https://doh.wa.gov/VaccinationPhasesInfographic.pdf');

        //Open Up Link to DOH vaccine Allocation & prioritization Doc. //
        const dohVAP = () => WebBrowser.openBrowserAsync('https://www.doh.wa.gov/Portals/1/Documents/1600/coronavirus/820-112-InterimVaccineAllocationPrioritization.pdf');

        return (
            
           
            <ScrollView style={{paddingTop:15,paddingBottom:20, backgroundColor: '#ffffff'}}>
                 
                <View style={{paddingLeft:7, paddingBottom:20}}>      
                    <Text style={styles.HeaderTitle}>Check your Covid-19 Vaccine Eligibility</Text>          
                   {/*} <Text style={styles.Text}>By Answering the <Text style={styles.Text2}>Official State Phase Finder</Text> Questionnaire, you can see when You are eligible to receive the vaccine.</Text> 
                   I HAVE RULED OUT THE  ELIGIBILITY QUIZ COMPONENT B/C THE WA DOH HAS ELIMINATED THE NEED*/}
                    <Text style={styles.Text}>By Viewing the <Text style={styles.Text2}>Official State Phase Framework for Vaccine Allocation and Prioritization</Text>, you can see when You are eligible to receive the vaccine.</Text>   
                </View>

                <View style={{paddingBottom:15}}>
                    <Button 
                        buttonStyle={styles.Button}
                        containerStyle={styles.ButtonContainer}
                        titleStyle={styles.Button}
                        
                        title="View The Framework"//Quiz Componet would have started here---WAS GOING TO GO TO FORM START//
                        onPress={() => dohVAP()}
                        > 
                    </Button>
                   
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:10, padding:1}}/>

                <View style={{paddingLeft:7, paddingTop:10, paddingBottom:15}}>
                    <Text style={styles.Title}>Why A FRAMEWORK?</Text>
                    {/*<Text style={styles.Title}>Why A Questionnaire?</Text> ELIMINATED THE NEED FOR QUIZ*/}
                    <Text style={styles.Text}>Due to an initial limited supply of vaccine, there is not enough right now to offer it to everyone. This means we had to make tough decisions about who gets the vaccine first. <Text style={styles.Text2}>This is called vaccine allocation and prioritization.</Text>{'\n'}
                        We are starting with <Text style={styles.Text2}>people who are most at risk such as healthcare workers, elders, vulnerable individuals, and high-risk critical workers.</Text> Our goal is for this process to be as fair and transparent as possible. 
                    </Text> 

                    <Text style={styles.Text}>We developed Washington’s framework for vaccine allocation and prioritization through an ongoing, robust public process.<Text style={styles.Text2}>The framework balances federal guidance with the unique needs 
                        of our state and seeks to address health inequities that stem from historical injustices.</Text> 
                    </Text> 

                    <Pressable onPress={() => dohPDF()}>
                        <Text style={styles.Text}>Visit <Text style={styles.Link}>doh.wa.gov/VaccinationPhasesInfographic.pdf</Text> to find out more about Washington's Covid-19 Vaccine Phases.</Text>
                    </Pressable>

                    <Pressable onPress={() => navigate('Vaccine Phases')}>
                        <Text style={styles.Text}>Or View<Text style={styles.Link}> Washington's Covid-19 Vaccine Phases On The App </Text></Text>
                    </Pressable>
                    
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
        textDecorationStyle:'solid',
        textDecorationLine:'underline',
        color: '#70BAFF',
        paddingTop:10 
    },
    
});


export default Eligibility;