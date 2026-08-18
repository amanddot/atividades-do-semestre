// 1.
// import { Text, View }
// from 'react-native';
// export default function App() {
// return (
// <View>
// <Text>Meu primeiro app!</Text>
// </View>
// );
// }

// 2.
// import { Text, View } from 'react-native';
// export default function App() {
// return (
// <View>
// <Text>Olá, mundo!</Text>
// </View>
// );
// }

// 3.
// import { View, Text } from 'react-native';
// export default function App() {
// return (
// <View style={{ padding: 20 }}>
// <Text style={{ fontSize: 24 }}>
// Bem-vindo!
// </Text>
// </View>
// );
// }

// 4.
// import { View, Text } from 'react-native';
// export default function App() {
// return (
// <View style={styles.box}>
// <Text> Texto no app</Text>
// <Image source={logo} />
// </View>
// );
// }

// 5.
// import { StyleSheet, Text } from 'react-native';
// export default function App() {
// return (
// <Text style={styles.titulo}>Título</Text>
// )}; const styles = StyleSheet.create({
// titulo: { fontSize: 22, color: 'tomato' },})

// 6.

// import {Image, View  } from 'react-native';
// export default function App() {
// return (
// <View>
// <Image
// source={{ uri: 'https://site.com/foto.png' }}
// style={{ width: 100, height: 100 }}
// />
// <Image source={require('./logo.png')}
// style={{ width: 100, height: 100 }} />
// </View>
// );
// }
 
// 7.
// import { Button, TouchableOpacity, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View>
//       <Button title="Clique" onPress={() => alert('Oi!')} />
//       <TouchableOpacity onPress={() => alert('Toque!')}>
//         <Text>Botão personalizado</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// 8.
// import React, { useState } from 'react';
// import { TextInput } from 'react-native';

// export default function Formulario() {
//   const [nome, setNome] = useState('');

//   return (
//     <TextInput
//       value={nome}
//       onChangeText={setNome}
//       placeholder="Digite seu nome"
//     />
//   );
// }
// 9.
// import { ScrollView, Text } from 'react-native';

// export default function Lista() {
//   return (
//     <ScrollView>
//       <Text>Item 1</Text>
//       <Text>Item 2</Text>
//       <Text>Item 3</Text>
//     </ScrollView>
//   );
// }
// 10.
// import { Text, View } from 'react-native';

// // Componente reautorizável
// function Saudacao({ nome }) {
//   return <Text>Olá, {nome}!</Text>;
// }

// // Componente principal
// export default function App() {
//   return (
//     <View>
//       <Saudacao nome="Ana" />
//       <Saudacao nome="Beto" />
//     </View>
//   );
// }