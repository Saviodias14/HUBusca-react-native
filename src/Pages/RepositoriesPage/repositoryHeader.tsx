import React from "react"
import { UserDetail } from "../../interfaces"
import { secondColor, textColor } from "../../constants/colors"
import styled from "styled-components/native"
import { View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function RepositoryHeader({ repository }: { repository: UserDetail | null }) {
    return (
        <ContainerHeader>
            <ViewHeader>
                <UserImage source={{ uri: repository?.avatar_url }} />
                <View style={{}}>
                    <TextHeader style={{ fontSize: 20, opacity: 1 }} >
                        {repository?.name}
                    </TextHeader>
                    <TextHeader style={{ fontSize: 16 }} >
                        {repository?.login}
                    </TextHeader>
                </View>
            </ViewHeader>
            <ViewHeader style={{ flexDirection: 'column' }}>
                <View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Ionicons name="md-location" size={15} color={textColor} style={{ marginRight: 5, display: repository?.location ? "flex" : "none" }} />
                        <TextHeader style={{ fontSize: 16 }}>
                            {repository?.location}
                        </TextHeader>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Ionicons name="people-outline" size={15} color={textColor} style={{ marginRight: 5, display: repository?.location ? "flex" : "none" }} />
                        <TextHeader style={{ fontSize: 14, maxWidth: '100%' }} >
                            {repository?.followers} seguidores · {repository?.following} seguindo
                        </TextHeader>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Ionicons name="file-tray-full-outline" size={15} color={textColor} style={{ marginRight: 5, display: repository?.location ? "flex" : "none" }} />
                        <TextHeader style={{ fontSize: 14 }} >
                            {repository?.public_repos} repositórios
                        </TextHeader>
                    </View>
                </View>
            </ViewHeader >

        </ContainerHeader >
    )
}

const ContainerHeader = styled.View`
    background-color:${secondColor};
    border-color: ${textColor};
    border-width: 1px;
    padding: 20px;
    border-radius: 15px;
    opacity: 0.7;
    width:90%;
    margin-top: 30px;
    flex-wrap: wrap;
`

const UserImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 20px;
`
const ViewHeader = styled.View`
    display:  flex;
    flex-direction: row;
    margin-top: 20px;
`

const TextHeader = styled.Text`
    color: ${textColor};
    opacity: 0.7;
`