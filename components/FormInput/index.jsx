import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function FormInput( {label, ...props} ) {
    return(
        <View>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput style={styles.inputField} {...props} />
        </View>
    )
}