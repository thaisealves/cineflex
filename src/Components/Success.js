import styled from "styled-components"
import { Link } from "react-router-dom"
export default function Success({reserved, name, cpf, title, hour, date}) {
    console.log(reserved)
    return (
        <Container>
            <Done>
                Pedido feito<br />
                com sucesso!
            </Done>
            <div>
                <Movie>
                    <h1>
                        Filme e sessão
                    </h1>
                    <div>{title}</div>
                    <div>{date} {hour}</div>
                </Movie>
                <Tickets>
                    <h1>
                        Ingressos
                    </h1>
                    {reserved.map((value, ind) => <p key={ind}>Assento {value}</p>)}
                </Tickets>
                <Costumer>
                    <h1>
                        Comprador
                    </h1>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </Costumer>
            </div>
            <StyledLink to={`/`}><Button>
                Voltar pra Home
            </Button>
            </StyledLink>
        </Container >
    )

}

const Container = styled.div`

margin: 100px 30px;
display: flex;
flex-direction: column;
align-items: center;
div{
    width: 100%;
}
h1{
    font-weight: 700;
}
p{
    margin: 4px 0;
}
`

const Done = styled.div`
    width: 100%;
    text-align: center;
    color: #247a6b;
    font-weight: 700;
    line-height: 28px;
`
const Movie = styled.div`
margin-top: 30px;
 width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    div{
        margin-top: 6px;
    }

`
const Tickets = styled.div`
margin-top: 30px;
 width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;

`
const Costumer = styled.div`
margin-top: 30px;
 width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;

`
const Button = styled.div`
    margin-top: 70px;
    background-color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    border-radius: 3px;
    height: 42px;
    width: 226px;
    font-size: 18px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    width: 70%;
 
    `
