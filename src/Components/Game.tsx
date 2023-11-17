import React, {useState} from "react";
import RulesModal from "./RulesModal";
import Results from "./Results";
import ScoreBoard from "./ScoreBoard";
import Play from "./Play";


const Game = () => {
    const [show, setShow] = useState(false)
    const [playerChoice, setPlayerChoice] = useState('')
    const [aiChoice, setAiChoice] = useState('')
    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState<number>(0)
    const [winner, setWinner] = useState('')

    
    const showRules = () => {
        setShow(true)
    }

    return (
        <div className="bg-indigo-900 w-screen h-screen flex flex-col items-center p-8 relative">
            <RulesModal show={show} setShow={setShow}/>
            <ScoreBoard score={score}/>
            {
                showResults ? <Results 
                                    playerChoice={playerChoice}
                                    aiChoice={aiChoice}
                                    winner={winner}
                                    setShowResults={setShowResults}/> : 
                                <Play 
                                    setShowResults={setShowResults} 
                                    setPlayerChoice={setPlayerChoice} 
                                    setAiChoice={setAiChoice}
                                    setWinner={setWinner}
                                    setScore={setScore}
                                /> 
            }
            <span 
                className="absolute bottom-8 text-white font-semibold cursor-pointer right-8 capitalize border border-white rounded-md px-8 py-2" 
                onClick={showRules}
                >
                    Rules
            </span>
        </div>
    )
}

export default Game;