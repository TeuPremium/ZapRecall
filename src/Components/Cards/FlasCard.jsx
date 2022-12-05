import { useState } from "react"
import styled from "styled-components"
import Questions from "../Questions"
import Botao from "./Botao"
import {IonIcon} from '@ionic/react'

let awa = [0,0,0,0,0,0,0,0,0]
let respostas=0

export default function FlashCard(prop){

  const [show, setShow] = useState("Pergunta " + prop.number)
  
    

  

 

  

    const iniciouTeste = () => {

        console.log(prop.type)
        if (show===prop.cardsQuestion){
            setShow(prop.cardsAnswer)
            
            
        }
        else if(awa[prop.number]==1){
        setShow(prop.cardsQuestion)
        
        }
        else{
            setShow(`Pergunta ${prop.number}`)
        }
    }
    
    if(!awa[prop.number] ){
        return(
        <Container >

                
                <div>{show} <img src="./assets/img/seta_play.png" onClick={() => {awa[prop.number]++; iniciouTeste()}} alt="" srcset="" /></div>
                

            

        </Container>


    )}
    else if (awa[prop.number]===2){return(
        <ContainerQuestion  >

                
                <div>
                <Question>  {show} </Question>
                <Opcoes>
                <Idk onClick={() => {awa[prop.number]++; iniciouTeste()}}>
                Nao lembrei
                </Idk>

                <MaisOuMenos onClick={() => {awa[prop.number]++; iniciouTeste()}}>
                Quase nao lembrei
                </MaisOuMenos >
                <Zap onClick={() => {awa[prop.number]++; iniciouTeste()}}>
                Zap!
                </Zap>
                </Opcoes>
                </div>
                
                

            

        </ContainerQuestion>


    )}
    else if (awa[prop.number]===1){return(
        <ContainerQuestion  >

                
                <Answer><div>{show} </div></Answer>
                <img src="./assets/img/seta_virar.png" alt="" srcset="" onClick={() => {awa[prop.number]++; iniciouTeste()}}/>

            

        </ContainerQuestion>


    )}
    else{
        
        return(
        <Container respostas={prop.setType(respostas)} >

                
                <div>{show} </div>
                

            

        </Container>


    )}
}

const Container = styled.div`
    
    
    display  :flex ;
    justify-content: space-between;
    align-items: center;
    div{
        cursor: default;
        width: 300px;
        display: flex;
        margin: 12px;
        margin-top: 25px;
        border-radius: 7px;
        background-color: white;
        height: 65px;
        padding-left: 15px;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 15px;
        box-sizing: border-box;
    }
    img{
        width: 20px;
        height: 20px;
        cursor: pointer;
        
    }
`
const ContainerQuestion = styled.div`
    
    
    display  :flex ;
    width: 300px;
    height: 131px;
    background-color: white;
    box-sizing: border-box;
    
        
       
        display: flex;
        margin: 12px;
        margin-top: 25px;
        border-radius: 7px;
        background-color: #ffffd4;
        
        padding-left: 15px;
        
        flex-direction: column;
        justify-content: space-around;
        cursor: default;

        img{
        width: 20px;
        height: 20px;
        position: relative;
        bottom: -12px;
        left: 250px;
        cursor: pointer;
    }
            
    
`



const Answer = styled.div`

position: relative;
    
    left:15px;
    width:255px;

    
`
const Question = styled.div`
    position: relative;
    top: -20px;
    left:15px;
    width:255px;
    word-wrap:break-word;
  
`

const Opcoes =styled.div`
    font-size: 12px;
    width: auto;
    color:white;
    font-size: 18px;
    width: 255px;
    height: 37px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    box-sizing: border-box;
    
    
    `

const MaisOuMenos =styled.div`
font-size: 12px;
    width: auto;
    color:white;
    background-color: orange;
    width: 85px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    
    box-sizing: border-box;
    
    margin-left:5px;
`
const Zap=styled.div`
font-size: 12px;
    width: auto;
    color:white;
    background-color:green;
    width: 85px;
    height: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    left:100px;
    box-sizing: border-box;
    
   margin-left: 5px;
`
const Idk=styled.div`
font-size: 12px;
    width: auto;
    color:white;
    background-color:#ff3030;
    width: 85px;
    height: 37px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    left:100px;
    
    
`