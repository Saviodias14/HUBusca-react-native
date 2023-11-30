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
    const [page, setPage] = useState<number>(1)
    const navigate = useNavigation()
    useEffect(() => {
        const fetchData = async () => {
            console.log(`${repository?.repos_url}?page=${page}`)
            await axios.get(`${repository?.repos_url}?page=${page}`, {
                headers: {
                    Authorization: `Bearer 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`
                }
            })
                .then((res) => {
                    if (userData) {
                        const data = [...userData, res.data]
                        setUserData(data)
                    }else{
                    setUserData(res.data)
                }
                })
                .catch((err) => {
                    alert('Erro interno')
                })
        }
        fetchData()
    }, [page])
    function handleScroll() {
        const number = page + 1
        setPage(number)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: mainlyColor, paddingTop: 50 }}>
            <ScrollView onScroll={handleScroll} scrollEventThrottle={30}>
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