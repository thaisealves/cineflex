import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import AllMovies from "./AllMovies"
import Sessions from "./Sessions"
import Seats from "./Seats"
import Success from "./Success"
export default function App() {
    const [hour, setHour] = useState("")
    const [movie, setMovie] = useState("")
    const [title, setTitle] = useState("")
    const [reserved, setReserved] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [date, setDate] = useState("")
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<AllMovies />} />
                <Route path="/sessoes/:idFilme" element={<Sessions />} />
                <Route path="/assentos/:idSessao" element={<Seats hour={hour} setHour={setHour} movie={movie} setMovie={setMovie} setTitle={setTitle} name={name} setName={setName} cpf={cpf} setCpf={setCpf} reserved={reserved} setReserved={setReserved} setDate={setDate} />} />
                <Route path="/sucesso" element={<Success reserved={reserved} name={name} cpf={cpf} title={title} hour={hour} date={date} />} />
            </Routes>
        </BrowserRouter>
    )
}
