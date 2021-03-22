import React from 'react';
import Main from './components/MainComponent.js';
import AppLoading from 'expo-app-loading';
import { useFonts, Scheherazade_700Bold } from '@expo-google-fonts/scheherazade';

export default function App() {
  let [fontsLoaded] = useFonts({
    Scheherazade_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <Main/>
    );
  }
}


