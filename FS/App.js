import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Dimensions, ScrollView, Image, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

// Rest of the import statements
import { useFonts } from 'expo-font';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height


function Percent(x,y){
  return y * 0.01 * x
}

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function HomePage({navigation}){
  return (
    <View style={styles.Flexcontainer}>
      <View style={{flex: 12, alignItems: 'center'}}>
         
        <Image style={{width: Percent(65,width), height: Percent(35, height), marginTop: 90.14623123}} source={require("./assets/globe_logo.png")}/>
        <Text style={{fontSize: Percent(12, width), marginTop: 10}}>Welcome to</Text>
        <Text style={{fontSize: Percent(12, width)}}>Culturify</Text> 
      </View>
      <View style={{flex: 5}}>
        <Text style={{fontSize: 20, alignItems: 'flex-start', marginTop: 95}}>Discover.         Connect.          Grow.</Text>
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Culture")} style={styles.button}>
          <Text style={{fontSize: 40, marginLeft: 50, marginRight: 50, marginTop: 5, marginBottom: 5}}>Explore</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{flex: 5/3}}>
        <Text>Welcome User</Text>
      </View>
      <View style={{flex: 5/3}}>
        <Text>Today is Saturday, May 25th</Text>
      </View> */}
      
    </View>
  );
}



function Coming({navigation}) {
  
  return(
    <View style={styles.Flexcontainer}>
        <Text style={{fontSize:20}} >This page is coming soon please go back</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
          <Text style={{fontSize:30}}>Back</Text>
        </TouchableOpacity>
    </View>
  )
}


function Japan({navigation}) {
  return(
    <View style={styles.Flexcontainer}>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        
        {/* View start */}
        <View style={{flex:1, marginTop:20,}}>
          <Text style={styles.cultureHeaderMain}>Japan</Text>
        </View>

        {/* Information */}
        <View style={{flex:1, backgroundColor:"rgb(235, 213, 247)", borderRadius:50, marginBottom:15}}>
          <View><Text style={styles.cultureHeader}>Information</Text></View>
          <View><Text style={{marginLeft: 15, marginBottom: 33}}>Wikipedia: "Japan is an island country in East Asia. It is in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south."</Text></View>
        </View>

        {/* Tradition */}
        <View style={{flex:1, backgroundColor:"rgb(235, 213, 247)", borderRadius:50, marginBottom:15}}>
          <Text style={styles.cultureHeader}>Tradition</Text>
          <Text style={{marginLeft: 15, marginBottom: 10}}>Japan is known for its rich cultural heritage and traditions. Here are some notable Japanese traditions:</Text>
          <Text style={{marginLeft: 15}}>1. Tea Ceremony:</Text>
          <Text style={{marginLeft: 15}}>A highly ritualized preparation and presentation of matcha (green tea). It emphasizes aesthetics, simplicity, and etiquette. The ceremony often takes place in a tea house or a specially designed room.</Text>
          <Text style={{marginLeft:15, marginTop:15}}>2. Festivals (Matsuri):</Text>
          <Text style={{marginLeft:15, marginBottom: 33}}>Festivals, or "matsuri," are an integral part of Japanese culture, celebrated with great enthusiasm across the country. These festivals often have religious origins, being closely associated with Shinto shrines or Buddhist temples, and are characterized by vibrant parades, traditional music, dance, and various community activities.</Text>
        </View>

        {/* Movies */}
        <View style={{flex:1, backgroundColor:"rgb(235, 213, 247)", borderRadius:50, marginBottom:15}}>
          <Text style={styles.cultureHeader}>Movies</Text>
          <Text style={{marginLeft: 15}}>1. Spirited Away (2007)</Text>
          <Text style={{marginLeft: 15}}>2. Rashomon (1950)</Text>
          <Text style={{marginLeft: 15, marginBottom: 33}}>3. Yojimbo (1961)</Text>
        </View>
        {/* View start */}
        <View style={{flex:1, backgroundColor:"rgb(235, 213, 247)", borderRadius:90, marginBottom:15}}>
          <Text style={styles.cultureHeader}>Cuisine</Text>
          <Text style={{marginLeft: 15}}>1. Soba Noodles</Text>
          <Text style={{marginLeft:15}}>Soba (そば or 蕎麦) are Japanese noodles made primarily from buckwheat flour with some wheat flour mixed in. They have an ashen brown color and a slightly grainy texture. Soba can be served chilled with dipping sauce or hot in noodle soup and are used in various dishes. In Japan, soba noodles are available from fast food venues to expensive specialty restaurants. Dried soba noodles and instant noodle broth (men-tsuyu) are also sold in stores for easy home preparation.</Text>
          <Text style={{marginLeft:15, marginTop:15}} >2. Sushi</Text> 
          <Text style={{marginLeft:15}}>Sushi is a traditional Japanese dish consisting of vinegared rice paired with various ingredients, commonly raw fish or seafood. It includes varieties like nigiri (hand-pressed rice topped with fish), maki (rolled sushi with seaweed), and sashimi (sliced raw fish without rice). Sushi is often accompanied by soy sauce, wasabi, and pickled ginger, and is enjoyed for its fresh, delicate flavors.</Text>
          <Text style={{marginLeft:15, marginTop:15}}>3. Takoyaki</Text>
          <Text style={{marginLeft:15, marginBottom: 50}}>Takoyaki are Japanese snacks made from a wheat flour-based batter, filled with diced octopus, tempura scraps, pickled ginger, and green onions. Cooked in a special molded pan, they are formed into round balls and typically topped with takoyaki sauce, mayonnaise, bonito flakes, and seaweed powder. These savory treats are popular at street food stalls and festivals.</Text>
        </View>

        <View style={{backgroundColor:"rgb(235, 213, 247)", borderRadius:50, marginBottom:15}}>
          <Text style={styles.cultureHeader}>Events</Text>
          <Text style={{marginLeft: 15}}>1. Free zen meditation class at japanese art & cultural center, japanese art & cultural center: 28 may</Text>
          <Text style={{marginLeft: 15, marginBottom: 25}}>2. FanimeCon at San Jose McEnery Convention Center May 24-27</Text>
        </View>
        

      </ScrollView>
    </View>
    
  )
}




function Events({navigation}) {
  function redirect(txt){
    if (txt == "FanimeCon") {
      Linking.openURL('https://www.fanime.com/')
    } else if (txt == 'Japanese Town') {
      Linking.openURL('https://www.eventbrite.com/e/san-jose-event-japanese-town-tickets-877356275237')
    } else if (txt == 'Cherry Blossom') {
      Linking.openURL('https://www.cupertinocbf.org/')
    }
  }

  return(
    <View style={styles.Flexcontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 30, marginTop: 50}}>
          <Text style={{fontSize:45, alignSelf:"center"}}>Upcoming Events</Text>
        </View>
        <View style={{flex:1, alignItems:"center", backgroundColor:"rgb(235, 213, 247)", borderRadius:50, marginBottom:30}}>
          <TouchableOpacity style={{marginBottom:30}} onPress={()=>redirect("FanimeCon")}>
            <Text style={{fontSize:40}}>     FanimeCon</Text>
            <Text>    Time: May 24-27th</Text>
            <Text>    Location: Hilton – San Carlos</Text>
            <Text>    FanimeCon is an annual four-day anime convention held</Text>
            <Text>    Memorial Day weekend at the San Jose McEnery</Text>
            <Text>    Convention</Text>
            <Text>    Center over Convention Center over with additional</Text> 
            <Text>    events at the DoubleTree, and the surrounding downtown</Text> 
            <Text>    area in San Jose, California. The convention typically</Text>
            <Text>    offers an AMV contest, artist's alley, contests </Text>
            
          </TouchableOpacity>
        </View>
        <View style={{flex:1, alignItems:"center", backgroundColor:"rgb(235, 213, 247)", borderRadius:50, marginBottom:30}}>
          <TouchableOpacity style={{marginBottom:30}} onPress={()=>redirect("Japanese Town")}>
            <Text style={{fontSize:40}}>     Japanese Town</Text>
            <Text>    Time: Saturday and Sunday, April 27 & 28 2024</Text>
            <Text>    Location: Memorial Park</Text>
            <Text>    Come join us for a fun-filled day at Japanese Town!</Text>
            <Text>    Located at 1300 Senter Rd, this in-person event</Text>
            <Text>    celebrate Japanese culture, food, and traditions. Immerse</Text>
            <Text>    yourself in the sights, sounds, and tastes of Japan right</Text>
            <Text>    here in San Jose. From traditional performances to</Text> 
            <Text>    delicious cuisine, there's something for everyone</Text>
            <Text>    to enjoy. Don't miss out on this unique experience!</Text>
            
            
          </TouchableOpacity>
        </View>
        <View style={{flex:1, alignItems:"center", backgroundColor:"rgb(235, 213, 247)", borderRadius:50, marginBottom: 15}}>
          <TouchableOpacity style={{marginBottom:30}} onPress={()=>redirect("Cherry Blossom")}>
            <Text style={{fontSize:40}}>     Cherry Blossom</Text>
            <Text>    Time: Saturday and Sunday, April 27 & 28,</Text>
            <Text>    Location: Memorial Park</Text>
            <Text>    Welcome to our 40th annual Japanese</Text>
            <Text>    spring celebration honoring</Text>  
            <Text>    Toyokawa, Japan, Cupertino's</Text>  
            <Text>    Sister City. Come join us on</Text>  
            <Text>    Saturday and Sunday, April 27 & 28,</Text> 
            <Text>    2024, 10:00 AM - 5:30 PM</Text>   
            
            
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

function Culture({navigation}) {
  function change(id){
    if (id != 0) {
      navigation.navigate("cs")
    } else {
      navigation.navigate('japan')
    }
  }
  return (
    <View style={styles.Flexcontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {{View:1, marginBottom:30, marginTop:30}}>
          <Text style={styles.heading2}>Find New Cultures!</Text>
        </View>
        <View style = {{View:1, justifyContent: "center", alignItems:'center', flexDirection: 'row', marginBottom:30}}>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_indiaButton.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_chinaButton.png")}/>
          </TouchableOpacity>
        </View>
        <View style = {{View:1, justifyContent: "center", alignItems:'center', flexDirection: 'row', marginBottom:30}}>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_usButton.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_indonesiaButton.png")}/>
          </TouchableOpacity>
        </View>
        <View style = {{View:1, justifyContent: "center", alignItems:'center', flexDirection: 'row', marginBottom:30}}>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_pakistanButton.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_nigeriaButton.png")}/>
          </TouchableOpacity>
        </View>
        <View style = {{View:1, justifyContent: "center", alignItems:'center', flexDirection: 'row', marginBottom:30}}>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_brazilButton.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_bangladeshButton.png")}/>
          </TouchableOpacity>
        </View>
        <View style = {{View:1, justifyContent: "center", alignItems:'center', flexDirection: 'row', marginBottom:30}}>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_russiaButton.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_mexicoButton.png")}/>
          </TouchableOpacity>
        </View>
        <View style = {{View:1, justifyContent: "center", alignItems:'center', flexDirection: 'row', marginBottom:30}}>
          <TouchableOpacity onPress={() => change(1)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_ethiopiaButton.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => change(0)}>
            <Image style = {{width:150,height:150}}source={require("./assets/flag_japanBtn.png")}/>
          </TouchableOpacity>
        </View>
      </ScrollView> 
    </View>
  )
}

function Tabs() {
  return(
      <Tab.Navigator screenOptions={{headerShown:false}} barStyle={{ backgroundColor: 'rgba(235,213,247,0.6)' }}>
        <Tab.Screen 
        name= "Home" 
        component={HomePage} 
        options={{
          tabBarLabel: "Home", 
          tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home" color={color} size={26} />)
          }}/>
        <Tab.Screen 
        name="Culture" 
        component={Culture}
        options={{
          tabBarLabel: "Culture", 
          tabBarIcon: ({color}) => (<MaterialCommunityIcons name="earth" color={color} size={26} />)
          }}/>
        <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({color}) => (<MaterialCommunityIcons name="bell" color={color} size={26} />)
        }}/>
      </Tab.Navigator>
  )
}


export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name ='Tab' component={Tabs}/>
        <Stack.Screen name='cs' component={Coming}/>
        <Stack.Screen name='japan' component={Japan}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  Flexcontainer: {
    flex: 1,
    
    backgroundColor: 'rgba(235, 213, 247,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    
  },
  heading: {
    fontSize: Percent(10, width)
    
  },
  heading2: {
    fontSize: Percent(10,width),
    marginTop: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontFamily: "Comfortaa-Regular"
  },
  button: {
    backgroundColor: 'rgb(235, 213, 247)',
    marginBottom: 105,
    borderRadius: 35
  },
  cultureHeader: {
    fontSize: 30,
    marginTop: 30,
    alignContent:"center",
    alignSelf: 'center'
  },
  cultureHeaderMain: {
    fontSize:50,
    marginTop: 25,
    alignSelf: 'center',
    alignContent:"center"
  }
});
