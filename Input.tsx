import { View, Text, TextInput } from "react-native";

const Input = ({ value, type, inputType, onChangeText }) => {
    return (
        <View>
            {/* <Text>{value}</Text> */}
            <TextInput placeholder={"Input your " + type}
                style={{
                    borderColor: "black",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 8,
                    marginVertical: 10,
                }}
                onChangeText={onChangeText}
                keyboardType={inputType}
            />
        </View>
    );
};

export default Input;