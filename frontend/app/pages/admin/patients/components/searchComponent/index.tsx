'use client'
import { Dispatch, SetStateAction, useState } from "react";

interface InterfaceSearchComponent {
    setFilterParams: Dispatch<SetStateAction<string>>
}

export default function SearchComponent({ setFilterParams }: InterfaceSearchComponent) {
    const [input, setInput] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        setFilterParams(e.target.value) // Faz a busca sempre que o texto mudar
    }

    return (
        <div className="">
            <h2 className="text-paraizo-textBlack text-md py-4">Procure pelo nome ou email de um paciente abaixo</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <input
                    type="text"
                    className="md:w-full p-2 text-md rounded-md border border-gray-300 bg-white"
                    placeholder="Buscar Paciente"
                    value={input}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}
