import React from 'react';
import triangle from "../assets/bg-triangle.svg"
import paper from "../assets/icon-paper.svg"
import scissors from "../assets/icon-scissors.svg"
import rock from "../assets/icon-rock.svg"

interface IPlayProps {
    setShowResults : React.Dispatch<React.SetStateAction<boolean>>,
    setPlayerChoice: React.Dispatch<React.SetStateAction<string>>,
    setAiChoice : React.Dispatch<React.SetStateAction<string>>,
    setWinner: React.Dispatch<React.SetStateAction<string>>,
    setScore: React.Dispatch<React.SetStateAction<number>>,
   
}

const Play: React.FC<IPlayProps> = ({setShowResults, setPlayerChoice, setAiChoice, setWinner, setScore}) => {
    const choices = [paper, scissors, rock]

    const playGame = (id: number) => {
        const computer = Math.floor(Math.random() * 3);
        setPlayerChoice(choices[id]);
        setAiChoice(choices[computer])
        
        if(id===0 && computer===1){
            setWinner("Computer")
        }else if(id===0 && computer===2){
            setWinner("Player")
        }else if(id===1 && computer===0){
            setWinner("Player")
        }else if(id===1 && computer===2){
            setWinner("Computer")
        }else if(id===2 && computer === 0){
            setWinner("Computer")
        }else if(id=== 2 && computer=== 1){
            setWinner("Player")
    
        }else{
            setWinner("Tie")

        }
        
        setShowResults(true);
    }
            
               
            
    


    return (
        <div className='mt-8 relative'>
            <img src={triangle} alt='triangle'/>
            <div
                onClick={()=>playGame(0)}
                className='absolute -top-8 -left-8 border-8 border-blue-500 bg-white w-32 h-32 rounded-full flex items-center justify-center cursor-pointer'>
               <img src={paper} alt='paper icon'/>
            </div>
            <div
                onClick={()=>playGame(1)}
                className='absolute -top-8 -right-8 border-8 border-yellow-500 bg-white w-32 h-32 rounded-full flex items-center justify-center cursor-pointer'>
                <img src={scissors} alt='scissor icon'/>
            </div>
            <div 
               onClick={()=>playGame(2)} 
               className='absolute bottom-2 left-24 border-8 border-red-500 bg-white w-32 h-32 rounded-full flex items-center justify-center cursor-pointer'>
                <img src={rock} alt='rock icon'/>
            </div>
        </div>
    );
}



export default Play;