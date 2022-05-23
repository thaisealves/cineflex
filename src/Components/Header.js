import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
export default function Header() {
    const navigate = useNavigate();
    const barData = window.location.href
    const [iconContent, setIconContent] = useState("")
    useEffect(() => {
        barData[barData.length - 1] === "/" ? setIconContent("") : setIconContent(<ion-icon onClick={() => navigate(-1)} name="arrow-undo"></ion-icon>)
    }, [barData])

    return (
        <Container>
            <Icon>
                {iconContent}
            </Icon>
            CINEFLEX
        </Container>
    )
}

const Container = styled.header`
    width: 100%;
    height: 68px;
    background-color: #C3CFD9;

    color: #E8833A;
    font-size: 34px;
    line-height: 40px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    margin-bottom: 70px;
    
`
const Icon = styled.div`
position: absolute;
top:20px;
left: 10px;
color: #7B8B99;
`