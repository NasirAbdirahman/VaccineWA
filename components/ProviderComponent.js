import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Divider, Icon, Button} from 'react-native-elements';
import { PROVIDERDATA } from '../shared/ProviderData'; 
import * as WebBrowser from 'expo-web-browser';
import * as MailComposer from 'expo-mail-composer';
import * as Linking from 'expo-linking';
import openMap from 'react-native-open-maps';


// Reviews the Scheduling Link provided //      
function RenderScheduling({providerdata}) {

    const renderSchedulingLink = ({item}) => {
        
        //Opens Up the browser in App//
        const schedulingSite = () => WebBrowser.openBrowserAsync(item.schedulingLink);

        if (item.schedulingLink === "None" ) {
            return (
                <View>
                    <View>
                        <Button 
                            buttonStyle={styles.RedButton}
                            containerStyle={styles.RedButtonContainer}
                            titleStyle={styles.RedButton}
                            title="No Scheduling Appointment Link"
                            > 
                        </Button>
                    </View>
                </View>
            ) 
        } else (item.schedulingLink); {
            return (
                <View style={{paddingTop:7,paddingBottom:7}}>
                    <Pressable>
                        <Button 
                            buttonStyle={styles.Button}
                            containerStyle={styles.ButtonContainer}
                            titleStyle={styles.Button}
                            title="Check Available Appointments"
                            icon={{
                                name:'launch',
                                type: 'material-icons' ,
                                color:'#fff'
                            }}
                            onPress={schedulingSite}
                        /> 
                    </Pressable>
                </View>
            )
        }
    }

    return (
        <View>
            <FlatList
                data={providerdata}
                renderItem={renderSchedulingLink}
                keyExtractor={item => item.id.toString()}
                listKey="Scheduling"
            />
        </View>

    );
}

// Reviews the Website Link Provided //  
function RenderSite ({providerdata}) {

    const renderSiteLink= ({item}) => {
        
        //Opens Up the browser in App//
        const webSite = () => WebBrowser.openBrowserAsync(item.siteLink);

        if (item.siteLink === "None" ) {
            return (
                <View>
                    <View style={{paddingTop:5}}>
                        <Text> 
                            <Icon 
                                name= 'highlight-off'
                                type= 'material-icons' 
                                color='#FF0000'
                                left={1}
                                top={3} 
                            /> 
                            <Text style={styles.Text2}> No Website</Text>
                        </Text>
                    </View>
                </View>
            ) 
        } else (item.siteLink); {
            return (
                <View style={{paddingTop:5}}>
                    <Pressable onPress={webSite}>
                        <Text> 
                            <Icon
                                name='launch'
                                type= 'material-icons' 
                                color='#70BAFF'
                                top={3}
                                size={25}
                            />
                            <Text style={styles.Text}> Website</Text> 
                        </Text>
                    </Pressable>
                </View>
            )
        }
    }

    return (
        <View>
            <FlatList
                data={providerdata}
                renderItem={renderSiteLink}
                keyExtractor={item => item.id.toString()}
                listKey="Website"
            />
        </View>

    );

}  

// Reviews the Phone Number Provided //      
function RenderPhone({providerdata}) {

    const renderPhoneNumber = ({item}) => {
        
        //Open Up the Phone Api to make calls, MAY NEED TO ADD Ios FUNCTIONALITY, ISO= 'tel://' //
        const phoneCall = () => {Linking.openURL('tel:' + item.phone)};

        if (item.phone === "None") {
            return (
                <View>
                    <View>
                       <Text>
                            <Icon 
                                name= 'highlight-off'
                                type= 'material-icons' 
                                color='#FF0000'
                                left={1}
                                top={2.5} 
                                size={25}
                            /> 
                            <Text style={styles.Text2}> No Phone</Text>
                        </Text>
                    </View>
                </View>
            ) 
        } else (item.phone); {
            return (
                <View>
                    <Pressable onPress={() => phoneCall()} >
                        <Text>
                            <Icon
                                name='call'
                                type= 'material-icons' 
                                color='#70BAFF'
                                top={3}
                                size={25}
                            />
                            <Text style={styles.Text}> Phone</Text> 
                        </Text>
                    </Pressable>
                </View>
            )
        }
    }

    return (
        <View>
            <FlatList
                data={providerdata}
                renderItem={renderPhoneNumber}
                keyExtractor={item => item.id.toString()}
                listKey="Phone"
            />
        </View>

    );
}

// Reviews the Email Provided// 
function RenderEmail({providerdata}) {

    const renderEmailAccount = ({item}) => {

        //Function that uses MailComposer API//
        const sendMail = () => { 
            MailComposer.composeAsync({
                recipients: [item.email],
                subject: 'Covid-19 Vaccine Appointment',
                body: 'To whom it may concern:'
            })
        }

        if (item.email === "None") {
            return (
                <View >
                    <View>
                        <Text>
                            <Icon 
                                name= 'highlight-off'
                                type= 'material-icons' 
                                color='#FF0000'
                                left={1}
                                top={2.5} 
                                size={25}
                            /> 
                            <Text style={styles.Text2}> No Email</Text>
                        </Text> 
                    </View>
                </View>
            ) 
        } else (item.email); {
            return (
                <View>
                    <Pressable onPress={() => sendMail()}>
                        <Text>
                            <Icon
                                name='mail'
                                type= 'material-icons' 
                                color='#70BAFF'
                                top={5}
                                size={25}
                                iconStyle={styles.Email}
                            />                
                            <Text style={styles.Text}> Email</Text>   
                        </Text>
                    </Pressable>
                </View>
            )
        }
    }

    return (
        <View>
            <FlatList
                data={providerdata}
                renderItem={renderEmailAccount}
                keyExtractor={item => item.id.toString()}
                listKey="Email" 
            />
        </View>

    );
}

// Reviews the Vaccine Type offered and Informs the User//      
function RenderVaccineType({providerdata}) {

    const renderVaccine = ({item}) => {

        if (item.availability === "Yes" && item.vaccineTypes === "Moderna") {
            return (
                <View>
                    <Text style={styles.Text}>Moderna Covid Vaccine</Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name='check-circle'
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        /> 
                    </Text>
                </View>
            ) 
        } else if (item.availability === "Yes" && item.vaccineTypes === "Pfizer" ) {
            return (
                <View>
                    <Text style={styles.Text}>Pfizer/BioNTech Covid Vaccine </Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        />   
                    </Text>  
                </View>
            )
        } else if (item.availability === "Yes" && item.vaccineTypes === "J&J/Janssen" ) {
            return (
                <View>
                    <Text style={styles.Text}>Johnson & Johnson’s Janssen Covid Vaccine</Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        /> 
                    </Text>
                </View>
            )

        } else if (item.availability === "Yes" && item.vaccineTypes.includes("J&J/Janssen" && "Moderna" && "Pfizer")) {
            return(
                <View>

                    <Text style={styles.Text}>Johnson & Johnson’s Janssen Covid Vaccine</Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        /> 
                    </Text>

                    <Text style={styles.Text}>Moderna Covid Vaccine</Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name='check-circle'
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        /> 
                    </Text>

                    <Text style={styles.Text}>Pfizer/BioNTech Covid Vaccine</Text> 
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        /> 
                    </Text>
    
                </View>
            )
        }   else if ( item.availability === "Yes" && item.vaccineTypes.includes("J&J/Janssen" && "Moderna")) {
            return (
                <View>
                    <Text style={styles.Text}>Moderna Covid Vaccine </Text>
                    <Text style={styles.Text2}>In Stock:    
                        <Icon 
                            name='check-circle'
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        />  
                    </Text>

                    <Text style={styles.Text}>Johnson & Johnson’s Janssen Covid Vaccine</Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        /> 
                    </Text>
                </View>
            )
        } else if (item.availability === "Yes" && item.vaccineTypes.includes("J&J/Janssen" && "Pfizer")) {
            return (
                <View>
                   
                    <Text style={styles.Text}>Johnson & Johnson’s Janssen Covid Vaccine</Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        /> 
                    </Text>

                    <Text style={styles.Text}>Pfizer/BioNTech Covid Vaccine </Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        /> 
                    </Text>
                </View>
            )
        } else if (item.availability === "Yes" && item.vaccineTypes.includes("Moderna" && "Pfizer")) {
            return(
                <View>
                    <Text style={styles.Text}>Moderna Covid Vaccine</Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name='check-circle'
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        /> 
                    </Text>

                    <Text style={styles.Text}>Pfizer/BioNTech Covid Vaccine</Text> 
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                        /> 
                    </Text>
                </View>
            )
        }   else if (item.availability === "Yes" && item.vaccineTypes.includes("Unknown")) {
            return (
                <View>
                    <Text style={styles.Text}>Unknown</Text>
                    <Text style={styles.Text2}>Vaccines are available but the Provider has not stated the type</Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                            left={1}
                            top={2} 
                            
                        /> 
                    </Text>
                </View>
            )
        } else (item.availability === "No"); { 
            return (
                <View>
                    <Text style={styles.Text}>Vaccines Are Currently UnAvailable</Text>
                    <Text style={styles.Text2}>In Stock:
                        <Icon 
                            name= 'highlight-off'
                            type= 'material-icons' 
                            color='#FF0000'
                            left={1}
                            top={2} 
                        /> 
                    </Text>
                </View> 
            )
        }
    };


    return (
        <View>
            <FlatList
                data={providerdata}
                renderItem={renderVaccine}
                keyExtractor={item => item.id.toString()}
                listKey="Vaccine Type"
            />
        </View>

    );

}  


// Displays The provider Data//
function RenderProvider ({providerdata, navigation}) {

    const renderProviderDetails = ({item}) => {

        //Opens Up the Platform Specific Map ApI to render directions.//
        const openDirections = () => openMap({end:JSON.stringify(item.address)});
        //Can Also use query:JSON.stringify(item.name)--But renders incorrectly//

        return (
            <View>

                <View style={{paddingLeft:5}}>
                    {/*Back Button to Search Results*/}
                    <View style={{flexDirection: "row"}}>                
                        <Button
                            buttonStyle={styles.Button}
                            containerStyle={styles.ButtonContainer} 
                            icon={{
                                name:'arrow-back',//arrow-back-ios//
                                type: 'material-icons' ,
                                color:'#fff'   
                            }}
                            onPress={() => navigation.goBack()} 
                        />  
                        <Text style={styles.Text3}> Return To Search Results</Text>
                    </View>
                </View>
                    
                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin: 10, padding:1}}/>

                {/* Provider Information*/}         
                <View style={{paddingTop:10,paddingLeft:7, paddingBottom:30}}>
                    
                    <View style={{paddingBottom:10}}>
                        <Text style={styles.HeaderTitle}>{item.name}</Text>
                    </View>

                    <View style={{paddingBottom:10}}>
                        <Text style={styles.Text}>{item.address}, {item.zipCode}</Text>
                        <Text style={styles.Text2}>Vaccine availability is subject to change.</Text>
                        <Text style={styles.Text2}>Find out if you can get a Covid-19 vaccine at this location.</Text>
                    </View>

                   {/*Scheuling Information*/}
                    <View style={{paddingTop:7,paddingBottom:7}}>
                        <RenderScheduling providerdata={providerdata} />
                    </View>

                        
                    {/*Directions & Website*/}             
                    <View style={{paddingLeft:20, paddingTop:20,flexDirection: "row"}}>
                        <View style={{flex:1}}>
                            <Pressable onPress={() => openDirections()}>
                                <Text style={styles.Text}>
                                    <Icon
                                        name='directions'
                                        type= 'material-icons' 
                                        color='#70BAFF'
                                        top={3}
                                        size={25}  
                                        onPress={() => openDirections()}
                                    />
                                    <Text style={styles.Text}> Directions</Text>
                                </Text>
                            </Pressable>
                        </View>
                     

                        <View style={{flex:1}}>
                            <RenderSite providerdata={providerdata}/>
                        </View> 

                    </View>


                        {/*Phone & Email*/}  
                    <View style={{paddingLeft:20,paddingTop:30, flexDirection: "row"}}>
                        <View style={{flex:1 ,paddingRight:15, }}>
                            <RenderPhone providerdata={providerdata}/>
                        </View>

                        <View style={{flex:1}}>
                            <RenderEmail providerdata={providerdata} />  
                        </View>     
                    </View>

                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin: 10, padding:1}}/>


                {/* Instructions & Information For Every Provider*/}

                    {/* Vaccine Information*/}
                <View style={{paddingTop:20,paddingLeft:7, paddingBottom:20}}>
                    <View style={{paddingBottom:10}}>
                        <Text style={styles.Title}>Vaccine Types At This Location</Text>
                    </View>

                    <View>
                        <RenderVaccineType providerdata={providerdata}/>
                        
                        <Text style={styles.Text2}>Last Updated: {item.lastUpdated}</Text>

                        <Pressable onPress={() => navigation.navigate('Faq')}>
                            <View style={{paddingTop:10}}>
                                <Text style={styles.Link}>Covid-19 Vaccine Variations? </Text> 
                            </View>
                        </Pressable>

                    </View> 
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin: 10, padding:1}}/>

                    {/* Hours Of OPeration*/}
                <View style={{paddingTop:20,paddingLeft:7, paddingBottom:20}}>
                    <View style={{paddingBottom:7}}>
                        <Text style={styles.Title}>Hours Of Operation</Text>
                    </View>
                    <View>
                        <Text style={styles.Text2}>Sunday  -  10am - 6pm</Text> 
                        <Text style={styles.Text2}>Monday  -  10am - 6pm</Text>
                        <Text style={styles.Text2}>Tuesday  -  10am - 6pm</Text>
                        <Text style={styles.Text2}>Wednesday  -  10am - 6pm</Text>
                        <Text style={styles.Text2}>Thursday  -  10am - 6pm</Text>
                        <Text style={styles.Text2}>Friday  -  10am - 6pm</Text>
                        <Text style={styles.Text2}>Saturday  -  10am - 6pm</Text>
                    </View>
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin: 10, padding:1}}/>
                
                    {/* Provider Instructions*/}
                <View style={{paddingTop:20,paddingLeft:7, paddingBottom:20}}>
                    <View>
                        <Text style={styles.Title}>Provider Instructions For The Public</Text>
                        <Text style={styles.Text}>{item.instructions}</Text>    
                    </View>
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin: 10, padding:1}}/>
                
                    {/* Extra Instructions*/}
                <View style={{paddingTop:20,paddingLeft:7, paddingBottom:20}}>
                    <Text style={styles.Title}>Things To Know</Text>
                    <Text style={styles.Text2}>Vaccine Availability Is Subject To Change. </Text> 
                    <Text style={styles.Text2}>Vaccines By Appointment Only.</Text>
                    <Text style={styles.Text2}>You Must Wear A Mask To The Appointment.</Text>
                    <Text style={styles.Text2}>Please Wear A Short Sleeved Shirt.</Text>
                </View>
                         
            </View>
                 
        );

    };


    return (
        <View>
            <FlatList
                data={providerdata}
                renderItem={renderProviderDetails}
                keyExtractor={item => item.id.toString()} //Because all the Providers have a unique ID, we can set this to use the ID//
            />
        </View>

    );

}


class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            providerdata: PROVIDERDATA,
        };
    }


    static navigationOptions = {
        title: 'Provider'
    };
    

    render () {
        const { navigation } = this.props;
       
        const providerId = this.props.route.params.providerId; 
        const providerdata = this.state.providerdata.filter(provider => provider.id === providerId);
        
        return ( //Removed ScrollView & Warning disappeared. Does not chnage functionality//
            <View style={{paddingTop:10, backgroundColor: '#ffffff'}}>
                <RenderProvider providerdata={providerdata} navigation={navigation}/>   
            </View>
            
        ) 
    }
}


//StyleSheet//

const styles = StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        fontSize: 24,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        fontWeight:'bold'
        
    },
     //Provider Font Styling//
    Title: {
        color: '#000',
        fontSize: 20,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingBottom:5,
    },
    Text: {
        fontSize: 17.5,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingTop:5,
        paddingBottom:5,
        color:'#000'
     
    },
    Text2: {
        fontSize: 16,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingBottom:3,
        color:'#7F7F7F'
    },
    Text3: {
        fontFamily:'SourceSansPro_600SemiBold',
        fontSize: 15,
        letterSpacing: 1,   
        top:11
    },
    Button: {
        backgroundColor:'#70BAFF',
        borderRadius:25,
        padding:6,
        paddingTop:6,
        paddingBottom:6,
        alignSelf: "center",
        fontSize: 20,
    },
    ButtonContainer: {
        elevation:15,
        alignSelf: "center",
        backgroundColor:'#B1DDF9',
        shadowColor:'#70BAFF',
        padding:1.5,
        borderRadius:25,
    },
    RedButton: {
        backgroundColor:'#FF0000',
        borderRadius:25,
        padding:6,
        paddingTop:6,
        paddingBottom:6,
        alignSelf: "center",
        fontSize: 20,
    },
    RedButtonContainer: {
        elevation:15,
        alignSelf: "center",
        backgroundColor:'#FF0000',
        shadowColor:'#FF0000',
        padding:1.5,
        borderRadius:25,
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
    
})


export default Provider;