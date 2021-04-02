
1)Hides The Virtualized Scroll Warning

function RenderProviders ({providerdata, navigation}) {
    return (
        <FlatList
            data={providerdata}
            renderItem={({item}) => {
                return(
                    <ScrollView style={{paddingTop:10, paddingLeft:10}}>
        
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
                        <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', margin:1, padding:1}}/>
        
                    </ScrollView>
                )
                
            }}
            keyExtractor={item => item.id.toString()} //Because all the Providers have a unique ID, we can set this to use the ID//
        />
    );
}


2) Extra Nav Code
/*
<HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
        options = { ({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Home'/> ,
            headerTitleContainerStyle: {
                paddingBottom: 15,
                paddingTop: 10,
                
              },  
            }
          }}
        />
        <HomeStack.Screen 
          name="Results" 
          component={Results} 
          options = { ({ navigation}) => {
            return {
              headerTitle: () => <Header navigation = {navigation} title='Providers'/>   
            }
          }} //options={({ route }) => ({ title: route.params.provider.name })}//
        />
        <HomeStack.Screen 
          name="Provider" 
          component={Provider} 
          options = {({ navigation }) => {
            return {
              headerTitle: () => <Header navigation = {navigation} title='Provider Info'/>   
              }
          }} //options={({ route }) => ({ title: route.params.provider.name })}//
        />
      </HomeStack.Navigator>  
    );
  }
*/

3) Back Button for ProviderComponent

  <View style={{right:85}}>
        <Button
            buttonStyle={styles.Button}
            containerStyle={styles.ButtonContainer} 
            icon={{
                name:'arrow-back',//arrow-back-ios//
                type: 'material-icons' ,
                color:'#fff',
                
            }}
            title="Return To Search Results"
            titleStyle={styles.titleStyle}
            onPress={() => navigation.goBack()} 
        />
  </View>

  titleStyle: {
        fontSize: 14,
        paddingRight:5
    },


4)//Previous Broke iteration//
/*
    const renderVaccine = ({item}) => {
        if (item.vaccineTypes.includes("Moderna") && item.availability === "Yes" ) {
            return (
                <View>
                    <Text style={styles.Text}>Moderna Covid Vaccine </Text>

                    <Icon 
                        name='check-circle'
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
        } */

5)Another Way to Provide the vaccineType--But does not state 'Unknown', if type is Unknown.
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
                        </View>*/}



//All The Zipcode Iterations I attempted with zipcodes Package//

{/*function ZipCodeRadius ({providerdata}) {
    //const zipcodes = require('zipcodes');
    //const radiusZip = this.props.route.params.radius;
    //const radius = zipcodes.radius('98032', 5);
    

    const zipcodes = require('zipcodes');

    const zipRadius = zipcodes.radius(98032, 5);
    const number = zipRadius,
        codes = [],
        sNumber = number.toString();
        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            codes.push(+sNumber.charAt(i));
        } 
    
    

    const renderZipRadius = ({codes}, {item}) => {
        if(item.zipCode === codes) {
            return (
                <View style={{paddingBottom:10, paddingLeft:7}}>
                    
                    <Text>{item.zipCode}</Text>
                    <Text>{item.name}</Text>
                    
                    
                </View>
                
            )
        } else (item.zipCode ==="No"); {
            return (
                <View>
                    <Text>No</Text>
                </View>
            )
        }

       
    }

    return (
        <View>
            <FlatList
                data={providerdata}
                renderItem={renderZipRadius}
                keyExtractor={item => item.id.toString()} //Because all the Providers have a unique ID, we can set this to use the ID//
            />
        </View>
    )
    
}*/}

//const zipcodes = require('zipcodes');

        //const zipRadius = zipcodes.radius(98032, 5);
       
//Attempting to Pass ZipCode to results page while restting state//
{/*onPress={() =>  navigation.navigate('Results',this.setState({zipCode : ''}))}*/}{/* Wanted it to refresh page with the zipcode here as state,but NO.*/}