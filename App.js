import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBar, Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Product from './screens/Product';
class App extends Component {

  componentWillMount(){
    this.startHeaderHeight = 80
    if(Platform.OS == 'android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{height:this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
            <View style={{flexDirection:'row', padding:10,
                          backgroundColor:'white', marginHorizontal:20,
                          shadowOffset:{width:0, height:0}, 
                          shadowColor:'black', shadowOpacity:0.2,
                          elevation:1,
                          marginTop: Platform.OS =='android' ? 40 : NULL }}>
              <Icon name="ios-search" size={20} style={{marginRight:10}}/>
              <TextInput placeholder="Search product!" underlineColorAndroid="transparent" placeholderTextColor="grey"
                style={{flex:1, fontWeight: '700', backgroundColor:'#FFFFFF'}} />
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Image source={require('./assets/logo.png')} style={{flex:1, alignContent:'center', width:'100%', height:50}} />
          </View>
        </View>
      
      </SafeAreaView>
    );
  }
}

const tabNavigator = createBottomTabNavigator({
  Home:{
    screen: App,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-home' color={tintColor} size={24} />
      )
    }
  },
  Product:{
    screen: Product,
    navigationOptions: {
      tabBarLabel: 'Products',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-cube' color={tintColor} size={24} />
      )
    }
  }
});

export default createAppContainer(tabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
