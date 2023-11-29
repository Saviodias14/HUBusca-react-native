import { SafeAreaView } from "react-native-safe-area-context";
import { mainlyColor, textColor } from "../../constants/colors";
import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import React, { useEffect } from "react";
import UsersList from "../../components/usersList";
import Footer from "../../components/footer";
import { HistoricPageProps } from "../../interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HistoricPage({ screen, setScreen, userHistoric, setUserHistoric, setRepository }: HistoricPageProps) {
    useEffect(() => {
        const fetchData = async () => {
            const arrayUrl = await AsyncStorage.getItem('arrayUrlKey')
            if (arrayUrl !== null) {
                setUserHistoric(JSON.parse(arrayUrl))
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: mainlyColor }}>
                <ScrollView>
                    <Container>
                        <H1 style={{marginBottom:40}}>Histórico</H1>
                        {userHistoric?.map((e) =>
                            <>
                                {<UsersList key={e} user={e} setRepository={setRepository} />}
                            </>)}
                        <Text1 style={{ marginTop: 200 }}>{userHistoric?.length===0 ? 'Nenhum hitórico existente :(' : ''}</Text1>
                    </Container>
                </ScrollView>
            </SafeAreaView>
            <Footer screen={screen} setScreen={setScreen} />
        </>
    );
}

const Container = styled.View`
  flex: 1;
  background-color: ${mainlyColor};
  width:100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 100px;
`;

const H1 = styled.Text`
    font-size:28px;
    color: ${textColor};
    opacity:0.7;
`

const Text1 = styled(Text)`
  color:${textColor};
`