import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Divider, Icon, Button} from 'react-native-elements';
import { PROVIDERDATA } from '../shared/ProviderData'; 

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

        } else if ( item.availability === "Yes" && item.vaccineTypes.includes("J&J/Janssen" && "Moderna")) {
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
        } else if (item.availability === "Yes" && item.vaccineTypes.includes("Unknown")) {
            return (
                <View>
                    <Text style={styles.Text}>Unknown</Text>
                    <Text style={styles.Text}>Vaccines are available but the Provider has not stated the type</Text>
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
                <Text style={styles.Text}> Vaccines Are Currently UnAvailable</Text>
                <Text style={styles.Text2}> In Stock:
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
                keyExtractor={item => item.id.toString()} //Because all the Providers have a unique ID, we can set this to use the ID//
            />
        </View>

    );

}   


// Displays The provider Data//
function RenderProvider ({providerdata, navigation}) {

    const renderProviderDetails = ({item}) => {
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
                                color:'#fff',
                                
                                
                            }}
                            //title="Return To Search Results"
                            //titleStyle={styles.titleStyle}
                            onPress={() => navigation.goBack()} 
                        />  
                        <Text style={styles.Text3}> Return To Search Results</Text>
                    </View>
                </View>
                    
                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin: 10, padding:1}}/>

                {/* Provider Information*/}         
                <View style={{paddingTop:10,paddingLeft:7, paddingBottom:20}}>
                    
                    <View style={{paddingBottom:10}}>
                        <Text style={styles.HeaderTitle}>{item.name}</Text>
                    </View>

                    <View style={{paddingBottom:10}}>
                        <Text style={styles.Text}>{item.address}, {item.zipCode}</Text>
                        <Text style={styles.Text2}>Vaccine availability is subject to change.</Text>
                        <Text style={styles.Text2}>Find out if you can get a Covid-19 vaccine at this location.</Text>
                    </View>

                    {/*Contact Information For Every Provider*/}
                    <View style={{paddingTop:7,paddingBottom:7}}>
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
                            onPress={() =>  navigation.goBack()} //Not going anywhere//
                            > 
                        </Button>
                    </View>

                    <View style={{paddingTop:10,flexDirection: "row"}}>
                        <View >
                            <Text style={styles.Text}>
                                <Icon
                                    name='directions'
                                    type= 'material-icons' 
                                    color='#70BAFF'
                                    top={3}
                                    onPress={() => navigation.navigate({/*OPEN UP MAPS API*/})} 
                                />
                                <Text style={styles.Text}> Directions</Text>
                            </Text>
                        </View>

                        <View style={{paddingTop:5,left:40}}>
                            <Text>
                                <Icon
                                    name='launch'
                                    type= 'material-icons' 
                                    color='#70BAFF'
                                    top={3}
                                    onPress={() => navigation.navigate({/*OPENS UP BROWSER EXTENSION*/})} 
                                />
                                <Text style={styles.Text}> Website</Text> 
                            </Text>
                        </View>
                    </View>

                    <View style={{paddingTop:10, flexDirection: "row",}}>
                        <View>
                            <Text>
                                <Icon
                                    name='call'
                                    type= 'material-icons' 
                                    color='#70BAFF'
                                    top={3}
                                    onPress={() => navigation.navigate({/*OPENS UP PHONE API*/})} 
                                />
                            <Text style={styles.Text}> Phone</Text> 
                            </Text>
                        </View>

                        <View style={{left:80}}>
                            <Text>
                                <Icon
                                    name='mail'
                                    type= 'material-icons' 
                                    color='#70BAFF'
                                    top={5}
                                    onPress={() => navigation.navigate({/*OPENS UP MAIL API*/} )} 
                                    
                                />
                                <Text style={styles.Text}> Email</Text> 
                            </Text>
                            
                        </View>
                    </View>
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin: 10, padding:1}}/>

                {/* Instructions & Information For Every Provider*/}
                <View style={{paddingTop:10,paddingLeft:7, paddingBottom:20}}>
                    <View style={{paddingBottom:10}}>
                        <Text style={styles.Title}>Vaccine Types Available At This Location</Text>
                    </View>

                    <View>
                        {/* Render Vaccine Function*/}
                        <RenderVaccineType providerdata={providerdata}/>
                        <Text style={styles.Text2}>Last Updated: {item.lastUpdated}</Text>
                        <Text /*NEEDS TO LINK TO INFO */style={styles.Link}>Covid-19 Vaccine Variations? </Text> 

                    </View> 
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin: 10, padding:1}}/>

                <View style={{paddingTop:10,paddingLeft:7, paddingBottom:20}}>
                    <View>
                        <Text style={styles.Title}>Hours</Text>
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

                <View style={{paddingTop:10,paddingLeft:7, paddingBottom:20}}>
                    <View>
                        <Text style={styles.Title}>Provider Instructions For The Public</Text>
                        <Text style={styles.Text}>{item.instructions}</Text>    
                    </View>
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin: 10, padding:1}}/>

                <View style={{paddingTop:10,paddingLeft:7, paddingBottom:20}}>
                    <Text style={styles.Title}>Things To Know</Text>
                    <Text style={styles.Text2}>Vaccine Availability Is Subject To Change. </Text> 
                    <Text style={styles.Text2}>Vaccines By Appointment Only.</Text>
                    <Text style={styles.Text2}>You Must Wear A Mask To The Appointment.</Text>
                    <Text style={styles.Text2}>Please Wear A Short Sleeved Shirt.</Text>
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin: 10, padding:1}}/>
                         
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
            <View style={{paddingTop:10,paddingBottom:20, backgroundColor: '#ffffff'}}> 
                <RenderProvider providerdata={providerdata} navigation={navigation}/>  
            </View>    
            
        ) 
    }
}


//StyleSheet//

const styles = StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        fontSize: 23,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        fontWeight:'bold'
        
    },
    Title: { //Provider Font Styling//
        color: '#000',
        fontSize: 19,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingBottom:5,
    },
    Text: {
        fontSize: 17,
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
        color:'#7F7F7F'//#70BAFF-Alt. Color//  
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
    Link:{
        textAlign:'center',
        fontSize: 16,
        fontFamily:'SourceSansPro_700Bold',
        color: '#70BAFF',
        paddingTop:10
        
    }
    
})


export default Provider;