import React, { useEffect, useState } from 'react';
import { Alert, Button,ScrollView,StyleSheet, Text, View } from 'react-native';
import { api } from '../services/api';
import { ListItem } from '../components/ListItem';

export function HomeScreen(props){
    const [p,setP] = useState([]);
    useEffect(()=>{
      api.getPasswords("").then(
        (data)=>{
          setP(data);
        },error=>{
      })
    },[])
    return  <View style={styles.container}>
      
      <ScrollView >
      {p.map((item)=>(
          // <Text>{item.nome}</Text>
          <ListItem name={item.nome} description={item.nomeutente} id={item.ID} key={item.ID} navigation={props.navigation} item={item}></ListItem>
      ))}
      </ScrollView>
    <View style={styles.commandPalette}>
        <Text onPress={()=>launchCommand("key")} style={styles.button} title="SET KEY">SET KEY</Text>
        <Text onPress={()=>launchCommand("voice")} style={styles.button} title="VOICE">VOICE</Text>
        <Text onPress={()=>launchCommand("add")} style={styles.button} title="ADD">ADD</Text>
     </View>
      </View>
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:"70%"
  },commandPalette: {
    flex: 1,
    position:"absolute",
    flexDirection:"row",
    backgroundColor: '#fff',
    height:"20%",
    bottom:30
  },
  button:{
    fontSize:20,
    margin:10,
    // border:"1px gray solid",
    padding:20,
    borderRadius:40,
    backgroundColor:"gray"
  }
});
