import React from "react"
import { RepositoryList } from "../../interfaces"
import { Linking, Pressable, Text, View } from "react-native"
import styled from "styled-components/native"
import { mainlyColor, repositoryTitle } from "../../constants/colors"
import formatDate from "../../helpers/formatDate"

export default function RepositoryBody({ userData }: { userData: RepositoryList }) {
    function openRepository(){
        Linking.openURL(userData.html_url)
        .catch((err)=>{
            alert('Não foi possível abrir esse repositório!')
        })
    }
    return (
        <Pressable onPress={()=>openRepository()}>
            <Container>
                <MainlyView>
                    <View1>
                        <TitleText>
                            {userData.name}
                        </TitleText>
                        <Text>
                            {userData.language}
                        </Text>
                    </View1>
                    <View2>
                        <Text>
                            Criado em: {formatDate(userData.created_at)}
                        </Text>
                        <Text>
                            Último push:{formatDate(userData.pushed_at)}
                        </Text>
                    </View2>
                </MainlyView>
                <View style={{ width: '100%', justifyContent: 'flex-start' }}>
                    <Description>
                        Descrição: {userData.description ?? 'Sem descrição'}
                    </Description>
                </View>
                <View style={{ height: 1, width: '90%', backgroundColor: mainlyColor, marginTop: 10, marginBottom: 5 }}></View>
            </Container>
        </Pressable>
    )
}

const Container = styled.View`
    width:100%;
    align-items: center;
`
const TitleText = styled.Text`
    color: ${repositoryTitle};
    font-size: 24px;
    margin-bottom:10px;
`
const Description = styled.Text`
    margin: 0 30px;
    margin-top: 10px;
    text-align: left
`
const View1 = styled.View`
    align-items: flex-start;
    width: 50%;
    padding-left: 30px;
    padding-top: 10px;
`
const View2 = styled.View`
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    padding-left: 12px;
    box-sizing: border-box;
    height:100px;
`
const MainlyView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`