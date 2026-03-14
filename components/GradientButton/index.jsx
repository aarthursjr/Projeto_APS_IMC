import { LinearGradient } from "expo-linear-gradient"
import { Text, TouchableOpacity } from "react-native"
import { Colors } from "../../constants/theme"
import { styles } from "./styles"

export default function GradientButton({ ...props }) {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.buttonWrapper}>
            <LinearGradient
                colors={[Colors.primary, Colors.accent]}
                start={{x:0.1, y:0}}
                end={{x:0.2, y:1.2}}
                style={styles.buttonWrapper}
            >
                <Text style={styles.buttonText}>{props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}