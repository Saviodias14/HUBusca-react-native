import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { mainlyColor, repositoryBody, textColor } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { RepositoryList, UserDetail } from "../../interfaces";
import axios from "axios";
import RepositoryHeader from "./repositoryHeader";
import RepositoryBody from "./repositoryBody";


export default function RepositoriesPage({ repository }: { repository: UserDetail | null }) {
    const [userData, setUserData] = useState<Array<RepositoryList>>()
    const navigate = useNavigation()
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${repository?.repos_url}`, {
                headers: {
                    Authorization: `Bearer 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`
                }
            })
                .then((res) => {
                    setUserData(res.data)
                })
                .catch((err) => {
                    alert('Erro interno')
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
                    <RepositoryHeader repository={repository} />
                    <ContainerBody>
                        {userData?.map((e) => <>
                            <RepositoryBody userData={e} />
                        </>)}
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
    position: fixed;
`