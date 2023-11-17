import React from 'react';
import closeIcon from "../assets/icon-close.svg"
import rulesImage from "../assets/image-rules.svg"

interface IModalProps{
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const RulesModal:React.FC<IModalProps> = ({show, setShow}) => {
    if (!show) return null;

    const closeModal = () => {
        setShow(false)
    }

    return (
        <div className='w-screen h-screen bg-black bg-opacity-60 flex items-center justify-center z-20 fixed top-0'>
            <div className='relative flex flex-col gap-4 bg-white border border-white shadow-lg p-8 rounded-md'>
                <div className='flex w-full items-center justify-between '>
                    <span>RULES</span>
                    <img 
                        src={closeIcon} 
                        alt='close icon' 
                        className='cursor-pointer' 
                        onClick={closeModal}
                    />  
                </div>
                <img src={rulesImage} alt='rules modal'/>
            </div>
        </div>
    );
}




export default RulesModal;