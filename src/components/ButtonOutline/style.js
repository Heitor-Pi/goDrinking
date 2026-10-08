import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    btnOutline:{
        borderWidth: 2,
        borderColor: colors.colorCyan,
        borderRadius: 7,
        width: 350,
        padding: 10
    },
    txtBtnOutline:{
        color: colors.colorCyan,
        fontSize: 18,
        textAlign: "center"
    }
})