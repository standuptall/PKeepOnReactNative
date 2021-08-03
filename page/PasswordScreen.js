import React, { useEffect, useState } from 'react';
import { Alert, Button,ScrollView,StyleSheet, Text, View ,TextInput} from 'react-native';

export function PasswordScreen(props){
    console.log(props);
    return <View>
        <Text>Nome</Text>
        <TextInput value={props.route.params.item.nome}></TextInput>
        <Text>Descrizione</Text>
        <TextInput value={props.route.params.item.descrizione}></TextInput>
        <Text>Nome utente</Text>
        <TextInput value={props.route.params.item.nomeutente}></TextInput>
        <Text>Password</Text>
        <TextInput value={props.route.params.item.PasswordScreen}></TextInput>
    </View>
}