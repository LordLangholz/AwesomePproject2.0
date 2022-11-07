import React, { Component } from 'react';
import { View, Image, SafeAreaView, ScrollView, ActivityIndicator, StyleSheet, Text, Alert } from 'react-native';

import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer';

import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 150,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

let colorScheme = Appearance.getColorScheme();
let COLORS;

if(colorScheme=='dark'){
  COLORS = COLORSDark
}
if(colorScheme=='light'){
  COLORS = COLORSLight
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
    })
  }

  componentDidMount() {

  }

  rendercontent(){
    if(this.state.togglesponsor && this.state.countdowndone){
      return (
        <SafeAreaView style={{flex:4, backgroundColor:COLORS.background}}>
        <SponsorView/>
        <View style={styles.loading}>
          <Icon style={{ color:'green' }} onPress={() => {this.setState({togglesponsor:false})}} name="md-checkmark-circle-outline" size={50} />
        </View>
        </SafeAreaView>
      );
    }else{
      return (<AppContainer
        screenProps={{ 
          currentUser: this.state.userData,
          isLoading: this.state.isLoading,
          data: this.state.dataSource,
          mapmarkers: this.state.markers,
          updateUser: this.updateUser,
          updateUserInfo: this.updateUserInfo
         }}
        />
        );
    }
  }

  render() {
        return(
          <SafeAreaView style={{flex:1}}>

          </SafeAreaView>
        );
  }
}

export default App;

const DashboardTabNavigator = createBottomTabNavigator(
  {
    List: {  
      screen: ListStack,  
      navigationOptions:{  
        tabBarLabel:'Liste',  
        tabBarIcon:({tintColor})=>(  
          <Icon name="md-list" color={tintColor} size={25}/>  
        )  
      }
    },
    Map: {  
      screen: MapsStack,  
      navigationOptions:{  
        tabBarLabel:'Kort', 
        tabBarIcon:({tintColor})=>(  
          <Icon name="ios-pin" color={tintColor} size={25}/>   
        )  
      }
    },
    Add:{  
      screen:AddStack,  
      navigationOptions:{  
        tabBarLabel:'Tilføj',
        tabBarIcon:({tintColor})=>(  
          <Icon name="ios-add-circle-outline" color={tintColor} size={25}/>   
        )  
      }
    },
    Random:{  
      screen:RandStack,  
      navigationOptions:{  
        tabBarLabel:'Tilfældig',  
        tabBarIcon:({tintColor})=>(  
          <Icon name="ios-shuffle" color={tintColor} size={25}/>   
        )  
      }
    },
    Profile:{  
      screen:ProfileStack,  
      navigationOptions:{  
        tabBarLabel:'Profil',  
        tabBarIcon:({tintColor})=>( 
            <Icon name="ios-contact" color={tintColor} size={25}/> 
        )  
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    },
    tabBarOptions: { style:{backgroundColor: COLORS.navigation}, activeTintColor: COLORS.main, inactiveTintColor: 'gray', }
  }
  
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 10, color: COLORS.white }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
);


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1, backgroundColor: COLORS.background}}>
    <View style={{height: 150, backgroundColor: COLORS.main, alignItems:'center', justifyContent: 'center'}}>
      <Image source={require('./assets/IO.png')} style={{height:150, width:150,resizeMode:'contain'}}/>
    </View>
    <ScrollView>
      <DrawerNavigatorItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Hjem: {
    screen: DashboardStackNavigator,
    navigationOptions: {
      drawerLabel: 'Hjem',
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={25}/>
      )
    }
  },
  Terms: {
    screen: TermsStack,
    navigationOptions: {
      drawerLabel: 'Terms & Conditions',
      drawerIcon: ({ tintColor }) => (
        <TermsIcon name="clipboard-list" color={tintColor} size={25}/>
      )
    }
  },
  Sponsor:{
    screen: SponsorStack,
    navigationOptions: {
      drawerLabel: 'Sponsorer',
      drawerIcon: ({ tintColor }) => (
        <SponsorIcon name="handshake-o" color={tintColor} size={25}/>
      )
    }
  }
},{
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: COLORS.main,
    style: {
      backgroundColor: COLORS.background
    }
  }
  
}
)

const AppSwitchNavigator = createSwitchNavigator({
  /*Welcome: { screen: WelcomeScreen },*/
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const FrontStack = createStackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <Image style={{height:50, width:'100%', resizeMode:'contain'}} source={require('./assets/IO.png')}/>
        ),
        headerStyle: {
          backgroundColor: COLORS.navigation
        },
        headerTitleStyle: {
          color: COLORS.main
        },
      };
    }
  },
  Signup: {
    screen: SignupForm,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <Image style={{height:50, width:'100%', resizeMode:'contain'}} source={require('./assets/IO.png')}/>
        ),
        headerStyle: {
          backgroundColor: COLORS.navigation
        },
        headerTitleStyle: {
          color: COLORS.main
        },
      };
    }
  }
},
{
  cardStyle: { backgroundColor: COLORS.background},
}
);

const LoginContainer = createAppContainer(FrontStack);