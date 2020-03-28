import React from 'react';
import {Feather} from "@expo/vector-icons"
import { View, Text, Button, Image } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import logoImg from "../../assets/logo.png"

import style from "./styles";


function Incidents({ navigation }) {
  return (
    <View style={style.container}>
        <View style={style.header}>
            <Image source={logoImg}/>
            <Text style={style.headerText}>
                Total de <Text style={style.headerTextBold} >
                    {0} casos
                </Text>.
            </Text>
        </View>
        <Text style={style.title}>Bem-vindo!</Text>
        <Text style={style.description}> Escolha um dos casos abaixo e salve o dia.</Text>
        <FlatList
            style={style.incidents}
            data={[1, 2, 3]}
            keyExtractor={incidents => String(incidents)}
            showsVerticalScrollIndicator={false}
            renderItem={ () => (
                <View style={style.incident} >
                    <Text style = {style.incidentProperty}>ONG:</Text>
                    <Text style = {style.incidentValue}>{"Nome da ONG"}</Text>

                    <Text style = {style.incidentProperty}>CASO:</Text>
                    <Text style = {style.incidentValue}>{"Nome do Caso"}</Text>

                    <Text style = {style.incidentProperty}>VALOR:</Text>
                    <Text style = {style.incidentValue}>{"R$ 120,00"}</Text>

                    <TouchableOpacity 
                        style={style.incidentButton}
                        onPress={() => navigation.navigate('Details')}
                    >
                        <Text style={style.incidentButtonText}> Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041"></Feather>
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>
  );
}

export default Incidents;