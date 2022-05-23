import styled from "styled-components"
import { useState, useEffect } from "react"
export default function ButtonHandle({ name, id, avaiable, reserved, setReserved, reservedId, setReservedId }) {
    const [colorBtn, setColorBtn] = useState("#C3CFD9")
    const [isSelected, setIsSelected] = useState(false)
    useEffect(() => { isSelected ? setColorBtn("#8DD7CF") : setColorBtn("#C3CFD9") }, [isSelected])
    useEffect(() => {
        if (!avaiable) {
            setColorBtn("#FBE192")

        }
    }, [])

    function handleClick() {
        if (avaiable) {
            setIsSelected(!isSelected)

            if(isSelected){
                setReserved(reserved.filter(item => item !== name))
                setReservedId(reservedId.filter(item => item !== id)) 
            }
            else{
                setReserved([...reserved, name])
                setReservedId([...reservedId, id])
            }
        }

        else { alert("Poxa... Esse assento não está disponível!") }
    }

    return (
        <ButtonSeat onClick={handleClick} colorBtn={colorBtn}>
            {name}
        </ButtonSeat>
    )
}



//the button from the seat without the style
const ButtonSeat = styled.div`
width: 26px;
height: 26px;
border-radius: 50%;
font-size: 11px;

display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.colorBtn};
border: 1px solid #808F9D;

margin: 10px 3.5px;
`