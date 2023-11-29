import { Pressable, View } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { buttonsBackgroundColor, textColor } from "../constants/colors";
import { ScreenProps } from "../interfaces";
import { useNavigation } from "@react-navigation/native";


export default function Footer({ screen, setScreen }: ScreenProps) {
    const navigate = useNavigation()
    return (
        <Container>
            <Pressable style={{width:80, alignItems:'center', justifyContent:'center'}} onPress={() => {
                setScreen('home')
                navigate.navigate('home' as never)
            }}>
                <Ionicons name="md-home" size={36} color={textColor} style={{ opacity: (screen === 'home' ? 1 : 0.5) }} />
            </Pressable>
            <Pressable style={{width:80, alignItems:'center', justifyContent:'center'}} onPress={() => {
                setScreen('time')
                navigate.navigate('time' as never)
            }}>
                <Ionicons name="md-time" size={36} color={textColor} style={{ opacity: (screen === 'time' ? 1 : 0.5) }} />
            </Pressable>
        </Container>
    )
}

const Container = styled.View`
position:fixed;
bottom:0;
width:100%;
height:80px;
background-color:${buttonsBackgroundColor};
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-around;
`