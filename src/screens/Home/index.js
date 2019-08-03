import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

// PACKAGES
// import Menu from "react-native-vector-icons/Entypo";
// import Search from "react-native-vector-icons/Feather";


// FILES
import styles from "./style"

export default class Home extends Component {

    // static navigationOptions = {
    //     headerTitleStyle: { textAlign: "center", flex: 1 },
    //     title: "Design Book",
    //     headerStyle: {
    //       backgroundColor: "#673AB7"
    //     },
    //     headerRight: (
    //       <View style={{ paddingRight: 10 }}>
    //         <Search name="search" color="black" size={25} />
    //       </View>
    //     ),
    //     headerLeft: (
    //       <View style={{ paddingLeft: 10 }}>
    //         <Menu name="menu" color="black" size={25} />
    //       </View>
    //     )
    //   };
    

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Option 1", image:"https://img.icons8.com/color/70/000000/cottage.png"},
        {id:1, title: "Option 2", image:"https://img.icons8.com/color/70/000000/administrator-male.png"},
        {id:2, title: "Option 3", image:"https://img.icons8.com/color/70/000000/filled-like.png"} ,
        {id:3, title: "Option 4", image:"https://img.icons8.com/color/70/000000/facebook-like.png"} ,
        {id:4, title: "Option 5", image:"https://img.icons8.com/color/70/000000/shutdown.png"} ,
        {id:5, title: "Option 6", image:"https://img.icons8.com/color/70/000000/traffic-jam.png"} ,
        {id:6, title: "Option 7", image:"https://img.icons8.com/dusk/70/000000/visual-game-boy.png"} ,
        {id:8, title: "Option 8", image:"https://img.icons8.com/flat_round/70/000000/cow.png"} ,
        {id:9, title: "Option 9", image:"https://img.icons8.com/color/70/000000/coworking.png"} ,
        {id:9, title: "Option 10",image:"https://img.icons8.com/nolan/70/000000/job.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.Alert(item.title)
  }

  render() {

    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item.view)}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}
