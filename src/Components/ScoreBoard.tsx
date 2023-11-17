import React from 'react';

interface IScoreProp {
    score : number
}

const ScoreBoard:React.FC<IScoreProp> = ({score}) => {
    return (
        <div className="p-10 w-full">
                <div className="w-3/5 mx-auto border border-white rounded-lg p-4 flex justify-between items-center">
                    <div className="flex flex-col -gap-2 text-white font-bold text-lg">
                        <span>ROCK</span>
                        <span>PAPER</span>
                        <span>SCISSORS</span>
                    </div>
                    <div className="bg-white w-32 h-9/10 p-4 rounded-md flex flex-col items-center ">
                        <div className="text-blue-600">Score</div>
                        <h1 className="text-2xl font-bold text-slate-500">{score}</h1>
                    </div>
                </div>
         </div>
    );
}




export default ScoreBoard;