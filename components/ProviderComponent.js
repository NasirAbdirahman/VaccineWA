import React, { Component } from 'react';
import { View,ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import { Divider, Icon} from 'react-native-elements';
import { PROVIDERDATA } from '../shared/ProviderData'; 

// Reviews the Vaccine Type offered and Informs the User//      
function RenderVaccineType({providerdata}) {

    const renderVaccine = ({item}) => {
            if (item.vaccineTypes.includes("Moderna") && item.availability === "Yes") {
                return (
                    <View>
                        <Text style={styles.Text}>Moderna Covid Vaccine </Text>
            
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                        /> 
                    </View>
                )
            } else if ( item.vaccineTypes.includes("Pfizer") && item.availability === "Yes") {
                return (
                    <View>
                        <Text style={styles.Text}>Pfizer/BioNTech Covid Vaccine </Text>
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                        /> 
                    </View>
                )
            } else if ( item.vaccineTypes.includes("J&J/Janssen") && item.availability === "Yes" ) {
                return(
                    <View>
                        <Text style={styles.Text}>Johnson & Johnson’s Janssen Covid Vaccine</Text>
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                        /> 
                    </View>
                )
            } else if (item.vaccineTypes.includes("Unknown") && item.availability === "Yes") {
                return (
                    <View style={{paddingLeft:10}}>
                        <Text style={styles.Text}>Unknown</Text>
                        <Text>Vaccines are available but the Provider has not stated the type</Text>
                        <Text>In Stock:
                            <Icon 
                                name={'check-circle'}
                                type= 'material-icons' 
                                color='#70BAFF'
                            /> 
                        </Text>
                    </View>
                )
            } else if (item.availability === "No")  { 
                return (
                <View style={{paddingLeft:10}}>
                    <Text style={styles.Text}> Vaccines Are Currently UnAvailable</Text>
                    <Text> In Stock:
                        <Icon 
                            name= 'highlight-off'
                            type= 'material-icons' 
                            color='#FF0000'
                        /> 
                        </Text>
                </View> 
                )
            } else { //May not need this code//
                return (
                <View/>
                ) //May not need this code//
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
function RenderProvider ({providerdata}) {

    const renderProviderDetails = ({item}) => {
        return (
            <View style={{paddingLeft:10}}>
                <Text style={styles.HeaderTitle}>{item.name}</Text>
                <Text>{item.id}</Text>
                <Text style={styles.Text}>{item.address}, {item.zipCode}</Text>
                <Text style={styles.Text}>Vaccine availability is subject to change.</Text>
                <Text style={styles.Text}>Find out if you can get a Covid-19 vaccine at this location.</Text>

                {/* All Links will go here..Will need to use the navigation props*/}

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin: 10, padding:0.5}}/>

                <View>
                    <Text style={styles.HeaderTitle}>Vaccine Types Available At This Location</Text>
                    
                       {/* Another Way to Provide the vaccineType--But does not provide if type is Unknown.
                        <View>
                            <Text style={styles.Text}>Moderna Covid Vaccine </Text>
                            <Text> 
                                In Stock:
                                <Icon 
                                    name={item.vaccineTypes.includes("Moderna") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" // Allows Checkss to show even if vaccinetype is unknown. fixed bug that showed 'x' when type was unknown but vaccines avaiible ? 'check-circle' : 'highlight-off' }//before includes(),using ==/=== did not work due to data array not seperating vaccinesType name//
                                    type= 'material-icons' 
                                    color={item.vaccineTypes.includes("Moderna") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" ? Icon.color='#70BAFF': Icon.color='#FF0000'}
                                /> 
                            </Text> 
                            <Text style={styles.Text}>Pfizer/BioNTech Covid Vaccine </Text>
                            <Text> 
                                In Stock:
                                <Icon 
                                    name={item.vaccineTypes.includes("Pfizer") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" ? 'check-circle' : 'highlight-off' }
                                    type= 'material-icons' 
                                    color={item.vaccineTypes.includes("Pfizer") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" ? Icon.color='#70BAFF': Icon.color='#FF0000'}
                                /> 
                                
                            </Text> 
                            <Text style={styles.Text}>Johnson & Johnson’s Janssen Covid Vaccine</Text>
                            <Text> 
                                In Stock:
                                <Icon 
                                    name={item.vaccineTypes.includes("J&J/Janssen") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" ? 'check-circle' : 'highlight-off' }
                                    type= 'material-icons' 
                                    color={item.vaccineTypes.includes("J&J/Janssen") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" ? Icon.color='#70BAFF': Icon.color='#FF0000'}
                                /> 
                            </Text> 
                        </View>
                 {// All Links will go here..Will need to use the navigation props//} */}
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
       
        const providerId = this.props.route.params.providerId; 
        const providerdata= this.state.providerdata.filter(provider => provider.id === providerId);
        
        return (
            <ScrollView style={{paddingTop:10,paddingBottom:20, backgroundColor: '#ffffff'}}>
                <RenderProvider providerdata={providerdata}/>
                <RenderVaccineType providerdata={providerdata}/>
               
                
            </ScrollView>
            
                
              
            
        ) 
    }
}


//StyleSheet//

const styles = StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        //textAlign:'center',
        fontSize: 23,
        fontFamily:'Scheherazade_700Bold',
        letterSpacing: 1,
        //paddingLeft:10,
    },
    /*HeaderTitle2: {
        color: '#70BAFF',
        textAlign:'center',
        fontSize: 35,
        letterSpacing: 1,
        
    },*/
    Text: {
        fontSize: 15,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        //paddingLeft:5,
        paddingTop:5,
        color:'#7F7F7F'
      
        
    },
    Text2: {
        fontSize: 16,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingLeft:5,
        paddingTop:7,
        color:'#000'
        
        
    },
    Button: {
        backgroundColor:'#70BAFF',
        borderRadius:25,
        padding:4,
        paddingTop:6,
        paddingBottom:6,
        alignSelf: "center",
        fontSize: 15,
  
    },
    ButtonContainer: {
        elevation:15,
        alignSelf: "center",
        backgroundColor:'#B1DDF9',
        shadowColor:'#70BAFF',
        padding:1.5,
        borderRadius:25,
    },
    /*Input: {
        paddingTop:10,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
    }*/
    
})


export default Provider;