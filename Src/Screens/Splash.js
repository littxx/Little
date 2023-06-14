import React, {useEffect} from "react";
import { View, Image, StyleSheet,StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Splash = () => {                          
    

    const navega = useNavigation();


    useEffect(() => {

        setTimeout(() => {
            navega.navigate("Welcome");
        }, 2000);
    })

    return(

        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.containerCenter}>
                <Image source={require('../Assets/Images/diario.png')}/>
            </View>
        </View>
    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1566B7",
    },
    containerCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})





export default Splash;