import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeComponent';
import Provider from './ProviderComponent';
import Results from './ResultsComponent';
import Header from '../shared/HeaderComponent';
import Eligibility from './EligibilityComponent';
import VaccinePhases from './VaccinePhasesComponent';



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
        //Screen={Home}
        //initialRouteName='Home'
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
        name='Results' 
        component={Results} 
        options = { ({ navigation}) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Results'/> ,
            headerLeft: () => null //Removes the Back Arrow in The Header//
          }
        }} //options={({ route }) => ({ title: route.params.provider.name })}//
      />
      <HomeStack.Screen 
        name='Provider' 
        component={Provider} 
        options = {({ navigation }) => {
          return {
            headerTitle: () => <Header navigation = {navigation} title='Provider'/>,
            headerLeft: () => null   //Removes the Back Arrow in The Header//
          }
        }} //options={({ route }) => ({ title: route.params.provider.name })}//
      />
      <HomeStack.Screen 
        name='Eligibility' 
        component={Eligibility} 
        
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
              headerLeft: () => null //Removes the Back Arrow in The Header//
            }
          }}
        />
        {/*<Eligibilitytack.Screen 
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



//Drawer Navigator
const App = createDrawerNavigator();

function AppNavigator() {
  return (
    <App.Navigator>
      
      <App.Screen name="Home"  component={HomeStackNavigator}/> 
      <App.Screen name="Covid-19 Vaccine FAQ" component={EligibilityStackNavigator}/>
      <App.Screen name="WA Vaccine Phases" component={EligibilityStackNavigator} />
      <App.Screen name="Vaccine Eligibility Test" component={EligibilityStackNavigator} />
      <App.Screen name="FAQ" component={HomeStackNavigator}/>

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

/*const styles= StyleSheet.create({
  DrawerNavigator:{
      color: '#70BAFF',
      //textAlign:'center',
      fontSize: 50,
      //fontFamily:'Scheherazade_700Bold',
      //letterSpacing: 1
  },
  
})*/


export default Main;