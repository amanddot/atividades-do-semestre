// 1
// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';

// export default function App() {

//   useEffect(() => {
//     // código que roda DEPOIS da renderização
//     console.log('useEffect executado!');
//   }, []);

//   return (
//     <View>
//       <Text>Exemplo de useEffect</Text>
//     </View>
//   );
// }

// 2

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';

// export default function App() {

//   const [contador, setContador] = useState(0);

//   // roda UMA vez, quando o componente aparece
//   useEffect(() => {
//     console.log('montou!');
//   }, []);

//   // roda toda vez que "contador" muda
//   useEffect(() => {
//     console.log('contador mudou para:', contador);
//   }, [contador]);

//   return (
//     <View>
//       <Text>Contador: {contador}</Text>

//       <Button
//         title="Aumentar"
//         onPress={() => setContador(contador + 1)}
//       />
//     </View>
//   );
// }

//3

// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';

// export default function App() {

//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log('tick');
//     }, 1000);

    
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <View>
//       <Text>Cleanup</Text>
//     </View>
//   );
// }

// // 4

// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';

// function Usuario({ id }) {
//   const [usuario, setUsuario] = useState(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then(res => res.json())
//       .then(dados => setUsuario(dados));
//   }, [id]); // busca de novo sempre que "id" mudar

//   if (!usuario) return <Text>Carregando...</Text>;

//   return <Text>{usuario.name}</Text>;
// }

// export default function App() {
//   return (
//     <View>
//       <Usuario id={1} />
//     </View>
//   );
// }