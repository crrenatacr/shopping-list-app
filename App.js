import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ShoppingLists from './components/ShoppingLists'; // import the screens
import Welcome from './components/Welcome';

// Create the stack navigator
const Stack = createNativeStackNavigator();

import { LogBox } from 'react-native';
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBU5sMsZVlLU182rQREXRTMsrpb8e21RH0",
    authDomain: "shopping-list-demo-301d9.firebaseapp.com",
    projectId: "shopping-list-demo-301d9",
    storageBucket: "shopping-list-demo-301d9.firebasestorage.app",
    messagingSenderId: "483198929970",
    appId: "1:483198929970:web:8d3fdca6e07fd586e0c02b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="ShoppingLists"
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
