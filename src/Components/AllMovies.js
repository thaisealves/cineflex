import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
export default function AllMovies() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        /* getting a promise and putting all the array from the API on the images, only once */
        promise.then((value) => setImages(value.data));

    }, [])

    return (
        <Container>
            Selecione o Filme
            {/* putting a map to render every image in an individual way */}
            <Posters>
                {images.map((poster, ind) => <Link key={ind} to={`/sessoes/${poster.id}`}><img src={poster.posterURL} alt="Poster do filme" /></Link>)}
            </Posters>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin-top: 100px;

    font-size: 24px;
    color: #293845;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
`
const Posters = styled.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-around;
    img{
        width: 130px;

        margin: 10px 0;
        padding: 8px;
        border-radius: 3px;
        box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.5);
    }
`