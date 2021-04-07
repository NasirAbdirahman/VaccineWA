import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Divider, Icon} from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';
import { FAQDATA } from '../shared/FaqData';


//Renders The Header/Title of each Question//
renderHeader = (section, _, isActive) => {
    return (
        <View style={[styles.header, isActive ? styles.active : styles.inactive]}> 
            <Text style={styles.headerText}>{section.id + 1 }) {section.title}</Text>
        </View>
    );
};


//Renders The Content/Text of each Answer//
renderContent = (section, _, isActive) => {
    return (
        <View style={[styles.content, isActive ? styles.active : styles.inactive]}>
            <Text >
                {section.content}
            </Text>
        </View>
    );
}

class FaqAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqdata: FAQDATA,
            activeSections: [],
            collapsed: true,
        };
       
    }


    static navigationOptions = {
        title: 'Faq',
    };


    /*toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };*/
    
    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };



    render () {

        //const { navigate } = this.props.navigation;
        const { navigation } = this.props;

        const generalFaqData = this.state.faqdata.filter(question => question.id < 35);
        const covidFaqData = this.state.faqdata.filter(question => question.id > 34);
        const { activeSections } = this.state;



        return (
           
            <ScrollView style={{paddingTop:15, backgroundColor: '#ffffff'}}>

                {/* Header Section */}
                <View style={{paddingLeft:7, paddingBottom:10}}>      
                    <Text style={styles.HeaderTitle}>Frequently Asked Questions</Text>  

                    <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin:10, padding:1}}/>
                   
                </View>

                <View style={{padding:1, paddingBottom:10}}>      
                    <Text style={styles.SubHeader}>About <Text style={styles.SubHeader2}>COVID-19</Text> Vaccines</Text>

                    <Divider style={{ backgroundColor: '#B1DDF9', width:'75%',padding:1, bottom:20, left:10}}/> 

                    <Text style={styles.Text}>The COVID-19 vaccines can protect you in several key ways:</Text>
                        <Text style={styles.Text2}>-They can greatly reduce your chance of getting seriously ill if you get COVID-19</Text>
                        <Text style={styles.Text2}>-Completing the vaccine series reduces your chances of hospitalization and lowers your risk of dying from COVID-19
                            They are highly effective at preventing COVID-19
                        </Text>
                        <Text style={styles.Text2}>-They add to the number of people in the community who are protected from getting COVID-19, making it harder for the disease to spread</Text>
                    
                    <View style={{paddingTop:20}}>
                        <Text style={styles.Text}>Experts continue to conduct more studies about the ability of the vaccine to keep people from spreading the virus to others.</Text>
                        <Text style={styles.Text2}>-Once you are fully vaccinated, it is still possible to get COVID-19, but it’s a much smaller chance than if you weren’t vaccinated. </Text>
                        <Text style={styles.Text2}>-You’re also very unlikely to get really sick or need to go to the hospital. The studies found that each of the vaccines had at least 85 percent efficacy in preventing SEVERE COVID-19 illness.</Text>
                    
                    </View>

                    <View style={{paddingTop:20}}>
                        <Text style={styles.Text}>The vaccines also prevented many people from getting ANY COVID-19 symptoms:</Text>
                        <Text style={styles.Text2}>-Johnson & Johnson (Janssen), 74 percent </Text>
                        <Text style={styles.Text2}>-Pfizer-BioNTech, 95 percent</Text>
                        <Text style={styles.Text2}>-Moderna, 94 percent </Text>                
                    </View>

                    {/* Vaccine Info Section */}
                    <View style={{paddingTop:20}}>
                        <Text style={styles.Text}>Pfizer-BioNTech COVID-19 Vaccine </Text>
                        <Text style={styles.Text2}>Authorized for emergency use in persons age 16 years and older. This is a two-dose vaccine, given 21 days apart. You will not be considered fully protected until one to two weeks after you receive the second dose. 
                            The clinical trials showed no major unanticipated adverse events. This vaccine arrived in Washington on December 14.</Text>
                        <Text style={styles.Text2}>In Pfizer-BioNTech Vaccine Clinical Trials (U.S. Trial Data):</Text>
                        <Text style={styles.Text2}> - 10% of participants identified as Black/African American.</Text> 
                        <Text style={styles.Text2}> - 13% of participants identified as Hispanic/Latinx.</Text> 
                        <Text style={styles.Text2}> - 6% identified as Asian.</Text>                
                        <Text style={styles.Text2}> -1.3% identified as Native American.</Text>    
                        <Text style={styles.Text2}> - 69.7% identified as White.</Text>                                           
                    </View>

                    <View style={{paddingTop:20}}>
                        <Text style={styles.Text}>Moderna COVID-19 Vaccine </Text>
                        <Text style={styles.Text2}>Authorized for emergency use in individuals age 18 years and older. This is a two-dose vaccine, given 28 days apart. You are not considered fully protected until one to two weeks after you get the second dose. 
                            The clinical trials showed no major unanticipated adverse events. We received our first shipment of this vaccine the week of December 21.</Text>
                        <Text style={styles.Text2}>In Moderna Vaccine Clinical Trials (U.S. Trial Data):</Text>
                        <Text style={styles.Text2}> - 10% of participants identified as Black/African American.</Text>
                        <Text style={styles.Text2}> - 20% of participants identified as Hispanic/Latinx.</Text>                
                        <Text style={styles.Text2}> - 4% identified as Asian.</Text>
                        <Text style={styles.Text2}> - 3% identified as 'of other descent'. </Text> 
                        <Text style={styles.Text2}> - 63% identified as White. </Text>                                                               
                    </View>

                    <View style={{paddingTop:20}}>
                        <Text style={styles.Text}>Johnson & Johnson - Janssen COVID-19 Vaccine</Text>
                        <Text style={styles.Text2}>Authorized for emergency use in individuals age 18 years and older. This is a single dose (one shot) vaccine. You are not considered fully protected until one to two weeks after you get the vaccine. 
                            The clinical trials showed no major unanticipated adverse events. We received our first shipment of this vaccine the week of March 1.</Text>
                        <Text style={styles.Text2}>In Johnson & Johnson Vaccine Clinical Trials (Global Trial Data)</Text>
                        <Text style={styles.Text2}>Approximately:</Text>
                            <Text style={styles.Text2}> - 17% of participants identified as Black/African American.</Text> 
                            <Text style={styles.Text2}> - About 45% of all participants identified as Hispanic/Latino.</Text> 
                            <Text style={styles.Text2}> - 3.5% identified as Asian.</Text>     
                            <Text style={styles.Text2}> - 8.4% identified as American Indian or Alaska Native.</Text> 
                            <Text style={styles.Text2}> - 0.25% identified as Native Hawaiian or other Pacific Islander.</Text>  
                            <Text style={styles.Text2}> - 8.6% identified with multiple races, or race was unknown or not reported.</Text> 
                            <Text style={styles.Text2}> - 62% identified as White.</Text>                  
                    </View>

                    <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin:10, padding:1}}/>
                   
                </View>

                {/* Accordion FAQ Section */}
                <View style={styles.Container}>
                    
                    <View style={{paddingBottom:5}}>
                        <Text style={styles.SubHeader}>General FAQs</Text>
                        <Divider style={{ backgroundColor: '#B1DDF9', width:'25%',padding:1, bottom:20, left:10}}/>  
                    </View>                 
                        
                    <Accordion
                        activeSections={activeSections}
                        sections={generalFaqData}
                        renderHeader={renderHeader}
                        renderContent={renderContent}
                        duration={400}
                        onChange={this.setSections}
                    />
                   

                    <View style={{paddingTop:25, paddingBottom:1}}>
                        <Text style={styles.SubHeader}>Covid-19 FAQ</Text>
                        <Divider style={{ backgroundColor: '#B1DDF9', width:'25%', padding:1, bottom:20, left:10}}/>
                    </View>
                    
                    <Accordion
                        activeSections={activeSections}
                        sections={covidFaqData}
                        renderHeader={renderHeader}
                        renderContent={renderContent}
                        duration={400}
                        onChange={this.setSections}    
                    />
                

                    {/* Footer/Extra Links Section */}
                    <View style={{paddingTop:30}}>
                        <Text style={styles.SubHeader}>More Information From Sources</Text>
                        <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', padding:1, bottom:20, left:10}}/>        

                        <View style={{padding:5}}>
                            <Text>
                                <Icon
                                    name='launch'
                                    type= 'material-icons' 
                                    color='#70BAFF'
                                    bottom={20}
                                    onPress={() => navigation.navigate({/*OPENS UP BROWSER EXTENSION to https://www.cdc.gov/coronavirus/2019-ncov/vaccines/faq.html*/})} 
                                />
                                <Text style={styles.Title}> Center For Disease Control</Text> 
                            </Text>
                        </View>

                        <View style={{padding:5}}>
                            <Text>
                                <Icon
                                    name='launch'
                                    type= 'material-icons' 
                                    color='#70BAFF'
                                    bottom={20}
                                    onPress={() => navigation.navigate({/*OPENS UP BROWSER EXTENSION to  https://www.doh.wa.gov/Emergencies/COVID19/Vaccine*/})} 
                                />
                                <Text style={styles.Title}> WA Department Of Health</Text> 
                            </Text>
                        </View>
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
    SubHeader: {
        color: '#000',
        fontSize: 23,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingLeft:7,
        //paddingTop:15,
        paddingBottom:15
    },
    SubHeader2: {
        color: '#70BAFF',
        fontSize: 23,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingLeft:7,
        //paddingTop:15,
        paddingBottom:15
    },
    Title: { 
        color: '#000',
        fontSize: 22,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        
    },
    Text:{
        fontSize: 16,
        fontFamily:'SourceSansPro_700Bold',  
        letterSpacing: 1,
        paddingLeft:7,
        paddingTop:3
    },
    Text2: {
        fontSize: 15,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingTop:5,
        paddingLeft:7,
        color:'#7F7F7F'

    },
    //Accordion Styling//
    Container:{
        backgroundColor: '#fff',
        opacity:0.70,
        paddingTop:20,
        paddingBottom:150,
        padding:10,
        
    },
    header: {
        backgroundColor: 'rgba(177,221,249,1)',
        padding: 11,
    },
    headerText: {
        fontSize: 17,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        color: '#000',
    },
    content: {
        fontFamily:'SourceSansPro_700Bold',
        fontSize: 17,
        padding: 10,
        letterSpacing: 1,
        backgroundColor: '#fff',
    },
    active: {
        fontSize: 17,
        fontFamily:'SourceSansPro_700Bold',
    },
    inactive: {
        backgroundColor: '#fff',
    },

    
});


export default FaqAccordion;  