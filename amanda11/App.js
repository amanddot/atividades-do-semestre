
// import React, { createContext, useContext, useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const ContadorContext = createContext();

// function ContadorProvider({ children }) {
//   const [contador, setContador] = useState(0);

//   return (
//     <ContadorContext.Provider value={{ contador, setContador }}>
//       {children}
//     </ContadorContext.Provider>
//   );
// }

// function Contador() {
//   const { contador, setContador } = useContext(ContadorContext);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Exemplo de useContext</Text>
//       <Text style={styles.numero}>{contador}</Text>
//       <Button title="Aumentar" onPress={() => setContador(c => c + 1)} />
//       <Button title="Diminuir" onPress={() => setContador(c => c - 1)} />
//       <Button title="Zerar" onPress={() => setContador(0)} />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <ContadorProvider>
//       <Contador />
//     </ContadorProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 16,
//     backgroundColor: '#FFFFFF',
//   },
//   titulo: { fontSize: 24, fontWeight: 'bold' },
//   numero: { fontSize: 48 },
// });



// #2


// import React, { useContext } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { TemaContext, TemaProvider } from './contexts/TemaContext';

// function Home() {
//   const { modo, cores, alternarTema } = useContext(TemaContext);

//   return (
//     <View style={[styles.container, { backgroundColor: cores.fundo }]}>
//       <Text style={[styles.titulo, { color: cores.texto }]}>
//         Tema atual: {modo}
//       </Text>
//       <Button
//         title="Trocar tema"
//         color={cores.primaria}
//         onPress={alternarTema}
//       />
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 16,
//   },
//   titulo: { fontSize: 24 },
// });


// #3


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
// } from 'react-native';

// import { AuthProvider, useAuth } from './contexts/AuthContext';

// function Login() {
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [erro, setErro] = useState('');

//   function entrar() {
//     const ok = login(email, senha);

//     if (!ok) {
//       setErro('Senha incorreta (dica: 123456)');
//     } else {
//       setErro('');
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>Login</Text>

//       <TextInput
//         style={styles.campo}
//         placeholder="E-mail"
//         autoCapitalize="none"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TextInput
//         style={styles.campo}
//         placeholder="Senha"
//         secureTextEntry
//         value={senha}
//         onChangeText={setSenha}
//       />

//       {erro ? (
//         <Text style={styles.erro}>{erro}</Text>
//       ) : null}

//       <Button title="Entrar" onPress={entrar} />
//     </View>
//   );
// }

// function Home() {
//   const { usuario, logout } = useAuth();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>
//         Bem-vindo, {usuario.nome}!
//       </Text>

//       <Button title="Sair" onPress={logout} />
//     </View>
//   );
// }

// function Rotas() {
//   const { logado } = useAuth();

//   return logado ? <Home /> : <Login />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <Rotas />
//     </AuthProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     gap: 12,
//   },
//   titulo: {
//     fontSize: 28,
//     textAlign: 'center',
//   },
//   campo: {
//     borderWidth: 1,
//     borderColor: '#999',
//     borderRadius: 8,
//     padding: 10,
//   },
//   erro: {
//     color: 'red',
//   },
// });
