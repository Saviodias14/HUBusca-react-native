import styled from "styled-components/native"
import React, { useEffect, useState } from "react"
import { textColor } from "../constants/colors"
import { UserDetail, UserItem } from "../interfaces"
import axios from "axios"
import { Ionicons } from "@expo/vector-icons"

interface LocationProps {
    ocult?: boolean;
}

export default function UsersList({ user }: { user: UserItem }) {
    const [userDetail, setUserDetail] = useState<UserDetail | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${user.url}`, {
                headers: {
                    Authorization: `Bearer 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`
                }
            })
                .then((res) => {
                    setUserDetail(res.data);
                })
                .catch((err) => {
                    console.log(err.response.data);
                })
        };

        fetchData();
    }, [])
    return (
        <Container>
            <UserImage source={{ uri: userDetail?.avatar_url }} />
            <UserData>
                <Name>{userDetail?.name}</Name>
                <Login>{userDetail?.login}</Login>
                <Location ocult={Boolean(userDetail?.location)}>
                    <Ionicons name="md-location" size={15} color={textColor} style={{ marginRight: 5 }} />
                    <LocationText>{userDetail?.location}</LocationText>
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
justify-content:space-between;
`

const Name = styled.Text`
    color:${textColor};
    font-size: 18px;
`
const Login = styled.Text`
    color:${textColor};
    opacity:0.7;
    font-size: 14px;
    margin-bottom:30px;
`
const Location = styled.View<LocationProps>`
    display: ${props => (props.ocult ? 'flex' : 'none')};
    color:${textColor};
    display:flex;
    flex-direction:row;
`
const LocationText = styled.Text`
    color:${textColor};
`