import { styles } from "./style"
import logo from '../../assets/Image/logo.png'
import { useFonts } from 'expo-font'
import { View, Image, Text } from "react-native"
import { OurOffers } from "../../components/OurOffers"

export const HomeScreen = () =>{
    useFonts({
        Oswald: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
    })
    return(
        <View style={styles.containerHomeScreen}>
            <Image source={logo} style={styles.logoHome}/>
            <OurOffers />
        </View>
    );
}