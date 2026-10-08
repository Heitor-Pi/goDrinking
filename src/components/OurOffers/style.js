import { StyleSheet } from "react-native"
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({

    textOurOffers: {
        fontFamily: fonts.fontTitle,
        fontSize: 25,
        color: colors.colorWhite,
        fontWeight: "700"
        
    },
    textHighlight:{
        color: colors.colorHotDrink
    },
    scrollContent:{
        gap: 15
    }
})