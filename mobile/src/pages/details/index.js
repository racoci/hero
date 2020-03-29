import React from 'react';
import {Feather} from "@expo/vector-icons"
import { View, Text, Button, Image, Linking } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import  * as MailComposer from "expo-mail-composer"

import style from "./styles";
import logoImg from "../../assets/logo.png"

function Details({ navigation, route }) {  
    const {name, email, whatsapp, city, uf, title, description, value} = route?.params?.incident
    const ongWhatsApp = whatsapp
    const formattedValue = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value)
    const message =  `Olá ${name}, estou entrando em contato pois gostaria de ajudar no caso "${title}" com o valor de ${formattedValue}` 
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
                <Text style = {style.incidentValue}>{name}</Text>

                <Text style = {style.incidentProperty}>CASO: </Text>
                <Text style = {style.incidentValue}>{title}</Text>

                <Text style = {style.incidentProperty}>DESCRIÇÃO: </Text>
                <Text style = {style.incidentValue}>{description}</Text>

                <Text style = {style.incidentProperty}>LOCAL: </Text>
                <Text style = {style.incidentValue}>{city}, {uf}</Text>

                <Text style = {style.incidentProperty}>VALOR:</Text>
                <Text style = {style.incidentValue}>{formattedValue}</Text>
            </View>
            <View style={style.contact} >
                <Text style = {style.heroTitle}>Salve o dia!</Text>
                <Text style = {style.heroTitle}>Seja o herói desse caso.</Text>
                <Text style = {style.heroDescription}>Entre em contato:</Text>
                <View style={style.actions}>
                    <TouchableOpacity 
                        style = {style.action}
                        onPress= {() => {
                            Linking.openURL(`whatsapp://send?phone=${ongWhatsApp}&text=${message}`)
                        }}>
                        <Text style={style.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {style.action}
                        onPress= {() => {
                            MailComposer.composeAsync({
                                subject: `Herói para caso ${title}`,
                                recipients: [email],
                                body: message
                            })
                        }}>
                        <Text style={style.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Details