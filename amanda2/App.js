// // EXEMPLO 1
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.card}>
// //       <Text style={styles.texto}>Olá, React Native!</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   card: {
// //     padding: 16,
//     // backgroundColor: '#61DAFB',
// //     borderRadius: 8,
// //   },
// //   texto: {
// //     fontSize: 16,
// //   },
// // });
// // EXEMPLO 2
// // import React from 'react';
// // import { View, Text } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={{ padding: 16, backgroundColor: '#61DAFB' }}>
// //       <Text style={{ color: '#fff' }}>Estilo inline</Text>
// //     </View>
// //   );
// // }
// // EXEMPLO 3
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={[styles.card, styles.destaque]}>
// //       <Text style={styles.texto}>Dois estilos combinados</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   card: {
// //     padding: 16,
// //     backgroundColor: '#1B2130',
// //   },
// //   destaque: {
// //     backgroundColor: '#33879e',
// //   },
// //   texto: {
// //     color: '#fff',
// //   },
// // });
// // EXEMPLO 4
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.caixa}>
// //       <Text style={styles.titulo}>Exemplo de estilo</Text>
// //       <Text style={styles.corpo}>Texto dentro da caixa.</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   caixa: {
// //     width: 240,
// //     padding: 16,
// //     margin: 8,
// //     borderWidth: 1,
// //     borderColor: '#323D54',
// //     borderRadius: 12,
// //     backgroundColor: '#1B2130',
// //   },
// //   titulo: {
// //     fontSize: 22,
// //     fontWeight: '700',
// //     color: '#E8EDF5',
// //     marginBottom: 8,
// //   },
// //   corpo: {
// //     fontSize: 15,
// //     lineHeight: 22,
// //     color: '#97A3B8',
// //     textAlign: 'left',
// //   },
// // });
// // EXEMPLO 5
// // import React from 'react';
// // import { View, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.metade} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   metade: {
// //     width: '50%',
// //     height: 120,
// //     backgroundColor: '#61DAFB',
// //   },
// // });
// // EXEMPLO 6
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.linha}>
// //       <Text>1</Text>
// //       <Text>2</Text>
// //       <Text>3</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   linha: {
// //     flexDirection: 'row',
// //   },
// // });
// // EXEMPLO 7
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>1</Text>
// //       <Text>2</Text>
// //       <Text>3</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// // });
// // EXEMPLO 8
// // import React from 'react';
// // import { View } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={{
// //       flex: 1,
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //     }}>
// //       <View style={{ width: 50, height: 50 }} />
// //       <View style={{ width: 50, height: 80 }} />
// //       <View style={{ width: 50, height: 60 }} />
// //     </View>
// //   );
// // }
// // EXEMPLO 9
// // import React from 'react';
// // import { View, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.linha}>
// //       <View style={styles.item} />
// //       <View style={[styles.item, { alignSelf: 'flex-end' }]} />
// //       <View style={styles.item} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   linha: {
// //     flexDirection: 'row',
// //     alignItems: 'flex-start',
// //   },
// //   item: {
// //     width: 50,
// //     height: 50,
// //   },
// // });
// // EXEMPLO 10
// // import React from 'react';
// // import { View } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={{ flex: 1, flexDirection: 'row' }}>
// //       <View style={{ flex: 2 }} />
// //       <View style={{ flex: 1 }} />
// //     </View>
// //   );
// // }
// // EXEMPLO 11
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.fixo}>Título</Text>
// //       <Text style={styles.flexivel}>Texto que ocupa o espaço restante.</Text>
// //       <Text>12:04</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 12,
// //     padding: 12,
// //   },
// //   fixo: {
// //     width: 70,
// //   },
// //   flexivel: {
// //     flex: 1,
// //   },
// // });
// // EXEMPLO 12
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.grade}>
// //       <Text>1</Text>
// //       <Text>2</Text>
// //       <Text>3</Text>
// //       <Text>4</Text>
// //       <Text>5</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   grade: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     gap: 12,
// //   },
// // });
// // EXEMPLO 13
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.card}>
// //       <View style={styles.foto} />
// //       <View style={styles.selo}>
// //         <Text>NOVO</Text>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   card: {
// //     position: 'relative',
// //     width: 220,
// //     height: 160,
// //   },
// //   foto: {
// //     flex: 1,
// //   },
// //   selo: {
// //     position: 'absolute',
// //     top: 8,
// //     right: 8,
// //     zIndex: 2,
// //   },
// // });
// // EXEMPLO 14
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.tela}>
// //       <View style={styles.header}>
// //         <Text>Conversas</Text>
// //       </View>

// //       <View style={styles.conteudo}>
// //         <Text>Conteúdo</Text>
// //       </View>

// //       <View style={styles.footer}>
// //         <Text>Nova mensagem</Text>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   tela: {
// //     flex: 1,
// //   },
// //   header: {
// //     height: 56,
// //     justifyContent: 'center',
// //     padding: 16,
// //   },
// //   conteudo: {
// //     flex: 1,
// //   },
// //   footer: {
// //     padding: 16,
// //     borderTopWidth: 1,
// //   },
// // });
// // EXEMPLO 15
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.item}>
// //       <View style={styles.avatar} />
// //       <View style={styles.textos}>
// //         <Text numberOfLines={1}>Ana Souza</Text>
// //         <Text numberOfLines={1}>Combinado, até amanhã!</Text>
// //       </View>
// //       <Text>12:04</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   item: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 12,
// //     padding: 12,
// //   },
// //   avatar: {
// //     width: 44,
// //     height: 44,
// //     borderRadius: 22,
// //   },
// //   textos: {
// //     flex: 1,
// //   },
// // });
// // EXEMPLO 16
// // import React from 'react';
// // import { View, StyleSheet } from 'react-native';

// // const produtos = [1, 2, 3, 4];

// // export default function App() {
// //   return (
// //     <View style={styles.grade}>
// //       {produtos.map((produto) => (
// //         <View key={produto} style={styles.card} />
// //       ))}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   grade: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     gap: 12,
// //   },
// //   card: {
// //     width: '48%',
// //     aspectRatio: 1,
// //     borderRadius: 12,
// //   },
// // });
// // EXEMPLO 17
// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.centro}>
// //       <Text>Conteúdo centralizado</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   centro: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });
// // EXMPLO 18
// // import React from 'react';
// // import { ScrollView, Text, StyleSheet } from 'react-native';

// // export default function App() {
// //   return (
// //     <ScrollView
// //       style={styles.scroll}
// //       contentContainerStyle={styles.conteudo}
// //     >
// //       <Text>Item 1</Text>
// //       <Text>Item 2</Text>
// //       <Text>Item 3</Text>
// //       <Text>Item 4</Text>
// //       <Text>Item 5</Text>
// //       <Text>Item 6</Text>
// //       <Text>Item 7</Text>
// //       <Text>Item 8</Text>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   scroll: {
// //     flex: 1,
// //   },
// //   conteudo: {
// //     flexGrow: 1,
// //     padding: 16,
// //     gap: 12,
// //   },
// // });
// // EXEMPLO 19
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.tela}>
//       <View style={styles.perfil}>
//         <View style={styles.avatar} />
//         <Text style={styles.nome}>Amanda

//         </Text>
//         <Text>@usuario</Text>
//       </View>

//       <View style={styles.estatisticas}>
//         <Text>Posts: 120</Text>
//         <Text>Seguidores: 250</Text>
//         <Text>Seguindo: 95</Text>
//       </View>

//       <View style={styles.grade}>
//         <View style={styles.foto} />
//         <View style={styles.foto} />
//         <View style={styles.foto} />
//         <View style={styles.foto} />
//       </View>

//       <View style={styles.botao}>
//         <Text>Editar perfil</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tela: {
//     flex: 1,
//     padding: 16,
//   },
//   perfil: {
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   nome: {
//     fontSize: 20,
//   },
//   estatisticas: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 16,
//   },
//   grade: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 8,
//   },
//   foto: {
//     width: '48%',
//     aspectRatio: 1,
//   },
//   botao: {
//     width: '100%',
//     padding: 16,
//     alignItems: 'center',
//   },
// });
