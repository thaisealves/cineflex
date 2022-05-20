import styled from "styled-components"
export default function Header() {
    return (
        <Container>
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