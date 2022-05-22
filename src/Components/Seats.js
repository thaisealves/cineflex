import { /* Link, */ useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios"
import styled from "styled-components"
import Footer from "./Footer"
import ButtonHandle from "./ButtonHandle";

export default function Seats() {

    const { idSessao } = useParams();
    const [seats, setSeats] = useState([])
    const [hour, setHour] = useState("")
    const [weekday, setWeekday] = useState("")
    const [movie, setMovie] = useState("")

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise
            .then((value) => {
                setSeats(value.data.seats)
                setHour(value.data.name)
                setWeekday(value.data.day.weekday)
                setMovie(value.data.movie)
            })
            .catch((err) => console.log(err))

    }, [])
    return (
        <Container>
            Selecione o(s) assento(s)
            <AllButtons>
                {seats.map((value, ind) => <ButtonHandle name={value.name} key={ind}/>)}

                <Disponibility>
                    <Selected>
                        <div></div>
                        Selecionado
                    </Selected>
                    <Avaiable>
                        <div></div>
                        Disponível
                    </Avaiable>
                    <Unavaiable>
                        <div></div>
                        Indisponível
                    </Unavaiable>
                </Disponibility>
            </AllButtons>
            <Forms>
                <div>
                    <label htmlFor="nome">Nome do comprador:</label>
                    <input type="text" id="nome" placeholder="Digite seu nome..." />
                </div>
                <div>
                    <label htmlFor="CPF">CPF do comprador:</label>
                    <input type="number" id="CPF" placeholder="Digite seu CPF..." />
                </div>

                <button type="submit">Reservar assento(s)</button>
            </Forms>


            <Footer title={movie.title} picture={movie.posterURL} day={`${weekday} - ${hour}`} />
        </Container>
    )

}

//everyting in this page
const Container = styled.div`
margin: 120px 10px;
display: flex;
flex-direction: column;
align-items: center;
font-size: 24px;
`
//the part that envolves all the seat buttons 
const AllButtons = styled.div`
width: 100%;
margin-top: 30px;
display: flex;
flex-wrap: wrap;
`


//style for the under part from the seats that shows each disponibility
const Disponibility = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
font-size: 13px;
`
const Selected = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
div{ 
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
    margin: 3px 0;
}
`
const Avaiable = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
div{ 
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
    margin: 3px 0;
}
`
const Unavaiable = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
div{ 
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    margin: 3px 0;
}
`
// form to put the user information

const Forms = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
div{
    display: flex;
    flex-direction: column;
}
 label{
     margin: 6px 0;
     font-size: 18px;
 }
 input{
     width: 328px;
     height: 52px;
     border-radius: 3px;
     border: 1px solid #D4D4D4;
    
     &::placeholder{
         font-style: italic;
     }
    }
button{
    background-color: #E8833A;
    color: #FFFFFF;
    border-radius: 3px;
    border: none;
    height: 42px;
    width: 226px;
    margin: 30px 0;
    font-size: 18px;
}
`