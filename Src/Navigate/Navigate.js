//import libs
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



//import Screens
import Splash from "../Screens/Splash";
import Welcome from "../Screens/Welcome";
import Solicitar from "../Screens/Solicitar";
import Acordar from "../Screens/Acordar";
import Dormir from "../Screens/Dormir";
import Peso from "../Screens/Peso";
import Idade from "../Screens/Idade";
import Genero from "../Screens/Genero";


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
                <Stack.Screen name="Peso" component={Peso} options={cardPersonalizar}/>
                <Stack.Screen name="Idade" component={Idade} options={cardPersonalizar}/>
                <Stack.Screen name="Genero" component={Genero} options={cardPersonalizar}/>
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default Navigate;