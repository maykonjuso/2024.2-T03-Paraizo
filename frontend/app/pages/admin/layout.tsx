'use client'

import { Home, Calendar, Users, Settings, LogOut } from "lucide-react";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function GerenciamentoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [selected, setSelected] = useState('home');

    const handleSelect = (page: string) => {
        setSelected(page);
    
        if (page === "logout") {
            router.push(`/`);
            return;
        }
    
        router.push(`/pages/admin/${page}`);
    };
    

    const router = useRouter();


    return (
        <div className="bg-white text-zinc-950 min-h-screen flex">
            {/* Menu lateral */}
            <div className="w-64 bg-gray-100 min-h-screen p-4 border-r border-gray-200">
                <nav className="flex flex-col gap-4">
                    <label className="cursor-pointer flex items-center gap-2 p-3 hover:bg-gray-200 rounded-md text-sm">
                        <input
                            type="radio"
                            name="menu"
                            value="visao-geral"
                            checked={selected === 'home'}
                            onChange={() => handleSelect('home')}
                            className="hidden"
                        />
                        <Home width={20} className={`${selected === 'home' ? 'text-paraizo-cyan' : ''}`} />
                        Visão Geral
                    </label>

                    {/* <label className="cursor-pointer flex items-center gap-2 p-3 hover:bg-gray-200 rounded-md text-sm">
                        <input
                            type="radio"
                            name="menu"
                            value="admin"
                            checked={selected === 'admin'}
                            onChange={() => handleSelect('admin')}
                            className="hidden"
                        />
                        <Settings width={20} className={`${selected === 'admin' ? 'text-paraizo-cyan' : ''}`} />
                        Área do Administrador
                    </label>

                    <label className="cursor-pointer flex items-center gap-2 p-3 hover:bg-gray-200 rounded-md text-sm">
                        <input
                            type="radio"
                            name="menu"
                            value="agendamentos"
                            checked={selected === 'agendamentos'}
                            onChange={() => handleSelect('agendamentos')}
                            className="hidden"
                        />
                        <Calendar width={20} className={`${selected === 'agendamentos' ? 'text-paraizo-cyan' : ''}`} />
                        Agendamentos
                    </label> */}

                    <label className="cursor-pointer flex items-center gap-2 p-3 hover:bg-gray-200 rounded-md text-sm">
                        <input
                            type="radio"
                            name="menu"
                            value="pacientes"
                            checked={selected === 'patients'}
                            onChange={() => handleSelect('patients')}
                            className="hidden"
                        />
                        <Users width={20} className={`${selected === 'patients' ? 'text-paraizo-cyan' : ''}`} />
                        Pacientes
                    </label>
                    <label className="cursor-pointer flex items-center gap-2 p-3 hover:bg-gray-200 rounded-md text-sm">
                        <input
                            type="radio"
                            name="menu"
                            value="logout"
                            checked={selected === 'logout'}
                            onChange={() => handleSelect('logout')}
                            className="hidden"
                        />
                        <LogOut width={20} className={`${selected === 'logout' ? 'text-paraizo-cyan' : ''}`} />
                        Sair
                    </label>
                </nav>
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 p-5">
                {children}
            </div>
        </div>
    )
}
