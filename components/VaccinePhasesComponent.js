import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Pressable} from 'react-native';
import { Button, Divider } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';


class VaccinePhases extends Component {


    static navigationOptions = {
        title: 'Vaccine Phases',
    };

    

    render () {

        const { navigate } = this.props.navigation;

        //Open Up Link to DOH //
        const dohPDF = () => WebBrowser.openBrowserAsync('https://doh.wa.gov/VaccinationPhasesInfographic.pdf');

        //Link to AllInWa Initiative//
        const allInWa = () => WebBrowser.openBrowserAsync('https://allinwa.org/vaccine-equity-initiative/');

        return (
           
            <ScrollView style={{paddingTop:15,paddingBottom:20, backgroundColor: '#ffffff'}}>

                <View style={{paddingLeft:7, paddingBottom:50}}>      
                    <Text style={styles.HeaderTitle}>Washington{"'"}s<Text style={styles.HeaderTitle2}> Covid-19 </Text>Vaccine Phases</Text>  

                    <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin:10, padding:1}}/>

                    <Text style={styles.SubHeader}>Tiers A & B </Text> 
                   
                </View>


                {/* Tier A Section */}
                <View style={{paddingLeft:7, paddingBottom:20}}>      
                    <Text style={styles.Title}>Tier A</Text>  
                    <Divider style={{ backgroundColor: '#B1DDF9', width:'15%', margin:1, padding:1}}/>            
                </View>

                <View style={{paddingLeft:7,paddingBottom:30,flexDirection:'row'}}>

                    <View>
                        <Button 
                            buttonStyle={styles.Circle}
                            containerStyle={styles.CircleContainer}
                            titleStyle={styles.Circle}
                            title="A1"
                            > 
                        </Button>

                        <Button 
                            buttonStyle={styles.Circle}
                            containerStyle={styles.CircleContainer}
                            titleStyle={styles.Circle}
                            title="A2"
                            > 
                        </Button>
                    </View>
                    
                    <View style={styles.Container}> 
                        <Text style={styles.ContainerTitle}>December 2020 - Present 2021</Text> 
                        <Text style={styles.ContainerText}>-High-risk healthcare workers in health care settings</Text>
                        <Text style={styles.ContainerText}>-High-risk first responders</Text> 
                        <Text style={styles.ContainerText}>-Long-term care facility residents</Text> 
                        <Text style={styles.ContainerText}>-All other workers at risk in health care settings</Text>         
                    </View> 
                   
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:10, padding:1}}/>

                {/* Tier B Section 1 */}
                <View style={{paddingLeft:7, paddingTop:30, paddingBottom:30}}>      
                    <Text style={styles.Title}>Tier B</Text>  
                    <Divider style={{ backgroundColor: '#B1DDF9', width:'15%', margin:1, padding:1}}/>            
                </View>

                <View style={{paddingLeft:7,paddingBottom:30,flexDirection:'row'}}>

                    <View>
                        <Button 
                            buttonStyle={styles.Circle}
                            containerStyle={styles.CircleContainer}
                            titleStyle={styles.Circle}
                            title="B1"
                            > 
                        </Button>

                        {/*<Icon
                            name='south'
                            type= 'material-icons' 
                            color='#70BAFF'
                            size={90}
                        />*/}
                    </View>
                    
                    <View style={styles.Container}>
                        <Text style={styles.ContainerTitle}>Present 2021</Text> 
                        <Text style={styles.ContainerText}>-All people 65 years or older</Text>
                        <Text style={styles.ContainerText}>-All people 50 years or older in multigenerational households (homes where individuals from 2 or more generations reside such as an elder and a grandchild)</Text> 
                        <Text style={styles.ContainerText}>-Educators and staff for pre-K through 12th grade</Text> 
                        <Text style={styles.ContainerText}>-Child care providers</Text> 
                    </View>         

                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin:10, padding:1}}/>

                {/* Tier B Section 2 */}
                <View style={{paddingLeft:7, paddingTop:30, paddingBottom:30}}>      
                    <Text style={styles.Title}>Tier B</Text>  
                    <Divider style={{ backgroundColor: '#B1DDF9', width:'15%', margin:1, padding:1}}/>            
                </View>

                <View style={{paddingLeft:7,paddingBottom:30,flexDirection:'row'}}>

                    <View>
                        <Button 
                            buttonStyle={styles.Circle}
                            containerStyle={styles.CircleContainer}
                            titleStyle={styles.Circle}
                            title="B2"
                            > 
                        </Button>
                    </View>
                    
                    <View style={styles.Container}>
                        <Text style={styles.ContainerTitle}>Present 2021</Text> 
                        <Text style={styles.ContainerText}>-High-risk critical workers who work in certain congregate settings: 
                            {'\n  '}-Agriculture; fishing vessel crews; food processing; grocery stores; 
                            {'\n  '}-Corrections; prisons, jails or detention centers; {'\n  '}-Public transit; {'\n  '}-Remaining first responders
                        </Text>
                        <Text style={styles.ContainerText}>-People 16 years or older who are pregnant or have a disability that puts them at high risk for severe COVID-19 illness.</Text> 
                    </View>         

                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin:10, padding:1}}/>

                {/* Tier B Sections 3 & 4*/}
                <View style={{paddingLeft:7, paddingTop:30, paddingBottom:30}}>      
                    <Text style={styles.Title}>Tier B</Text>  
                    <Divider style={{backgroundColor: '#B1DDF9', width:'15%', margin:1, padding:1}}/>            
                </View>

                <View style={{paddingLeft:7,paddingBottom:30,flexDirection:'row'}}>

                    <View >
                        <Button 
                            buttonStyle={styles.Circle}
                            containerStyle={styles.CircleContainer}
                            titleStyle={styles.Circle}
                            title="B3"
                            > 
                        </Button>
                
                        <Button 
                            buttonStyle={styles.Circle}
                            containerStyle={styles.CircleContainer}
                            titleStyle={styles.Circle}
                            title="B4"
                            > 
                        </Button>
                    </View>
                    
                    <View style={styles.Container}>
                        <Text style={styles.ContainerTitle}>Present 2021</Text> 
                        <Text style={styles.ContainerText}>-All people 60 years and older</Text> 
                        <Text style={styles.ContainerText}>-People 16 years or older with 2 or more co-morbidities or underlying conditions</Text> 
                        <Text style={styles.ContainerText}>-People, staff, and volunteers in congregate living settings: 
                            {'\n  '}-Correctional facilities; 
                            {'\n  '}-Group homes for people with disabilities;
                            {'\n  '}-settings where people experiencing homelessness live or access services;
                        </Text>
                        <Text style={styles.ContainerText}>-High-risk critical workers who work in certain congregate settings: 
                            {'\n  '}-Restaurants
                            {'\n  '}-Food services
                            {'\n  '}-Construction 
                            {'\n  '}-Manufacturing
                        </Text>
                    </View>         

                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:10, padding:1}}/>

                {/* Future Phases Section */}
                <View style={{paddingLeft:7, paddingTop:30, paddingBottom:30}}>      
                    <Text style={styles.Title}>Future Phases</Text>  
                    <Divider style={{ backgroundColor: '#B1DDF9', width:'40%', margin:1, padding:1}}/>            
                </View>

                <View style={{paddingBottom:30,alignSelf:'center', right:20}}>
                    
                    <View style={styles.Container}>
                        <Text style={styles.ContainerTitle}>Spring/Summer</Text> 
                        <Text style={styles.ContainerText}>-Information on who is eligible for Phases 2, 3 & 4 coming soon.</Text> 
                    </View>         

                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:10, padding:1}}/>


                {/* Information Section */}
                <View style={{paddingLeft:7, paddingTop:20, paddingBottom:15}}>
                    <Text style={styles.Title}>Focus On Equity</Text>
                    <Text style={styles.Text}>This approach prioritizes population groups who have been disproportionately impacted by COVID-19 due to external social factors and systemic inequities, including people of color; people with limited English proficiency; 
                        people in shared housing, crowded housing, and multigenerational homes; people in poverty and low-wage earners; people with disabilities that are connected to underlying health conditions that may put them at higher risk of COVID-19; 
                        and people with access barriers to healthcare. The social vulnerability index is one of several inputs informing equitable vaccine allocation.
                    </Text> 
                    <Text style={styles.Text2}>NOTE: Immigration and health insurance status do not impact eligibility.</Text> 
                    <Text style={styles.Text2}>The timeline represented here is tentative and subject to change based on vaccine supply and demand.</Text>
                    
                    <Pressable onPress={() => dohPDF()} style={{paddingBottom:15}}>
                        <Text style={styles.Text}>Visit <Text style={styles.Link}>doh.wa.gov/VaccinationPhasesInfographic.pdf</Text> to find out more about Washington's Covid-19 Vaccine Phases.</Text>     
                    </Pressable>

                    <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin:10, padding:1}}/>
                    
                    <View style={{paddingTop:15}}>
                        <Text style={styles.Title}>Support Equitable Vaccine Access In Washington</Text>
                        <Text style={styles.Text}><Text style={styles.Text2}>All In WA’s Vaccine Equity Initiative supports equitable vaccine access </Text>by streamlining and targeting funds to trusted, community-based organizations that can conduct linguistically and culturally-specific vaccine education and outreach, as well as address access, mobility and transportation barriers.</Text>
                        
                        <Pressable onPress={() => allInWa()} style={{paddingBottom:15}}>
                            <Text style={styles.Link}>Learn More</Text>      
                        </Pressable>
                    </View>
                    

                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:10, padding:1}}/>

                {/* Eligibility Section */}
                <View style={{paddingLeft:7,paddingTop:20, paddingBottom:40}}>

                    <Text style={styles.SubHeader}>Are You Eligible For A Vaccine?</Text>

                    <View style={{paddingTop:15}}>
                        <Button 
                            buttonStyle={styles.Button}
                            containerStyle={styles.ButtonContainer}
                            titleStyle={styles.Button}
                            title="Find Out"
                            onPress={() =>  navigate('Eligibility')}
                        />
                        
                    </View>
     
                </View>

            </ScrollView>
        )
    }
}


//StyleSheet//

const styles = StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        textAlign:'center',
        fontSize: 32,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
    },
    HeaderTitle2: {
        color: '#70BAFF',
        textAlign:'center',
        fontSize: 35,
        letterSpacing: 1,
        
    },
    SubHeader: {
        color: '#000',
        textAlign:'center',
        fontSize: 23,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingTop:5
    },
    //Provider Font Styling//
    Title: { 
        color: '#000',
        fontSize: 22,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingBottom:3
        
    },
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
        color:'#000'
        
        
    },
    Circle: {
        backgroundColor:'#70BAFF',
        borderRadius:50,
        padding:10,
        paddingTop:8,
        paddingBottom:8,
        fontSize:35,
        //bottom:1.7 = reveals light blue bg//
  
    },
    CircleContainer: {
        elevation:15,
        backgroundColor:'#B1DDF9',
        shadowColor:'#70BAFF',
        padding:1.7,
        borderRadius:50,
        marginTop:15,
        marginBottom:35
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
    Container:{
        backgroundColor: '#B1DDF9',
        opacity:0.70,
        padding:15,
        borderRadius:20,
        left:13 
    },
    ContainerTitle:{
        fontSize: 18,
        fontFamily:'SourceSansPro_700Bold',
        alignSelf:'center',
        paddingBottom:10
    },
    ContainerText:{
        fontSize: 16,
        fontFamily:'SourceSansPro_700Bold',  
        alignSelf:'center',
        width:248,
        letterSpacing: 1,
        paddingTop:3
    },
    Link:{
        textAlign:'center',
        fontSize: 16,
        fontFamily:'SourceSansPro_700Bold',
        textDecorationStyle:'solid',
        textDecorationLine:'underline',
        color: '#70BAFF',
        paddingTop:10
        
    }
    
});


export default VaccinePhases;  
