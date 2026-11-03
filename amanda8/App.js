
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function Contador() {
//   const [contador, setContador] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.numero}>{contador}</Text>
//       <Button title="+1"
//         onPress={() => setContador(contador + 1)} />
//       <Button title="-1"
//         onPress={() => setContador(contador - 1)} />
//       <Button title="Zerar"
//         onPress={() => setContador(0)} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   numero: {
//     fontSize: 20,
//   },
// });



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// function Cronometro() {
//   const [segundos, setSegundos] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setSegundos(s => s + 1);
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return <Text>{segundos}s</Text>;
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Cronometro />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// import React, { createContext, useState, useContext } from 'react';
// import { View, Text, Button } from 'react-native';

// const TemaContext = createContext();

// const cores = {
//   claro: { fundo: '#FFFFFF', texto: '#111111', primaria: '#6200EE' },
//   escuro: { fundo: '#121212', texto: '#EEEEEE', primaria: '#BB86FC' },
// };

// function TemaProvider({ children }) {
//   const [modo, setModo] = useState('claro');

//   const alternarTema = () =>
//     setModo(m => (m === 'claro' ? 'escuro' : 'claro'));

//   return (
//     <TemaContext.Provider value={{ modo, cores: cores[modo], alternarTema }}>
//       {children}
//     </TemaContext.Provider>
//   );
// }

// function Home() {
//   const { modo, cores, alternarTema } =
//     useContext(TemaContext);

//   return (
//     <View style={{
//       backgroundColor: cores.fundo,
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//       <Text style={{ color: cores.texto }}>
//         Tema atual: {modo}
//       </Text>
//       <Button title="Trocar tema" onPress={alternarTema} />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <TemaProvider>
//       <Home />
//     </TemaProvider>
//   );
// }