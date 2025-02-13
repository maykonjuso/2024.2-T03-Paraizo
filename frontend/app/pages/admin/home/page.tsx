export default function Home() {
    return (
        <div className="flex-grow px-5 md:px-10 2xl:px-96 flex flex-col h-full pt-20 justify-start">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl text-center">
                <h1 className="text-3xl font-bold text-gray-800">Espaço Janayna Paraizo</h1>
                <p className="text-gray-600 mt-2">Centro especializado em fisioterapia e bem-estar.</p>
                
                <div className="mt-4 text-left space-y-3">
                    <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-700">Horário de Funcionamento:</span>
                        <span className="text-gray-500">Seg - Sex, 08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-700">Pacientes Atendidos Hoje:</span>
                        <span className="text-gray-500">12</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-700">Próximo Atendimento:</span>
                        <span className="text-gray-500">15:30 - RPG</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Status Geral:</span>
                        <span className="text-green-500 font-semibold">Funcionando Normalmente</span>
                    </div>
                </div>
            </div>
        </div>
    );
}