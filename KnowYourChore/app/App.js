import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from "./screens/ListScreen";
import SelectionScreen from "./screens/SelectionScreen";
import HomePage from "./screens/HomePage";
import IndividualTaskScreen1 from "./screens/IndividualTaskScreenUpdate";
import IndividualTaskScreenNew from "./screens/IndividualTaskScreenNew";

const Stack = createNativeStackNavigator();  


export default function App() {

  


  return (
    
    // this is the home base for our navigation technology

    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component ={HomePage}/>
         <Stack.Screen name="ListScreen" component ={ListScreen}/>
         <Stack.Screen name="Selection" component ={SelectionScreen}/>
         {/* <Stack.Screen name="IndividualTaskScreen" component ={IndividualTaskScreen}/> */}
         <Stack.Screen name="UpdateTask" component ={IndividualTaskScreen1}/>
         <Stack.Screen name="NewTask" component ={IndividualTaskScreenNew}/>
       </Stack.Navigator>
    </NavigationContainer>
  );}



