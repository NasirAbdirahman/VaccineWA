import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { Button, Divider, Card, Icon } from 'react-native-elements';
import { PROVIDERDATA } from '../shared/ProviderData';


/*

<Button onPress={() =>  navigation('Provider', {providerId: item.id})}></Button>

<Button onPress={() =>  navigate('Provider', {providerId: item.id})} ></Button>

<View style={{margin: 4}}>
                

                <Text style={{fontSize: 14}}>{item.name} </Text>
                <Text style={{fontSize: 12}}>{item.address} {item.zipCode}</Text>
                <Text  style={{fontSize: 12}}> {item.id}</Text>
                
            
            </View>
            

Details = () => {
        navigation('Provider', {providerId: item.id})}

    }
*/

function RenderProviders ({providerdata, navigation}) {
   //const { navigation } = this.props;
    
    const renderProviderItem = ({item}) => {
       
        return  (
            <View >
            
               <Text> {item.name}, {item.id}</Text>
               <Text>{item.address} , {item.zipCode}</Text>
               
                <Text> 
                    In Stock:
                    <Icon 
                        name={item.availability === "Yes" ? 'check-circle' : 'highlight-off' }
                        type= 'material-icons' 
                        color={item.availability === "Yes" ? Icon.color='#70BAFF': Icon.color='#FF0000'}
                    /> 
                </Text> 

                <Text>Last Updated: {item.lastUpdated} </Text>
                <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin: 10, padding:0.5}}/>
                <Icon
                    name='check-circle'
                    type= 'material-icons' 
                    color='#70BAFF'
                    onPress={() => navigation.navigate('Provider', {providerId: item.id})}
                />
               
            </View>
            
        );
    };

    return (
        <Card>
            <FlatList
                data={providerdata}
                renderItem={renderProviderItem}
                keyExtractor={item => item.id.toString()} //Because all the Providers have a unique ID, we can set this to use the ID//
            />
        </Card>

    );
}



class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            providerdata: PROVIDERDATA,
        };
    }


    static navigationOptions = {
        title: 'Results'
    };

    
   

    render () {
        //const { route } = this.props;// NO longer needed becasue route is passed into zipcode const//
        const { navigation } = this.props;
    
        const zipCode = this.props.route.params.zipCode;
        const providerdata = this.state.providerdata.filter(provider => provider.zipCode === zipCode);
        const totalProviders = providerdata.length; //Displays Number of Providers found after the filter//
        
        

    
        return (
            <View style={{paddingTop:10,paddingBottom:20, backgroundColor: '#ffffff'}}>
                <Text style={styles.HeaderTitle}>We Found <Text style={styles.HeaderTitle2}>{totalProviders}</Text> Providers Near You</Text>
                <Text style={styles.Text}>Showing results for <Text style={styles.Text2}>{zipCode}</Text> within <Text style={styles.Text2}>10 miles</Text></Text>
                <Text style={styles.Text}>Vaccine availability is subject to change. Most locations <Text style={styles.Text2}>Require</Text> appointments</Text>
                <Text style={styles.Text}>Click a location with Vaccines <Text style={styles.Text2}>'In Stock'</Text> to move forward.</Text>
                <Button 
                    buttonStyle={styles.Button}
                    containerStyle={styles.ButtonContainer}
                    titleStyle={styles.Button}
                    
                    title="Edit Search"
                    onPress={() =>  navigation.goBack()}
                    > 
                </Button>
                
                <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', top:20, padding:0.5}}/>
                
                <RenderProviders providerdata={providerdata} navigation = {navigation}/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        textAlign:'center',
        fontSize: 30,
        fontFamily:'Scheherazade_700Bold',
        letterSpacing: 1,
    },
    HeaderTitle2: {
        color: '#70BAFF',
        textAlign:'center',
        fontSize: 35,
        letterSpacing: 1,
        
    },
    Text: {
        fontSize: 15,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingLeft:5,
        paddingTop:10,
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


export default Results;