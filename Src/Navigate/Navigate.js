//import libs
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



//import Screens
import Splash from "../Screens/Splash";
import Welcome from "../Screens/Welcome";
import Solicitar from "../Screens/Solicitar";

const resume = {
    headerShown: false,
    cardStyle: {
        backgroundColor: 'white',
    },
    cardShadowEnabled: false,
    gestureEnabled: false,
}

const headerMost = {

}




const Navigate = () => { 

    const Stack = createStackNavigator();


    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={resume} />
                <Stack.Screen name="Welcome" component={Welcome} options={resume}/>
                <Stack.Screen name="Solicitar" component={Solicitar} options={resume}/>
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default Navigate;