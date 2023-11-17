import React from "react"

interface IResultsProps {
    setShowResults : React.Dispatch<React.SetStateAction<boolean>>,
    winner : string,
    playerChoice : string, 
    aiChoice : string
}

const Results:React.FC<IResultsProps> = ({setShowResults, winner, playerChoice, aiChoice}) => {

    const playAgain = () => {
        setShowResults(false)
    }

    return(
        <div className="flex items-center text-white gap-20 mt-16">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="uppercase">
                        you picked
                    </h1>
                    <div className="border-8 bg-white w-32 h-32 rounded-full flex items-center justify-center ">
                        <img src={playerChoice}/>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-bold">{winner==="Computer" && "YOU LOSE"}</h1>
                    <h1 className="text-2xl font-bold">{winner==="Player" && "YOU WON"}</h1>
                    <h1 className="text-2xl font-bold">{winner==="Tie" && "DRAW"}</h1>
                    <button
                        onClick={playAgain} 
                        className="bg-white text-blue-500 px-4 py-2 rounded-md">
                            Play Again
                    </button>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <h1 className="uppercase">the house picked</h1>
                    <div className="border-8 bg-white w-32 h-32 rounded-full flex items-center justify-center">
                        <img src={aiChoice} />
                    </div>
                </div>
            </div>
    )
};

export default Results;