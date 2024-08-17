import { Text, View, StyleSheet} from "react-native";

const produtos = [
  { id: 1, nome: "Coca-Cola", preco: 5.5 },
  { id: 2, nome: "Pepsi", preco: 5.5 },
  { id: 3, nome: "Fanta", preco: 5.5 },
  { id: 4, nome: "H2Oh", preco: 5.5 },
];

export default function Index() {
  return (
    <View
      style={estilo.container}
    >
      {produtos.map((p)=>(
        <View key={p.id}>
          <Text style={estilo.title}>{p.nome}</Text>
          <Text style={estilo.text}>{p.preco}</Text>
        </View>
      ))}
    </View>
  );
}

const estilo= StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#000000",
},
  text: {
    color:"#ffffff",
    fontSize: 20,
  },
  title: {
    color:"#FA5858",
    fontSize: 50,
    textAlign: "left",
    fontWeight: "bold",
  }
});