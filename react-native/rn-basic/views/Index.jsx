// import React, { useState } from 'react'

// import { 
//   Text, 
//   View,
//   StyleSheet,
//   Image,
//   TextInput,
//   ScrollView,
//   FlatList,
//   TouchableHighlight,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   ImageBackground,
//   StatusBar,
//   Switch
// } from 'react-native'

// import styles from './styleIndex'

// import { Greeting } from './styledIndex'

// import icon from '../assets/favicon.png'

// export default function Index () {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   const handleClick = () => {
//     console.log(0)
//   }

//     const logo = {
//       uri: 'https://reactnative.dev/img/tiny_logo.png',
//       width: 64,
//       height: 64
//     }

//     const renderItem = ({item, index}) => {
//       return (
//         <TouchableWithoutFeedback
//           onPress={handleClick}
//           activeOpacity={1}
//         >
//           <View
//             style={{
//               height: 30,
//               width: '100%',
//               backgroundColor: index % 2 === 0 ? '#ccc' : '#fff'
//             }}
//           >
//             <Text style={{lineHeight: 30}}>
//               {item.key}
//             </Text>
//           </View>
//         </TouchableWithoutFeedback>
//       )
//     }

//   return (
//     <>
//       <StatusBar
//         backgroundColor="#ff0"
//         barStyle="light-content"
//       ></StatusBar>

//       <View style={{height: 100}}>
//       <ScrollView>
//       <View style={styles.IndexWrap}>
//         <View style={[styles.ItemWrap, styles.ItemTextTop]}>
//           <Text style={styles.ItemText}> textInComponent 1</Text>
//         </View>
//         <View style={[styles.ItemWrap, styles.ItemWrapMid]}>
//           <Text style={styles.ItemText}> textInComponent 2</Text>
//         </View>
//         <View style={[styles.ItemWrap, styles.ItemTextBottom]}>
//           <Text style={styles.ItemText}> textInComponent 3</Text>
//         </View>
//       </View>
//       <Greeting>
//         <Text>hello</Text>
//       </Greeting>
//       <View>
//         <Image 
//           source={{uri:'https://facebook.github.io/react/logo-og.png'}}
//           style={{width: 50, height: 50}}
//         ></Image>
//       </View>
//       <View>
//         <TextInput 
//           defaultValue="hello"
//           keyboardType="numbers-and-punctuation"
//           onChangeText={(text) => console.log(text)}
//           multiline={true}
//           selection={{start: 0, end: 5}}
//         ></TextInput>
//       </View>
//       <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Text style={{ fontSize: 96 }}>If you like</Text>
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Text style={{ fontSize: 96 }}>Scrolling down</Text>
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Text style={{ fontSize: 96 }}>What's the best</Text>
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Text style={{ fontSize: 96 }}>Framework around?</Text>
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//         <Image source={logo} />
//       <Text style={{ fontSize: 80 }}>React Native</Text>
//     </ScrollView>
//     </View>

//     <ImageBackground
//       source={icon}
//       blurRadius={10}
//       style={{
//         flex: 1,
//         resizeMode: "cover",
//         justifyContent: "center"
//       }}
//     >
//       <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]}
//         renderItem={renderItem}
//       ></FlatList>
//     </ImageBackground>

//     <Switch
//       trackColor={{ false: "#767577", true: "#81b0ff" }}
//       thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//       ios_backgroundColor="#3e3e3e"
//       onValueChange={toggleSwitch}
//       value={isEnabled}
//     />
//     </>
//   )
// }

// import React from 'react';
// import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
// import Constants from 'expo-constants';

// const Separator = () => {
//   return <View style={styles.separator} />;
// }

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Text style={styles.title}>
//           The title and onPress handler are required. It is recommended to set
//           accessibilityLabel to help make your app usable by everyone.
//         </Text>
//         <Button
//           title="Press me me"
//           onPress={() => Alert.alert('Simple Button pressed')}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Text style={styles.title}>
//           Adjust the color in a way that looks standard on each platform. On
//           iOS, the color prop controls the color of the text. On Android, the
//           color adjusts the background color of the button.
//         </Text>
//         <Button
//           title="Press me"
//           color="#f194ff"
//           onPress={() => Alert.alert('Button with adjusted color pressed')}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Text style={styles.title}>
//           All interaction for the component are disabled.
//         </Text>
//         <Button
//           title="Press me"
//           disabled
//           onPress={() => Alert.alert('Cannot press this one')}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Text style={styles.title}>
//           This layout strategy lets the title define the width of the button.
//         </Text>
//         <View style={styles.fixToText}>
//           <Button
//             title="Left button"
//             onPress={() => Alert.alert('Left button pressed')}
//           />
//           <Button
//             title="Right button"
//             onPress={() => Alert.alert('Right button pressed')}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#737373',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });

// export default App



import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    // backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;