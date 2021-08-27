import { useState } from 'react'
import React from "react"
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
    const [disable, setDisable] = React.useState(true);
    const [hide, setHide] = React.useState(true);
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <textarea
                    laceholder='Entrez votre mail'
                    value={inputValue}  
                    onChange={(e) => checkValue(e.target.value)}
                    onBlur={(e) => checkValueAt(e.target.value)}
                />
                <div className='lmj-footer-elem-alert' style={{visibility: hide ? 'visible' : 'hidden' }} >"Mauvais format d'email"</div>
                <button onClick={() => alert(inputValue) } disabled={disable}>Alertez moi 🚨</button>
		</footer>
	)
    function checkValue(value) {
        if (!value.includes('@')) {
            setInputValue(value)
            console.log(value)
            setDisable(true)
            setHide(true)
        }else{
            setInputValue(value)
            setDisable(false)
            setHide(false)
        }
    }
    function checkValueAt(value) {
        if (!value.includes('@')) {
            console.log("Mauvais format d'email")
            
        }
    }
}

export default Footer