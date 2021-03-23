import React from 'react';
import Main from './components/MainComponent.js';
import AppLoading from 'expo-app-loading';
import { useFonts, Scheherazade_700Bold } from '@expo-google-fonts/scheherazade';
import { SourceSansPro_600SemiBold } from '@expo-google-fonts/source-sans-pro';
import { Lateef_400Regular } from '@expo-google-fonts/lateef';


export default function App() {
  let [fontsLoaded] = useFonts({
    Scheherazade_700Bold,
    SourceSansPro_600SemiBold,
    Lateef_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <Main/>
    );
  }
}


