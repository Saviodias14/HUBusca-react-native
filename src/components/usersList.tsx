import styled from "styled-components/native"
import React, { useEffect, useState } from "react"
import { textColor } from "../constants/colors"
import { UserDetail, UsersListProps } from "../interfaces"
import axios from "axios"
import { Ionicons } from "@expo/vector-icons"
import { Pressable, Text } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native"

interface LocationProps {
    ocult?: boolean;
}

export default function UsersList({ user, setRepository }: UsersListProps) {
    const [userDetail, setUserDetail] = useState<UserDetail | null>(null)
    const navigate = useNavigation()
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${(user && typeof user === 'object' && 'url' in user) ? user?.url : user}`, {
                headers: {
                    Authorization: `Bearer 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`
                }
            })
                .then((res) => {
                    setUserDetail(res.data);
                })
                .catch((err) => {
                    alert('Erro interno');
                })
        }

        fetchData();
    }, [])
    async function saveAndOpenUrl(url: string, repos_url: string) {
        const arrayUrl = await AsyncStorage.getItem('arrayUrlKey')
        let newArray: Array<string> = []
        if (arrayUrl != null) {
            newArray = JSON.parse(arrayUrl)
        }
        const urlIndex = newArray.indexOf(url)
        if (urlIndex !== -1) {
            newArray.splice(urlIndex, 1);
        }
        newArray.unshift(url)
        await AsyncStorage.setItem('arrayUrlKey', JSON.stringify(newArray));
        setRepository(userDetail)
        navigate.navigate('repo' as never)
    }

    if (!userDetail) {
        return <></>
    }
    return (
        <Container>
            <Pressable onPress={() => saveAndOpenUrl(userDetail.url, userDetail.repos_url)}>
                <UserImage source={{ uri: userDetail?.avatar_url }} />
            </Pressable>
            <UserData>
                <Name >
                    {userDetail?.name}
                </Name>
                <Login >
                    {userDetail.login}
                </Login>
                <Location ocult={Boolean(userDetail?.location === null)} >
                    <Ionicons name="md-location" size={15} color={textColor} style={{ marginRight: 5, display: userDetail?.location ? "flex" : "none" }} />
                    <LocationText >
                        {userDetail?.location}
                    </LocationText>
                </Location>
            </UserData>
        </Container>
    )
}

const Container = styled.View`
    width:90%;
    border-color: ${textColor};
    opacity: 0.7;
    border-width: 1px;
    border-radius:10px;
    display:flex;
    flex-direction:row;
    margin-bottom: 20px;
    justify-content:flex-start;
    align-items:center;
`

const UserImage = styled.Image`
width: 100px;
height:100px;
border-radius:50px;
margin: 20px;
`

const UserData = styled.View`
display: flex;
flex-direction:column;
justify-content:flex-start;
flex-wrap: wrap;
min-height: 90px; 
width: 200px;
`

const Name = styled.Text`
    color:${textColor};
    font-size: 18px;
    max-width:90%; 
`
const Login = styled.Text`
   color: ${textColor};
   opacity:0.7;
   font-size: 14px;
   max-width:90%;
`

const Location = styled.View<LocationProps>`
    display: ${props => (props.ocult ? 'flex' : 'none')};
    color:${textColor};
    display:flex;
    flex-direction:row;
    max-width:90%;
`
const LocationText = styled.Text`
    color:${textColor};
    opacity:0.7;
    font-size: 14px;
`