// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaInicial() {
//   return (
//     <View>
//       <Text>Olá, navegação!</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Inicio"
//           component={TelaInicial}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaInicial({ navigation }) {
//   return (
//     <View>
//       <Text>Olá, navegação!</Text>

//       <TouchableOpacity
//         onPress={() => navigation.navigate('Detalhes')}
//       >
//         <Text>Ir para Detalhes</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaDetalhes({ navigation }) {
//   return (
//     <View>
//       <Text>Estou na tela de detalhes</Text>

//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//       >
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Inicio" component={TelaInicial} />
//         <Stack.Screen name="Detalhes" component={TelaDetalhes} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaInicial({ navigation }) {
//   return (
//     <View>
//       <Text>Olá, navegação!</Text>

//       <TouchableOpacity
//         onPress={() => navigation.navigate('Detalhes')}
//       >
//         <Text>Ir para Detalhes</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaDetalhes({ navigation }) {
//   return (
//     <View>
//       <Text>Estou na tela de detalhes</Text>

//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Inicio">

//         <Stack.Screen
//           name="Inicio"
//           component={TelaInicial}
//           options={{ title: 'Home' }}
//         />

//         <Stack.Screen
//           name="Detalhes"
//           component={TelaDetalhes}
//           options={{ title: 'Detalhes do Item' }}
//         />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaInicial({ navigation }) {
//   const [nomeDigitado, setNomeDigitado] = useState('');

//   return (
//     <View>
//       <Text>Digite seu nome:</Text>

//       <TextInput
//         placeholder="Seu nome"
//         value={nomeDigitado}
//         onChangeText={setNomeDigitado}
//       />

//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('Detalhes', { nome: nomeDigitado })
//         }
//       >
//         <Text>Enviar Nome</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaDetalhes({ route }) {
//   return (
//     <View>
//       <Text>Nome: {route.params.nome}</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Inicio" component={TelaInicial} />
//         <Stack.Screen name="Detalhes" component={TelaDetalhes} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaInicial({ navigation }) {
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [idade, setIdade] = useState('');

//   return (
//     <View>
//       <TextInput
//         placeholder="Nome"
//         value={nome}
//         onChangeText={setNome}
//       />

//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TextInput
//         placeholder="Idade"
//         value={idade}
//         onChangeText={setIdade}
//         keyboardType="numeric"
//       />

//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('Detalhes', { nome, email, idade })
//         }
//       >
//         <Text>Cadastrar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaDetalhes({ route }) {
//   const { nome, email, idade } = route.params;

//   return (
//     <View>
//       <Text>Nome: {nome}</Text>
//       <Text>Email: {email}</Text>
//       <Text>Idade: {idade}</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Inicio" component={TelaInicial} />
//         <Stack.Screen name="Detalhes" component={TelaDetalhes} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// 



// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const produtos = [
//   { id: '1', nome: 'Notebook', preco: 3500, descricao: 'Para estudos' },
//   { id: '2', nome: 'Celular', preco: 2000, descricao: 'Celular moderno' },
//   { id: '3', nome: 'Tablet', preco: 1500, descricao: 'Para leitura' },
//   { id: '4', nome: 'Fone', preco: 250, descricao: 'Fone de ouvido' },
// ];

// function TelaLista({ navigation }) {
//   return (
//     <View>
//       <FlatList
//         data={produtos}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Produto', item)}
//           >
//             <Text>{item.nome} - R$ {item.preco.toFixed(2)}</Text>
//           </TouchableOpacity>
//         )}
//       />

//       <TouchableOpacity onPress={() => navigation.navigate('Notificacoes')}>
//         <Text>Notificações</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaProduto({ route, navigation }) {
//   const { nome, preco, descricao } = route.params;
//   const pedidoId = route.params?.pedidoId || 'N/A';

//   return (
//     <View>
//       <Text>{nome}</Text>
//       <Text>Preço: R$ {preco.toFixed(2)}</Text>
//       <Text>{descricao}</Text>
//       <Text>Pedido #{pedidoId}</Text>

//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function Notificacoes() {
//   return <Text>Tela de notificações</Text>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Lista" component={TelaLista} />
//         <Stack.Screen name="Produto" component={TelaProduto} />
//         <Stack.Screen name="Notificacoes" component={Notificacoes} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function TelaHome() {
//   return (
//     <View>
//       <Text>Bem-vindo à Home</Text>
//     </View>
//   );
// }

// function TelaBusca() {
//   return (
//     <View>
//       <Text>Tela de Busca</Text>
//     </View>
//   );
// }

// function TelaPerfil() {
//   return (
//     <View>
//       <Text>Tela de Perfil</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={TelaHome} />
//         <Tab.Screen name="Busca" component={TelaBusca} />
//         <Tab.Screen name="Perfil" component={TelaPerfil} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }




// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function TelaHome() {
//   return <View><Text>Início</Text></View>;
// }

// function TelaBusca() {
//   return <View><Text>Busca</Text></View>;
// }

// function TelaPerfil() {
//   return <View><Text>Perfil</Text></View>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: '#28a745',
//           tabBarInactiveTintColor: '#999',
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={TelaHome}
//           options={{
//             tabBarLabel: 'Início',
//             tabBarIcon: () => <Text>H</Text>,
//           }}
//         />

//         <Tab.Screen
//           name="Busca"
//           component={TelaBusca}
//           options={{
//             tabBarLabel: 'Busca',
//             tabBarIcon: () => <Text>B</Text>,
//           }}
//         />

//         <Tab.Screen
//           name="Perfil"
//           component={TelaPerfil}
//           options={{
//             tabBarLabel: 'Perfil',
//             tabBarIcon: () => <Text>P</Text>,
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function TelaHome() {
//   const [contador, setContador] = useState(0);

//   return (
//     <View>
//       <Text>Contador: {contador}</Text>

//       <TouchableOpacity onPress={() => setContador(contador + 1)}>
//         <Text>Incrementar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaBusca() {
//   const [texto, setTexto] = useState('');

//   return (
//     <View>
//       <TextInput
//         placeholder="Digite sua busca"
//         value={texto}
//         onChangeText={setTexto}
//       />

//       <Text>Você digitou: {texto}</Text>
//     </View>
//   );
// }

// function TelaPerfil() {
//   return <Text>Meu Perfil</Text>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={TelaHome} />
//         <Tab.Screen name="Busca" component={TelaBusca} />
//         <Tab.Screen name="Perfil" component={TelaPerfil} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function TelaHome() {
//   return (
//     <View>
//       <Text>Deslize da esquerda para abrir o menu</Text>
//     </View>
//   );
// }

// function TelaConfiguracoes() {
//   return (
//     <View>
//       <Text>Tela de Configurações</Text>
//     </View>
//   );
// }

// function TelaSobre() {
//   return (
//     <View>
//       <Text>Sobre o aplicativo</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">

//         <Drawer.Screen
//           name="Home"
//           component={TelaHome}
//           options={{ title: 'Início' }}
//         />

//         <Drawer.Screen
//           name="Config"
//           component={TelaConfiguracoes}
//           options={{ title: 'Configurações' }}
//         />

//         <Drawer.Screen
//           name="Sobre"
//           component={TelaSobre}
//         />

//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }



// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function TelaHome({ navigation }) {
//   return (
//     <View>
//       <Text>Deslize da esquerda para abrir o menu</Text>

//       <TouchableOpacity
//         onPress={() => navigation.navigate('Config', { tema: 'escuro' })}
//       >
//         <Text>Ir para Config com tema</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaConfiguracoes({ route }) {
//   const tema = route.params?.tema || 'claro';

//   return (
//     <View>
//       <Text>Tema selecionado: {tema}</Text>
//     </View>
//   );
// }

// function TelaSobre() {
//   return <Text>Sobre o aplicativo</Text>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen
//           name="Home"
//           component={TelaHome}
//           options={{ title: 'Início' }}
//         />

//         <Drawer.Screen
//           name="Config"
//           component={TelaConfiguracoes}
//           options={{ title: 'Configurações' }}
//         />

//         <Drawer.Screen name="Sobre" component={TelaSobre} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }




// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function TelaHome({ navigation }) {
//   return (
//     <View>
//       <Text>Tela Home</Text>

//       <TouchableOpacity
//         onPress={() => navigation.navigate('Notificacoes')}
//       >
//         <Text>Ir para Notificações</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaNotificacoes() {
//   return <Text>Minhas Notificações</Text>;
// }

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="HomeScreen"
//         component={TelaHome}
//         options={{ title: 'Início' }}
//       />

//       <Stack.Screen
//         name="Notificacoes"
//         component={TelaNotificacoes}
//       />
//     </Stack.Navigator>
//   );
// }

// function TelaBusca() {
//   return <Text>Tela de Busca</Text>;
// }

// function TelaPerfil() {
//   return <Text>Tela de Perfil</Text>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeStack}
//           options={{ headerShown: false }}
//         />

//         <Tab.Screen name="Busca" component={TelaBusca} />
//         <Tab.Screen name="Perfil" component={TelaPerfil} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }





// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function TelaHome({ navigation }) {
//   return (
//     <View>
//       <Text>Tela Home</Text>

//       <TouchableOpacity onPress={() => navigation.navigate('Notificacoes')}>
//         <Text>Ir para Notificações</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaNotificacoes() {
//   return <Text>Minhas Notificações</Text>;
// }

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="HomeScreen"
//         component={TelaHome}
//         options={{ title: 'Início' }}
//       />

//       <Stack.Screen
//         name="Notificacoes"
//         component={TelaNotificacoes}
//       />
//     </Stack.Navigator>
//   );
// }

// function TelaBusca() {
//   return <Text>Busca</Text>;
// }

// function TelaPerfil() {
//   return <Text>Perfil</Text>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Busca" component={TelaBusca} />
//         <Tab.Screen name="Perfil" component={TelaPerfil} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }






// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const filmes = [
//   { id: '1', titulo: 'Matrix', ano: 1999 },
//   { id: '2', titulo: 'Titanic', ano: 1997 },
//   { id: '3', titulo: 'Avatar', ano: 2009 },
//   { id: '4', titulo: 'Interestelar', ano: 2014 },
//   { id: '5', titulo: 'Vingadores', ano: 2012 },
// ];

// function TelaLista({ navigation }) {
//   return (
//     <View>
//       <FlatList
//         data={filmes}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Filme', item)}
//           >
//             <Text>{item.titulo} - {item.ano}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// function TelaFilme({ route, navigation }) {
//   const { titulo, ano } = route.params;

//   return (
//     <View>
//       <Text>Filme: {titulo}</Text>
//       <Text>Ano: {ano}</Text>

//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Lista" component={TelaLista} />
//       <Stack.Screen name="Filme" component={TelaFilme} />
//     </Stack.Navigator>
//   );
// }

// function PerfilTab({ navigation }) {
//   return (
//     <View>
//       <Text>Meu Perfil</Text>

//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('HomeTab', {
//             screen: 'Filme',
//             params: { titulo: 'Matrix', ano: 1999 },
//           })
//         }
//       >
//         <Text>Ver filme favorito</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function BuscaTab() {
//   return <Text>Busca</Text>;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="HomeTab" component={HomeStack} />
//         <Tab.Screen name="BuscaTab" component={BuscaTab} />
//         <Tab.Screen name="PerfilTab" component={PerfilTab} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }




// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const receitas = [
//   {
//     id: '1',
//     nome: 'Bolo de Chocolate',
//     tempo: '40 minutos',
//     ingredientes: 'Farinha, chocolate, ovos e açúcar',
//   },
//   {
//     id: '2',
//     nome: 'Panqueca',
//     tempo: '20 minutos',
//     ingredientes: 'Farinha, leite e ovos',
//   },
//   {
//     id: '3',
//     nome: 'Brigadeiro',
//     tempo: '15 minutos',
//     ingredientes: 'Leite condensado, chocolate e manteiga',
//   },
// ];

// function TelaReceitas({ navigation }) {
//   return (
//     <View>
//       <FlatList
//         data={receitas}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Detalhe', item)}
//           >
//             <Text>{item.nome}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// function TelaDetalhe({ route, navigation }) {
//   const { nome, tempo, ingredientes } = route.params;

//   return (
//     <View>
//       <Text>{nome}</Text>
//       <Text>Tempo de preparo: {tempo}</Text>
//       <Text>Ingredientes: {ingredientes}</Text>

//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function ReceitasStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Lista" component={TelaReceitas} />
//       <Stack.Screen name="Detalhe" component={TelaDetalhe} />
//     </Stack.Navigator>
//   );
// }

// function TelaFavoritos() {
//   return (
//     <View>
//       <Text>Receita favorita: Lasanha</Text>
//       <Text>Tempo: 50 minutos</Text>
//       <Text>Ingredientes: Massa, queijo e molho</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Receitas"
//           component={ReceitasStack}
//           options={{ headerShown: false }}
//         />

//         <Tab.Screen
//           name="Favoritos"
//           component={TelaFavoritos}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }




// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const contatos = [
//   {
//     id: '1',
//     nome: 'Ana',
//     telefone: '99999-1111',
//     email: 'ana@email.com',
//     favorito: true,
//   },
//   {
//     id: '2',
//     nome: 'Pedro',
//     telefone: '99999-2222',
//     email: 'pedro@email.com',
//     favorito: false,
//   },
//   {
//     id: '3',
//     nome: 'Maria',
//     telefone: '99999-3333',
//     email: 'maria@email.com',
//     favorito: true,
//   },
// ];

// function ListaContatos({ navigation, apenasFavoritos }) {
//   const lista = apenasFavoritos
//     ? contatos.filter((item) => item.favorito)
//     : contatos;

//   return (
//     <View>
//       <FlatList
//         data={lista}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() =>
//               navigation.getParent().navigate('Detalhe', item)
//             }
//           >
//             <Text>{item.nome}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// function TelaTodos({ navigation }) {
//   return (
//     <View>
//       <TouchableOpacity onPress={() => navigation.openDrawer()}>
//         <Text>Abrir menu</Text>
//       </TouchableOpacity>
//       <ListaContatos navigation={navigation} apenasFavoritos={false} />
//     </View>
//   );
// }

// function TelaFavoritos({ navigation }) {
//   return (
//     <View>
//       <TouchableOpacity onPress={() => navigation.openDrawer()}>
//         <Text>Abrir menu</Text>
//       </TouchableOpacity>
//       <ListaContatos navigation={navigation} apenasFavoritos={true} />
//     </View>
//   );
// }

// function ContatosDrawer() {
//   return (
//     <Drawer.Navigator initialRouteName="Todos">
//       <Drawer.Screen name="Todos" component={TelaTodos} />
//       <Drawer.Screen name="Favoritos" component={TelaFavoritos} />
//     </Drawer.Navigator>
//   );
// }

// function TelaDetalhe({ route, navigation }) {
//   const { nome, telefone, email } = route.params;

//   return (
//     <View>
//       <Text>Nome: {nome}</Text>
//       <Text>Telefone: {telefone}</Text>
//       <Text>Email: {email}</Text>

//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text>Voltar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function ContatosStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="MenuContatos"
//         component={ContatosDrawer}
//         options={{ headerShown: false }}
//       />

//       <Stack.Screen
//         name="Detalhe"
//         component={TelaDetalhe}
//       />
//     </Stack.Navigator>
//   );
// }

// function TelaSobre() {
//   return (
//     <View>
//       <Text>Aplicativo de Contatos</Text>
//       <Text>Versão 1.0</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Contatos"
//           component={ContatosStack}
//           options={{ headerShown: false }}
//         />

//         <Tab.Screen
//           name="Sobre"
//           component={TelaSobre}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }




// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function TelaA({ navigation }) {
//   return (
//     <View>
//       <Text>Tela A</Text>

//       <TouchableOpacity
//         onPress={() => navigation.navigate('B')}
//       >
//         <Text>Ir</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TelaB({ route }) {
//   const nome = route.params?.nome || 'Nome não informado';

//   return (
//     <View>
//       <Text>{nome}</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="A" component={TelaA} />
//         <Stack.Screen name="B" component={TelaB} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }





