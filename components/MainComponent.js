import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Divider} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Home from './HomeComponent';
import Provider from './ProviderComponent';
import Results from './ResultsComponent';
import Header from '../shared/HeaderComponent';
import Eligibility from './EligibilityComponent';
import VaccinePhases from './VaccinePhasesComponent';
import RadiusProviderResults from './RadiusProviderResultsComponent';
import FaqAccordion from './FaqComponent';



//Home Stack Navigators//
const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName='Home'
      >
      <HomeStack.Screen
        name='Home' 
        component={Home} 
        options = { ({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Home'/> ,
            headerTitleContainerStyle: {
                //paddingBottom: 5,
                paddingTop: 4,
                
              },  
            }
          }}
        />
      <HomeStack.Screen 
        name='Results' 
        component={Results} 
        options = { ({ navigation}) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Results'/> ,
            //headerLeft: () => null //Removes the Back Arrow in The Header//
          }
        }}
      />
      <HomeStack.Screen 
        name='Provider' 
        component={Provider} 
        options = {({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Provider'/>,
            headerLeft: () => null   //Removes the Back Arrow in The Header//
          }
        }}
      />
      <HomeStack.Screen 
        name='Radius Provider Results' 
        component={RadiusProviderResults} 
        options = {({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Radius Provider Results'/>,
            //headerLeft: () => null   //Removes the Back Arrow in The Header//
          }
        }}
      />
      <HomeStack.Screen 
        name='Eligibility' 
        component={Eligibility} 
        options = {({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Eligibility'/>,
            //headerLeft: () => null   //Removes the Back Arrow in The Header//
          }
        }} 
        
      />
      <HomeStack.Screen 
        name='Faq' 
        component={FaqAccordion} 
        options = {({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Faq'/>,
            //headerLeft: () => null   //Removes the Back Arrow in The Header//
          }
        }} 
        
      />
    </HomeStack.Navigator>  
  );
}



//Eligibility Stack Navigator//

const EligibilityStack = createStackNavigator();

function EligibilityStackNavigator() {
  return (
    <EligibilityStack.Navigator initialRouteName="Eligibility">
      <EligibilityStack.Screen 
        name="Eligibility" 
        component={Eligibility} 
        options = { ({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Eligibility'/> ,
            headerTitleContainerStyle: {
                paddingBottom: 15,
                paddingTop: 10,
                
              },  
          }
        }}
      />
      
      <EligibilityStack.Screen 
        name="Vaccine Phases" 
        component={VaccinePhases} 
        options = { ({ navigation}) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Vaccine Phases'/> ,
            //headerLeft: () => null //Removes the Back Arrow in The Header//
          }
        }}
      />
      {/* Form Start Screen
      <Eligibilitytack.Screen 
        name="Provider" 
        component={Provider} 
        options = {({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Provider Info'/>,
            headerLeft: () => null   //Removes the Back Arrow in The Header//
            }
        }} //options={({ route }) => ({ title: route.params.provider.name })}//
      />*/}
    </EligibilityStack.Navigator>  
  );
}

//Vaccine Phases Navigator//

const VaccinePhasesStack = createStackNavigator();

function VaccinePhasesStackNavigator() {
  return (
    <VaccinePhasesStack.Navigator initialRouteName="Vaccine Phases">
      <VaccinePhasesStack.Screen 
        name="Vaccine Phases" 
        component={VaccinePhases} 
        options = { ({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Vaccine Phases'/> ,
            headerTitleContainerStyle: {
                paddingBottom: 15,
                paddingTop: 10,
                
              },  
            }
            //headerLeft: () => null //Removes the Back Arrow in The Header//
        }}
      />
      <VaccinePhasesStack.Screen 
        name="Eligibility" 
        component={Eligibility} 
        options = { ({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Eligibility'/> ,
            headerTitleContainerStyle: {
              paddingBottom: 15,
              paddingTop: 10,
            },
            //headerLeft: () => null //Removes the Back Arrow in The Header//  
          }
        }}
      />
    </VaccinePhasesStack.Navigator>
  )
}


//FAQ Navigator//

const FaqStack = createStackNavigator();

function FaqStackNavigator() {
  return (
    <FaqStack.Navigator initialRouteName="FAQ">
      <FaqStack.Screen 
        name="FAQ" 
        component={FaqAccordion} 
        options = { ({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='FAQ'/> ,
            headerTitleContainerStyle: {
                paddingBottom: 15,
                paddingTop: 10,
                
              },  
            }
        }}
      />
    </FaqStack.Navigator>
  )
}


//Custom DrawerContent W/Logo//

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={styles.container} //Custom Props recommended by RN navigation docs//
    forceInset={{top: 'always', horizontal: 'never'}}{...props}>
        <View style={styles.drawerHeader}> 
          <Image source={require('../assets/logo.png')} style={styles.drawerImage} />
          <Text style={styles.drawerHeaderText}>For A Healthy Washington</Text>
          <Divider style={{ backgroundColor: '#B1DDF9', width:'100%', alignSelf:'center', padding:2, marginTop:10}}/>
        </View>
      <DrawerItemList {...props} /* shows all the items in the side drawer*/ />
    </DrawerContentScrollView>
  );
}



//Main Drawer Navigator
const App = createDrawerNavigator();

function AppNavigator( ) {
  return (
    <App.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: '#000',
        activeBackgroundColor:'#B1DDF9',
        inactiveTintColor:'#000',
        fontFamily:'SourceSansPro_700Bold',
        fontSize:18,
        borderTopRightRadius:25,
        itemStyle: { marginVertical: 15},
      }}
      drawerStyle={styles.drawerStyle}
      >
      <App.Screen name="Home"  component={HomeStackNavigator}/> 
      <App.Screen name="WA Vaccine Phases" component={VaccinePhasesStackNavigator}/>
      <App.Screen name="Vaccine Eligibility Test"component={EligibilityStackNavigator} />
      <App.Screen name="Covid-19 Vaccine FAQ" component={FaqStackNavigator}/>

    </App.Navigator>
  )
}


class Main extends Component {
  render() {
    return(
      <View
        style={{
              flex: 1,
              paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight // Conditional Code.Making it specific for the IOS operating system/. Becasue we removed the statusBar/ 
        }} >

        <NavigationContainer >
          <AppNavigator />
        </NavigationContainer>  

      </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerStyle: {
    backgroundColor: '#fff',
    width: 240,
    borderTopRightRadius:25,
  },
  //Logo Header Section
  drawerHeader: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerHeaderText: {
    fontFamily:'SourceSansPro_600SemiBold',
    fontSize:16,
    letterSpacing: 1,
    textAlign:'center',
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 200,
  },
 
})


export default Main;