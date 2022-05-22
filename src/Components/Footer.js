import styled from "styled-components"

export default function Footer({ title, picture, day }) {
    return (
        <Container>
            <img src={picture} alt="Poster do Filme" />
            <div>
                <p>{title}</p>
                <p>{day}</p>
            </div>
        </Container>
    )
}

const Container = styled.footer`
    background-color: #DFE6ED;
    border: 1px solid #9EADBA; 

    display: flex;
    align-items: center;
    width: 100%;
    height: 117px;
    position: fixed; 
    bottom: 0;
    left: 0;

    padding: 0 4px;
    box-sizing: border-box;
    font-size: 26px;

    img{
        background-color: #FFFFFF;
        width: 48px;
        padding: 8px;
        border-radius: 3px;
        margin: 0 12px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }
    div{
        display: flex;
        flex-direction: column;
    }
    p{
        &:last-child{
            margin-top: 5px;
        }
    }
`