// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// const Input = () => {
//   const [name, setName] = useState("");
//   const handleChangeMyName = (value) => {
//     setName(value);;
//   };

//   console.log(name);

//   return (
//     <View>
//       <Text>Name</Text>
//       <TextInput placeholder='Input your name'
//         style={{
//           borderColor: "black",
//           borderWidth: 1,
//           padding: 10,
//           borderRadius: 8,
//         }}
//         onChangeText={handleChangeMyName}
//       />
//     </View>
//   );
// };

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Stefanus Andrian Leoandi - 00000055662</Text>
//       <Input />
//     </View>
//   );
// }

const Input = ({ name, onChangeText }) => {
  // console.log(name);

  return (
    <View>
      <Text>Name</Text>
      <TextInput placeholder="Input your name"
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
        }}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const NumberInput = ({ nim, onChangeText }) => {
  // console.log(nim);

  return (
    <View>
      <Text>NIM</Text>
      <TextInput placeholder="Input your NIM"
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
        }}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />
    </View>
  );
}

export default function App() {
  const [name, setName] = useState("");
  const handleChangeMyName = (nameValue) => {
    setName(nameValue);
  }

  const [nim, setNIM] = useState("");
  const handleChangeMyNIM = (NIMValue) => {
    setNIM(NIMValue)
  }

  return (
    <View style={styles.container}>
      <Text>{name} - {nim}</Text>
      <Input name={name} onChangeText={handleChangeMyName} />
      <NumberInput nim={nim} onChangeText={handleChangeMyNIM} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
