import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList,Pressable } from 'react-native';
import { Divider, Icon, Button} from 'react-native-elements';
import { PROVIDERDATA } from '../shared/ProviderData'; 
import { ZIPCODEDATA } from '../shared/ZipCodeRadiusData';


// Displays the zipcodes that are in a 15 mile radius of the zipcode, if their are no providers// 
function RenderZipRadius ({zipcodedata, navigation}) {

    const renderRadius = ({item}) => {
        return (
            <View>

                <Pressable onPress={() => navigation.navigate('Radius Provider Results', {providerId: item.zip1})}>  
                    <View style={{flexDirection: "row",paddingTop:10,paddingBottom:15, paddingLeft:15}}>
                        <Text style={styles.SubHeaderTitle}>{item.zip1}</Text>
                        <View style={{left:215}}>
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
                </Pressable>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:1, padding:1}}/> 

                <Pressable onPress={() => navigation.navigate('Radius Provider Results', {providerId: item.zip2})}>
                    <View style={{flexDirection: "row",paddingTop:30,paddingBottom:15, paddingLeft:15}}> 
                        <Text style={styles.SubHeaderTitle}>{item.zip2}</Text>                   
                        <View style={{left:215}}>
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
                </Pressable>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:1, padding:1}}/> 

                <Pressable onPress={() => navigation.navigate('Radius Provider Results', {providerId: item.zip3})}>
                    <View style={{flexDirection: "row",paddingTop:30,paddingBottom:15, paddingLeft:15}}> 
                        <Text style={styles.SubHeaderTitle}>{item.zip3}</Text>
                        <View style={{left:215}}>
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
                </Pressable>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:1, padding:1}}/> 

                <Pressable onPress={() => navigation.navigate('Radius Provider Results', {providerId:item.zip4})}>
                    <View style={{flexDirection: "row",paddingTop:30,paddingBottom:15, paddingLeft:15}}> 
                        <Text style={styles.SubHeaderTitle}>{item.zip4}</Text>
                        <View style={{left:215}}>
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
                </Pressable>

                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:1, padding:1}}/> 

                <Pressable onPress={() => navigation.navigate('Radius Provider Results', {providerId: item.zip5})}>
                    <View style={{flexDirection: "row",paddingTop:30,paddingBottom:30, paddingLeft:15}}> 
                        <Text style={styles.SubHeaderTitle}>{item.zip5}</Text>
                        <View style={{left:215}}>
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
                </Pressable>

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


// Displays the Providers in A 15 Mile Radius of the zipcode entered in by the User//  
function RenderRadiusProviders ({providerdata, navigation}) {

    const renderProviderItem = ({item}) => {
       
        return  (
            <View>
                <Pressable onPress={() => navigation.navigate('Provider', {providerId: item.id})}>
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

                </Pressable>
            </View>
            
        );
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


class RadiusProviderResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            providerdata: PROVIDERDATA,
            zipcodedata: ZIPCODEDATA,
        };
    }


    static navigationOptions = {
        title: 'Radius Provider Results'
    };



    render () {
        const { navigation } = this.props;
       
        const providerId = this.props.route.params.providerId; 
        const providerdata = this.state.providerdata.filter(provider => provider.zipCode === providerId);
        const zipcodedata = this.state.zipcodedata.filter(zipcode => zipcode.providerId === providerId)

        const totalProviders = providerdata.length; //Displays Number of Providers found after the filter//
        

        if (providerdata.length >= 1) {
            return ( 
                <ScrollView style={{paddingTop:15,paddingBottom:20, backgroundColor: '#ffffff'}}>
                    
                    <Text style={styles.HeaderTitle}>We Found <Text style={styles.HeaderTitle2}>{totalProviders}</Text> Provider(s) In <Text style={styles.HeaderTitle2}> {providerId}</Text></Text>

                    <View style={{paddingLeft:7, paddingBottom:30}}>
                        <Text style={styles.Text}>Showing results in <Text style={styles.Text2}>{providerId}</Text><Text> Within 15 Miles Of Your ZipCode</Text></Text>
                        <Text style={styles.Text}>Vaccine availability is subject to change. Most locations <Text style={styles.Text2}>Require</Text> appointments</Text>
                        <Text style={styles.Text}>Click a location with Vaccines <Text style={styles.Text2}>'In Stock'</Text> to move forward.</Text>
                    
                        <View style={{paddingTop:15,paddingBottom:10}}>
                            <Button 
                                buttonStyle={styles.Button}
                                containerStyle={styles.ButtonContainer}
                                titleStyle={styles.Button}
                                
                                title="Return To Initial Search"
                                onPress={() =>  navigation.goBack()}> 
                            </Button>
                        </View>

                        <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', top:18, padding:1}}/>
                    </View>
                    

                    <RenderRadiusProviders providerdata={providerdata} navigation={navigation}/>

                </ScrollView> 
            );
            
            
          {/* Provides alternate Options If Their are no Providers in the Zipcodes*/}
        } else if (providerdata.length < 1) {
            return(

                <ScrollView style={{paddingTop:15,paddingBottom:20, backgroundColor: '#ffffff'}}>

                    <View></View>
                   
                    <Text style={styles.HeaderTitle}> Sorry,Their Are <Text style={styles.HeaderTitle2}>{totalProviders}</Text> Providers In <Text style={styles.HeaderTitle2}>{providerId} </Text> </Text>
                    

                    <View style={{paddingLeft:7, paddingBottom:30}}>
                        <Text style={styles.Text}>Please Review The Other ZipCodes {'\n'}Or Review The Closest ZipCodes To<Text style={styles.Text2}> {providerId}</Text> Below</Text>   
                    </View>

                    <View style={{paddingLeft:7, paddingBottom:30}}>
                        <Button 
                            buttonStyle={styles.Button}
                            containerStyle={styles.ButtonContainer}
                            titleStyle={styles.Button}
                            
                            title="Return To Initial Search"
                            onPress={() =>  navigation.goBack()}> 
                        </Button>

                        <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', top:18, padding:1}}/>
                    </View>

                    <RenderZipRadius zipcodedata={zipcodedata} navigation={navigation}/>

                </ScrollView>
            )

        }


        
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
        fontSize: 30,
        letterSpacing: 1   
    },
    SubHeaderTitle: {
        color: '#000',
        fontSize: 30,
        textAlign:'right',
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
    },
    Title: { //Provider Font Styling//
        color: '#000',
        fontSize: 19,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingBottom:5,
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


export default RadiusProviderResults;