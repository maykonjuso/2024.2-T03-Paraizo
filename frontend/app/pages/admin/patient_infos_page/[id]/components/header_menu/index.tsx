'use client'
import { Dispatch, SetStateAction } from "react";

import { Button } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface InterfaceHeaderMenu {
    name: string,
    tagButton: string,
    infosStatus: boolean,
    setInfosStatus: Dispatch<SetStateAction<boolean>>,
    handleClick: () => void,
}

export default function HeaderMenu({ name, tagButton, infosStatus, setInfosStatus, handleClick }: InterfaceHeaderMenu) {
    return (
        <div className="flex justify-between items-center bg-zinc-50 border px-6 py-3 rounded-md mb-4 ">
            <h1 className="text-black text-lg font-semibold w-full">{name}</h1>
            <button onClick={handleClick} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                
                {tagButton}
            </button>
            <Button
                onClick={() => setInfosStatus(prev => !prev)}
                sx={{ color: 'black' }}
                className="ml-2 p-2 rounded-full hover:bg-gray-200">
                {infosStatus ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </Button>
        </div>
    )
}
