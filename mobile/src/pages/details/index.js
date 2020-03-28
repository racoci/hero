import React from 'react';
import {Feather} from "@expo/vector-icons"
import { View, Text, Button, Image } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import style from "./styles";
import logoImg from "../../assets/logo.png"

function Details({ navigation }) {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                <TouchableOpacity 
                    style={style.incidentButton}
                    onPress={() => navigation.navigate('Incidents')}
                >
                    <Feather name="arrow-left" size={28} color="#E02041"></Feather>
                </TouchableOpacity>
            </View>
            <View style={style.incident} >
                <Text style = {[style.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style = {style.incidentValue}>{"Nome da ONG"}</Text>

                <Text style = {style.incidentProperty}>CASO:</Text>
                <Text style = {style.incidentValue}>{"Nome do Caso"}</Text>

                <Text style = {style.incidentProperty}>VALOR:</Text>
                <Text style = {style.incidentValue}>{"R$ 120,00"}</Text>
            </View>
            <View style={style.contact} >
                <Text style = {style.heroTitle}>Salve o dia!</Text>
                <Text style = {style.heroTitle}>Seja o herói desse caso.</Text>
                <Text style = {style.heroDescription}>Entre em contato:</Text>
                <View style={style.actions}>
                    <TouchableOpacity 
                        style = {style.action}
                        onPress= {() => {}}>
                        <Text style={style.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {style.action}
                        onPress= {() => {}}>
                        <Text style={style.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Details