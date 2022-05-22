import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import Footer from "./Footer";
export default function Sessions() {
    const { sessions } = useParams();
    const [times, setTimes] = useState([])
    const [allData, setAllData] = useState([])
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${sessions}/showtimes`);
        promise
            .then((value) => {
                setTimes(value.data.days)
                setAllData(value.data)
            })
            .catch((err) => console.log(err))
    }, [])
    console.log(allData.posterURL)
    return (
        <Container>
            Selecione o horário
            {times.map((days, ind) => (<Day key={ind}> {days.weekday} - {days.date}

                {/* {days.showtimes} */}
                <div>
                    {days.showtimes.map((hours, i) => <Button key={i}>{hours.name}</Button>)}
                </div>

            </Day>))}

            <Footer title={allData.title} picture={allData.posterURL}/>
        </Container>

    )
}

const Container = styled.div`
    margin: 100px 10px 134px;
    /* width: 100%; */

    font-size: 24px;
    color: #293845;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`
const Day = styled.div`
width: 100%;
margin: 30px 0 0 20px;
justify-content: start;
    
`
const Button = styled.button`
    background-color: #E8833A;
    color: #FFFFFF;

    width: 84px;
    height: 44px;
    border: none;
    border-radius: 3px;

    font-size: 18px;

    margin: 20px 8px 0 0;
`