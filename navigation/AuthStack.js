

import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from "react";
import {useState} from "react";
import LoginScreen from "../pages/LoginScreen";
import SignupScreen from '../pages/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';




const Stack = createStackNavigator();


const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, [])
    
    if (isFirstLaunch == null) {
        return null;
    } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }



return (
    <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen 
        name='Signup'
        component={SignupScreen}
        options={{header: () => null}}
        />
        <Stack.Screen 
        name='Login'
        component={LoginScreen}
        options={{header: () => null}}
        />
    </Stack.Navigator>
);
};

export default AuthStack;
