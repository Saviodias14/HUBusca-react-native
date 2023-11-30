import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { mainlyColor, repositoryBody, secondColor, textColor } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { RepositoryList, UserDetail } from "../../interfaces";
import axios from "axios";



export default function RepositoriesPage({ repository }: { repository: UserDetail | null }) {
    const [userData, setUserData] = useState<Array<RepositoryList>>()
    const navigate = useNavigation()
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${repository?.repos_url}`)
                .then((res) => {
                    setUserData(res.data)
                })
                .catch((err) => {
                    console.log(err.response.data)
                })
        }
        fetchData()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: mainlyColor, paddingTop: 50 }}>
            <ScrollView >
                <BackArrow name="arrow-back" size={36} color={textColor}
                    onPress={() => navigate.goBack()} />
                <Container>

                    <ContainerBody>

                    </ContainerBody>
                </Container>
            </ScrollView>
        </SafeAreaView >
    )
}

const Container = styled.View`
    align-items: center;
`
const ContainerBody = styled.View`
    flex: 1;
    background-color:${repositoryBody};
    z-index: 10;
    width:100%;
    margin-top:35px;
`
const BackArrow = styled(Ionicons)`
    margin-left: 30px;
`