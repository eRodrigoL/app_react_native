import { Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={estilo.container}
    >
      <Text style={estilo.text}>Olá mundo!!</Text>
    </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF000",
  },
  text: {
    color: "#000000"
  }
})