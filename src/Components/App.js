import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import AllMovies from "./AllMovies"
import Sessions from "./Sessions"
export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header/>
            <Routes>
            <Route path="/" element={<AllMovies/>}/>
            <Route path="/sessoes/:sessions" element={<Sessions/>}/>
            </Routes>
        </BrowserRouter>
    )
}