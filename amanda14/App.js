
// import React from 'react';
// import { Button, Linking, Text, View, StyleSheet } from 'react-native';
// import { useCameraPermissions } from 'expo-camera';

// function ComPermissao({ children }) {
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) return null;

//   if (permission.granted) return children;

//   return (
//     <View style={styles.container}>
//       <Text>Precisamos da câmera para ler o QR Code.</Text>
//       {permission.canAskAgain ? (
//         <Button title="Permitir" onPress={requestPermission} />
//       ) : (
//         <Button
//           title="Abrir ajustes"
//           onPress={() => Linking.openSettings()}
//         />
//       )}
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <ComPermissao>
//       <View style={styles.container}>
//         <Text>Câmera autorizada com sucesso!</Text>
//       </View>
//     </ComPermissao>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     gap: 15,
//   },
// });



// import React from 'react';
// import { Alert, Button, StyleSheet, View } from 'react-native';
// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowBanner: true,
//     shouldShowList: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// async function agendarLembrete() {
//   await Notifications.setNotificationChannelAsync('default', {
//     name: 'Lembretes',
//     importance: Notifications.AndroidImportance.HIGH,
//   });

//   const { status } = await Notifications.requestPermissionsAsync();

//   if (status !== 'granted') {
//     Alert.alert('Permissão negada');
//     return;
//   }

//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: 'Hora de estudar',
//       body: 'Revise o módulo 2.',
//     },
//     trigger: {
//       type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
//       seconds: 5,
//     },
//   });

//   Alert.alert('Lembrete agendado!');
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="Agendar lembrete"
//         onPress={agendarLembrete}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
// });



// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import * as Notifications from 'expo-notifications';
// import * as Device from 'expo-device';
// import Constants from 'expo-constants';

// export default function App() {
//   const [token, setToken] = useState('');

//   async function gerarToken() {
//     try {
//       if (!Device.isDevice) {
//         setToken('Use um aparelho físico.');
//         return;
//       }

//       const projectId =
//         Constants.easConfig?.projectId ??
//         Constants.expoConfig?.extra?.eas?.projectId;

//       if (!projectId) {
//         setToken('Configure o projectId do EAS.');
//         return;
//       }

//       await Notifications.setNotificationChannelAsync('default', {
//         name: 'Notificações',
//         importance: Notifications.AndroidImportance.HIGH,
//       });

//       const { status } =
//         await Notifications.requestPermissionsAsync();

//       if (status !== 'granted') {
//         setToken('Permissão negada.');
//         return;
//       }

//       const resposta = await Notifications.getExpoPushTokenAsync({
//         projectId,
//       });

//       setToken(resposta.data);
//     } catch (erro) {
//       setToken(erro.message);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Button title="Gerar token push" onPress={gerarToken} />
//       <Text selectable style={styles.texto}>{token}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     gap: 20,
//   },
//   texto: {
//     textAlign: 'center',
//   },
// });




// import React, { useEffect, useState } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowBanner: true,
//     shouldShowList: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// function useNotificacoes(setMensagem) {
//   useEffect(() => {
//     const recebida = Notifications.addNotificationReceivedListener(
//       (n) => {
//         setMensagem('Chegou: ' + n.request.content.title);
//       }
//     );

//     const tocada =
//       Notifications.addNotificationResponseReceivedListener(
//         (resposta) => {
//           const { url } =
//             resposta.notification.request.content.data;

//           if (url) {
//             setMensagem('Notificação tocada: ' + url);
//           }
//         }
//       );

//     return () => {
//       recebida.remove();
//       tocada.remove();
//     };
//   }, [setMensagem]);
// }

// export default function App() {
//   const [mensagem, setMensagem] = useState(
//     'Aguardando notificação...'
//   );

//   useNotificacoes(setMensagem);

//   async function testar() {
//     await Notifications.setNotificationChannelAsync('default', {
//       name: 'Lembretes',
//       importance: Notifications.AndroidImportance.HIGH,
//     });

//     const { status } =
//       await Notifications.requestPermissionsAsync();

//     if (status !== 'granted') {
//       setMensagem('Permissão negada');
//       return;
//     }

//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: 'Pedido enviado',
//         body: 'Chega amanhã',
//         data: { url: '/pedidos/42' },
//       },
//       trigger: {
//         type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
//         seconds: 5,
//       },
//     });
//   }

//   return (
//     <View style={styles.container}>
//       <Text>{mensagem}</Text>
//       <Button title="Testar notificação" onPress={testar} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     gap: 20,
//   },
// });




// import React, { useRef, useState } from 'react';
// import {
//   Button,
//   Image,
//   Linking,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import { CameraView, useCameraPermissions } from 'expo-camera';

// export default function App() {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [foto, setFoto] = useState(null);
//   const camera = useRef(null);

//   if (!permission) return null;

//   if (!permission.granted) {
//     return (
//       <View style={styles.container}>
//         <Text>Precisamos de acesso à câmera.</Text>
//         <Button
//           title={permission.canAskAgain ? 'Permitir câmera' : 'Abrir ajustes'}
//           onPress={
//             permission.canAskAgain
//               ? requestPermission
//               : () => Linking.openSettings()
//           }
//         />
//       </View>
//     );
//   }

//   async function tirarFoto() {
//     const resultado = await camera.current?.takePictureAsync({
//       quality: 0.7,
//     });

//     if (resultado) {
//       setFoto(resultado.uri);
//     }
//   }

//   return (
//     <View style={styles.tela}>
//       <CameraView
//         ref={camera}
//         style={styles.camera}
//         facing="back"
//       />

//       <Button title="Tirar foto" onPress={tirarFoto} />

//       {foto && (
//         <Image
//           source={{ uri: foto }}
//           style={styles.foto}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tela: {
//     flex: 1,
//     paddingTop: 40,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 20,
//   },
//   camera: {
//     flex: 1,
//   },
//   foto: {
//     height: 160,
//     width: '100%',
//     resizeMode: 'contain',
//   },
// });



// import React, { useState } from 'react';
// import {
//   Button,
//   Linking,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import { CameraView, useCameraPermissions } from 'expo-camera';

// export default function App() {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [lido, setLido] = useState(null);

//   if (!permission) return null;

//   if (!permission.granted) {
//     return (
//       <View style={styles.container}>
//         <Text>Precisamos da câmera para ler QR Codes.</Text>
//         <Button
//           title={permission.canAskAgain ? 'Permitir câmera' : 'Abrir ajustes'}
//           onPress={
//             permission.canAskAgain
//               ? requestPermission
//               : () => Linking.openSettings()
//           }
//         />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.tela}>
//       <CameraView
//         style={styles.camera}
//         barcodeScannerSettings={{
//           barcodeTypes: ['qr'],
//         }}
//         onBarcodeScanned={
//           lido
//             ? undefined
//             : ({ data }) => setLido(data)
//         }
//       />

//       {lido && (
//         <View style={styles.resultado}>
//           <Text>Conteúdo: {lido}</Text>
//           <Button
//             title="Ler outro"
//             onPress={() => setLido(null)}
//           />
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tela: {
//     flex: 1,
//     paddingTop: 40,
//   },
//   camera: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     gap: 20,
//   },
//   resultado: {
//     padding: 20,
//     gap: 15,
//     backgroundColor: '#fff',
//   },
// });



import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [posicao, setPosicao] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function obterLocalizacao() {
      try {
        const { status } =
          await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          setErro('Permissão de localização negada.');
          return;
        }

        const { coords } =
          await Location.getCurrentPositionAsync();

        setPosicao({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      } catch (error) {
        setErro(error.message);
      }
    }

    obterLocalizacao();
  }, []);

  if (erro) {
    return (
      <View style={styles.container}>
        <Text>{erro}</Text>
        <Button
          title="Abrir ajustes"
          onPress={() => Linking.openSettings()}
        />
      </View>
    );
  }

  if (!posicao) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Obtendo localização...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.mapa}
      showsUserLocation
      initialRegion={{
        ...posicao,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={posicao}
        title="Você está aqui"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapa: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 15,
  },
});
