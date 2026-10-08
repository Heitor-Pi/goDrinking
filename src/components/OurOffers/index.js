import { Text, ScrollView, View, Image } from "react-native"
import { styles } from "../OurOffers/style"
import card1 from "../../assets/Image/card1.png"
import card2 from "../../assets/Image/card2.png"
import card3 from "../../assets/Image/card3.png"

export const OurOffers = () => {
    
    return(
        <View>
            <Text style={styles.textOurOffers}>Nossas <Text style={styles.textHighlight}>Ofertas</Text></Text>
            <ScrollView horizontal contentContainerStyle={styles.scrollContent}>
                <Image source={card1}/>
                <Image source={card2}/>
                <Image source={card3}/>
            </ScrollView>
        </View>
    );
}