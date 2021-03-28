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
