'use client'
import { useEffect, useState } from "react"
import CardPatient from "@/app/components/cardPatient"
import SearchComponent from "./components/searchComponent"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { PacientRepositories } from "./api"
import { Users } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PatientsPage() {
    const [patients, setPatients] = useState([]);
    const [patientsList, setPatientsList] = useState([]);
    const [filterParams, setFilterParams] = useState('');
    const router = useRouter()

    useEffect(() => {
        async function fetchPatients() {
            const patientRepositories = new PacientRepositories();
            const data = await patientRepositories.getAllPacients();
            const result = data['result'] || [];
            setPatients(result);
            setPatientsList(result);
        }
        fetchPatients();
    }, []);

    useEffect(() => {
        setPatientsList(patients.filter((patient: any) =>
            patient.name?.toLowerCase().includes(filterParams.toLowerCase()) ||
            patient.email?.toLowerCase().includes(filterParams.toLowerCase())
        ));
    }, [filterParams, patients]);


    const handleCreate = () => {
        router.push(`/pages/admin/patient_infos_create`);
    }
    return (
        <div className="">
            <div className="flex flex-col justify-center items-start">

                <div className="flex items-center justify-center gap-2 mb-5">
                    <Users width={30} />
                    <h1 className="text-2xl text-paraizo-textBlack font-bold">Seus Pacientes</h1>
                </div>
                <p className="text-md text-paraizo-textBlack py-4 mb-5">
                    Esta é sua central de gestão dos pacientes! Aqui você pode visualizar, editar, cadastrar ou excluir dados relacionados às informações gerais de cada paciente, além de manipular seus registros de atendimento e tratamento. Abaixo está a lista com todos os pacientes da clínica.
                </p>
                <div className="h-[.1rem] bg-zinc-300 w-full rounded-full mb-5"></div>
            </div>
            <SearchComponent setFilterParams={setFilterParams} />
            <button onClick={handleCreate} className="mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Inserir Paciente
            </button>
            <div className="bg-white border py-4 mt-6 px-4 rounded-md">
                <div className="flex flex-col justify-center items-center gap-4">
                    {patientsList.length === 0 ? (
                        <div className="w-full flex justify-center items-center gap-4 mx-2">
                            <ErrorOutlineIcon />
                            <h1 className="w-full text-start text-md my-2">Nenhum resultado encontrado, tente novamente!</h1>
                        </div>
                    ) : (
                        patientsList.map((patient: any) => (
                            <CardPatient
                                key={`${patient.name}/${patient.email}`}
                                id={patient['_id']['$oid']}
                                name={patient.name}
                                email={patient.email}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
