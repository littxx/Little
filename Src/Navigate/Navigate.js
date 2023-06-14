//import libs
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



//import Screens
import Splash from "../Screens/Splash";
import Welcome from "../Screens/Welcome";
import Solicitar from "../Screens/Solicitar";
import Acordar from "../Screens/Acordar";

const resume = {
    headerShown: false,
    cardStyle: {
        backgroundColor: 'white',
    },
    cardShadowEnabled: false,
    gestureEnabled: false,
}

const cardPersonalizar = {

    headerStyle: {
        backgroundColor: '#F6F6F6',

    },
    headerTitle:"Personalização"
}




const Navigate = () => { 

    const Stack = createStackNavigator();


    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={resume} />
                <Stack.Screen name="Welcome" component={Welcome} options={resume}/>
                <Stack.Screen name="Solicitar" component={Solicitar} options={resume}/>
                <Stack.Screen name="Acordar" component={Acordar} options={cardPersonalizar}/>
                <Stack.Screen name="Dormir" component={Dormir} options={cardPersonalizar}/>
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default Navigate;