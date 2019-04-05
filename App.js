import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBar, Dimensions, Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Product from './screens/Product';
import { ScrollView } from 'react-native-gesture-handler';
import Category from './screens/components/Home/Category';

const {height, width} = Dimensions.get('window');

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
              <TextInput placeholder="Try Jakarta!" underlineColorAndroid="transparent" placeholderTextColor="grey"
                style={{flex:1, fontWeight: '700', backgroundColor:'#FFFFFF'}} />
            </View>
          </View>
          <ScrollView
            scrollEventThrottle={16}>
            <View style={{flex:1, backgroundColor:'white', paddingTop:20}}>
              <Text style={{fontWeight: '700', fontSize: 24, paddingHorizontal: 20}}>
                What can we help you find, Nova ?
              </Text>
              <View style={{height:130, marginTop:20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('./assets/learning.png')} name="Learning"/>
                  <Category imageUri={require('./assets/journey.png')} name="Journey"/>
                  <Category imageUri={require('./assets/shopping.png')} name="Shopping"/>
                  <Category imageUri={require('./assets/programmer.png')} name="Programmer"/>
                  <Category imageUri={require('./assets/joyride.png')} name="Joyride"/>
                </ScrollView>
              </View>
              <View style={{flex:1, backgroundColor:'white', paddingTop:20, paddingHorizontal:20}}>
                <Text style={{fontWeight:'700', fontSize:24}}>
                  Introducing Learning Plus
                </Text>
                <Text style={{fontWeight:'100', marginTop:10, color:'#dddddd'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </Text>
                <View style={{width:width-40, height:200, marginTop:20, }}>
                  <Image
                  style={{flex:1,height:null, width:null, resizeMode:'cover', borderRadius: 5,
                          borderWidth: 1, borderColor:'#dddddd'}} 
                  source={require('./assets/drawing.jpg')}/>
                  
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      
      </SafeAreaView>
    );
  }
}

const tabNavigator = createBottomTabNavigator({
  Home:{
    screen: App,
    navigationOptions:{
      tabBarLabel:'Explore',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-search' color={tintColor} size={24} />
      )
    }
  },
  Product:{
    screen: Product,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-heart' color={tintColor} size={24} />
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
