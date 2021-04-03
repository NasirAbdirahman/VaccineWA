import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import { Button, Divider, Icon } from 'react-native-elements';
import { PROVIDERDATA } from '../shared/ProviderData';
import { ZIPCODEDATA } from '../shared/ZipCodeRadiusData';

function RenderZipRadius ({zipcodedata, navigation}) {

    const renderRadius = ({item}) => {
        return (
            <View>
                <View style={{flexDirection: "row",paddingTop:10,paddingBottom:10, paddingLeft:7}}>
                        <Text style={styles.SubHeader}>{item.zip1}</Text>
                        <View style={{bottom:10,left:240}}>
                            <Button
                                buttonStyle={styles.Button}
                                containerStyle={styles.ButtonContainer}
                                icon={{
                                    name:'forward',//keyboard-arrow-right//
                                    type: 'material-icons' ,
                                    color:'#fff',
                                }}
                                onPress={() => navigation.navigate('Radius Provider Results', {providerId: item.zip1})}
                            />
                        </View> 
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:1, padding:1}}/> 

                <View style={{flexDirection: "row",paddingTop:30,paddingBottom:10, paddingLeft:7}}> 
                    <Text style={styles.SubHeader}>{item.zip2}</Text>                   
                    <View style={{bottom:10,left:240}}>
                        <Button
                            buttonStyle={styles.Button}
                            containerStyle={styles.ButtonContainer}
                            icon={{
                                name:'forward',//keyboard-arrow-right//
                                type: 'material-icons' ,
                                color:'#fff',
                            }}
                            onPress={() => navigation.navigate('Radius Provider Results', {providerId: item.zip2})}
                        />
                        
                    </View>               
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:1, padding:1}}/> 

                <View style={{flexDirection: "row",paddingTop:30,paddingBottom:10, paddingLeft:7}}> 
                    <Text style={styles.SubHeader}>{item.zip3}</Text>
                    <View style={{bottom:10,left:240}}>
                        <Button
                            buttonStyle={styles.Button}
                            containerStyle={styles.ButtonContainer}
                            icon={{
                                name:'forward',//keyboard-arrow-right//
                                type: 'material-icons' ,
                                color:'#fff',
                            }}
                            onPress={() => navigation.navigate('Radius Provider Results', {providerId: item.zip3})}
                        />
                        
                    </View>               
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:1, padding:1}}/> 

                <View style={{flexDirection: "row",paddingTop:30,paddingBottom:10, paddingLeft:7}}> 
                    <Text style={styles.SubHeader}>{item.zip4}</Text>
                    <View style={{bottom:10,left:240}}>
                        <Button
                            buttonStyle={styles.Button}
                            containerStyle={styles.ButtonContainer}
                            icon={{
                                name:'forward',//keyboard-arrow-right//
                                type: 'material-icons' ,
                                color:'#fff',
                            }}
                            onPress={() => navigation.navigate('Radius Provider Results', {providerId: item.zip4})}
                        />
                        
                    </View>               
                </View>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:1, padding:1}}/> 

                <View style={{flexDirection: "row",paddingTop:30,paddingBottom:30, paddingLeft:7}}> 
                    <Text style={styles.SubHeader}>{item.zip5}</Text>
                    <View style={{bottom:10,left:240}}>
                        <Button
                            buttonStyle={styles.Button}
                            containerStyle={styles.ButtonContainer}
                            icon={{
                                name:'forward',//keyboard-arrow-right//
                                type: 'material-icons' ,
                                color:'#fff',
                            }}
                            onPress={() => navigation.navigate('Radius Provider Results', {providerId: item.zip5})}
                        />
                        
                    </View>               
                </View>

                {/* Another Style to Render ZipCodes 
                <View style={{flexDirection: "row",paddingTop:20, paddingBottom:30, paddingLeft:7}}> 
                    <View >
                        <Button    
                            buttonStyle={styles.Button}
                            containerStyle={styles.ButtonContainer}
                            titleStyle={styles.SubHeader}
                            title={item.zip1}
                            onPress={() =>  navigation.navigate('Radius Provider Results', {providerId: item.zip1})}> 
                        </Button>
                    </View>
                    <View style={{left:40}}>
                        <Button    
                            buttonStyle={styles.Button}
                            containerStyle={styles.ButtonContainer}
                            titleStyle={styles.SubHeader}
                            title={item.zip2}
                            onPress={() =>  navigation.navigate('Radius Provider Results', {providerId: item.zip2})}> 
                        </Button>
                    </View>
                </View>
                */}
                       
            </View>
   
        )
    }
    return (
        <View>
            <FlatList
                data={zipcodedata}
                renderItem={renderRadius}
                keyExtractor={item => item.id.toString()} //Because all the Providers have a unique ID, we can set this to use the ID//
            />
        </View>
      

    );
}

function RenderProviders ({providerdata, navigation}) {

    const renderProviderItem = ({item}) => {
        //if(item) {
            return  (
                <View>
                    <View style={{paddingTop:10, paddingLeft:7}}>
            
                        <Text style={styles.Title}>{item.name} </Text>
                        
                        <Text style={styles.Title2}>{item.address},{item.zipCode}</Text>
                        <Text style={styles.Title2}> 
                            In Stock:
                            <Icon 
                                name={item.availability === "Yes" ? 'check-circle' : 'highlight-off' }
                                type= 'material-icons' 
                                color={item.availability === "Yes" ? Icon.color='#70BAFF': Icon.color='#FF0000'}
                            /> 
                        </Text> 

                        <Text style={styles.Text}>Last Updated: {item.lastUpdated} </Text>

                        <View style={{left:140, bottom:55 }}>
                            <Button
                                buttonStyle={styles.Button}
                                containerStyle={styles.ButtonContainer}
                                icon={{
                                    name:'forward',//keyboard-arrow-right//
                                    type: 'material-icons' ,
                                    color:'#fff',
                                }}
                                onPress={() => navigation.navigate('Provider', {providerId: item.id})}
                            />
                        </View>       
                    </View>

                    <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:1, padding:1}}/>
                
                </View>
            );
        //} else (providerdata.length = '0'); {
            //return (
                //<View>
                   // <Text>Sorry No Providers In This ZipCode</Text>
               // </View>

            //)
        //}
            
    };

    return (
        <View>
            <FlatList
                data={providerdata}
                renderItem={renderProviderItem}
                keyExtractor={item => item.id.toString()} //Because all the Providers have a unique ID, we can set this to use the ID//
            />
        </View>
      

    );
}



class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            providerdata: PROVIDERDATA,
            zipcodedata: ZIPCODEDATA,
        };
       
    }


    static navigationOptions = {
        title: 'Results'
    };


    
   

    render () {
        //const { route } = this.props;// NO longer needed becasue route is passed into zipcode const//
        const { navigation } = this.props;
    
        const zipCode = this.props.route.params.zipCode;
        {/*const radiusZip = this.props.route.params.radius; If we allow radius Search to be incorportated. Code will be functioning*/}
        

        const providerdata = this.state.providerdata.filter(provider => provider.zipCode === zipCode);
        const zipcodedata = this.state.zipcodedata.filter(zipcode => zipcode.providerId === zipCode)
        const totalProviders = providerdata.length; //Displays Number of Providers found after the filter//
        
        
        

    
        return (
            
            <ScrollView style={{paddingTop:15,paddingBottom:20, backgroundColor: '#ffffff'}}>
                
                <Text style={styles.HeaderTitle}>We Found <Text style={styles.HeaderTitle2}>{totalProviders}</Text> Providers Near You</Text>

                <View style={{paddingLeft:7, paddingBottom:30}}>
                    <Text style={styles.Text}>Showing all results within <Text style={styles.Text2}>{zipCode}</Text> </Text>
                    <Text style={styles.Text}>Vaccine availability is subject to change. Most locations <Text style={styles.Text2}>Require</Text> appointments</Text>
                    <Text style={styles.Text}>Click a location with Vaccines <Text style={styles.Text2}>'In Stock'</Text> to move forward.</Text>
                
                    <Button 
                        buttonStyle={styles.Button}
                        containerStyle={styles.ButtonContainer}
                        titleStyle={styles.Button}
                        
                        title="Edit Your Search"
                        onPress={() =>  navigation.goBack()}> 
                    </Button>

                    <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', top:18, padding:1}}/>
                </View>
                
                <RenderProviders providerdata={providerdata} navigation={navigation}/>

                <View style={{paddingLeft:7, paddingBottom:45, paddingTop:25}}>

                    <Text style={styles.SubHeader}>These Zipcodes are within 15 miles of your searched zipcode</Text>{/* Huge Title that explains there are more providers close to you too*/}
                    <Text style={styles.SubHeaderText}>Search their providers as well</Text>

                    <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', top:18, padding:1}}/>
                </View>

                <RenderZipRadius zipcodedata={zipcodedata} navigation={navigation}/>
  
            </ScrollView>
            
        )
    }
}


//StyleSheet//

const styles = StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        textAlign:'center',
        fontSize: 25,
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
        //textAlign:'center',
        fontSize: 23,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
    },
    SubHeaderText: {
        fontSize: 16,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingTop:5,
        color:'#7F7F7F'
    },
    Title: { //Provider Font Styling//
        color: '#000',
        fontSize: 18,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingBottom:3
        
    },
    Title2: {
        color: '#000',
        fontSize: 16,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
    },
    Text: {
        fontSize: 16,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingTop:10,
        color:'#7F7F7F'   
    },
    Text2: {
        fontSize: 16,
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
        fontSize: 15,
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
    
});


export default Results;