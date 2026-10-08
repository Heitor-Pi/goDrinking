import { View, Image, Text } from "react-native"
import { ButtonPrimary } from "../../components/ButtonPrimary"
import { ButtonOutline } from "../../components/ButtonOutline"
import { styles } from "./style"
import logo from '../../assets/Image/logo.png'
import { useFonts } from 'expo-font'
import { fonts } from "../../themes/fonts"

export const StartScreen = () => {

    useFonts({
        Oswald: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
    })

    return(
        <View style={styles.containerStartScreen}>
            
            <Image source={logo}/>
            <Text style={styles.textWelcome}>Seu app para comprar energéticos de forma rápida, prática e segura. Encontre suas marcas favoritas e receba onde estiver.</Text>
            <ButtonPrimary title="Entrar"/>
            <ButtonOutline title="Cadastrar"/>

        </View>
    )
}