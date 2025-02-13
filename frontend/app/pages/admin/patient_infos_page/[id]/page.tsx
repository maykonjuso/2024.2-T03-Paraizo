'use client'
import { useEffect, useState } from "react"
import HeaderMenu from "./components/header_menu"
import DeletePatientModal from "./components/delete_patient_modal"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { PacientRepositories } from "../../patients/api";
import { Users } from "lucide-react";


export default function PatientInfo() {
    const router = useRouter();
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    const [infosStatus, setInfosStatus] = useState(true)
    const [docsStatus, setDocsStatus] = useState(true)
    const [patient, setPatient]: any = useState({})

    useEffect(() => {
        if (id) {
            async function fetchPatients() {
                const patientRepositories = new PacientRepositories();
                const data = await patientRepositories.getPacientById(String(id));

                setPatient(data['result'] || [])
            }
            fetchPatients();
        }
    }, [id]); // Vai rodar sempre que o id mudar

    const handleClickEdit = () => {
        router.push(`/pages/admin/patient_infos_edit/${id}`);
    }

    const navigateToDoc = (typeDoc: string) => {
        // navigate(`${typeDoc}`)
    }

    const handleClickAdd = () => {

    }

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="flex items-center justify-center gap-2 mb-5 self-start">
                <Users width={30} />
                <h1 className="text-2xl text-paraizo-textBlack font-bold">{patient?.name}</h1>
            </div>
            <HeaderMenu name="Dados Gerais" tagButton="Editar" infosStatus={infosStatus} setInfosStatus={setInfosStatus} handleClick={handleClickEdit} />

            {infosStatus && (
                <div className="my-4 flex flex-col gap-4 px-4 md:px-8">
                    <p className="p-4 text-sm bg-white rounded-lg border text-gray-700">
                        <b>Nome completo:</b> {patient?.name}
                    </p>
                    <p className="p-4 text-sm bg-white rounded-lg border text-gray-700">
                        <b>CPF:</b> {patient?.cpf}
                    </p>
                    <p className="p-4 text-sm bg-white rounded-lg border text-gray-700">
                        <b>Data de nascimento:</b> {patient?.birthDate}
                    </p>
                    <p className="p-4 text-sm bg-white rounded-lg border text-gray-700">
                        <b>Telefone:</b> {patient?.phone}
                    </p>
                    <p className="p-4 text-sm bg-white rounded-lg border text-gray-700">
                        <b>E-mail:</b> {patient?.email}
                    </p>
                </div>
            )}

            {/* <HeaderMenu name="Avaliações e tratamentos" setInfosStatus={setDocsStatus} tagButton="Cadastrar" infosStatus={docsStatus} handleClick={handleClickAdd} />

            {docsStatus && (
                <div className="px-4 md:px-8">
                    {patient?.doc_rpg && (
                        <button onClick={() => navigateToDoc('docs/doc_rpg')} className="bg-white hover:bg-gray-100 my-2 p-4 rounded-lg border flex justify-between items-center w-full">
                            <h1 className="text-gray-800 font-medium"><b>Ficha RPG</b> | {patient.doc_rpg.data}</h1>
                            <ArrowForwardIosIcon className="text-gray-600" />
                        </button>
                    )}
                    {patient?.doc_pilates && (
                        <button onClick={() => navigateToDoc('docs/doc_pilates')} className="bg-white hover:bg-gray-100 my-2 p-4 rounded-lg border flex justify-between items-center w-full">
                            <h1 className="text-gray-800 font-medium"><b>Ficha Pilates</b> | {patient.doc_pilates.queixasPrincipais}</h1>
                            <ArrowForwardIosIcon className="text-gray-600" />
                        </button>
                    )}
                    {patient?.doc_neuro && (
                        <button onClick={() => navigateToDoc('docs/doc_neuro')} className="bg-white hover:bg-gray-100 my-2 p-4 rounded-lg border flex justify-between items-center w-full">
                            <h1 className="text-gray-800 font-medium"><b>Ficha de Avaliação Neurológica</b> | {patient.doc_neuro.dataAvaliacao}</h1>
                            <ArrowForwardIosIcon className="text-gray-600" />
                        </button>
                    )}
                    {patient?.doc_dap && (
                        <button onClick={() => navigateToDoc('docs/doc_dap')} className="bg-white hover:bg-gray-100 my-2 p-4 rounded-lg border flex justify-between items-center w-full">
                            <h1 className="text-gray-800 font-medium"><b>Ficha de Avaliação DAP</b> | {patient.doc_dap.data}</h1>
                            <ArrowForwardIosIcon className="text-gray-600" />
                        </button>
                    )}
                </div>
            )} */}

            <DeletePatientModal
                patient={patient ? patient : null}
                title="Deseja excluir os dados deste paciente?"
                msgAlert="Atenção: Ao excluir um paciente, todos os dados serão apagados. Isso inclui seus dados pessoais, documentos e registros de atendimentos!" />
        </div>
    )
}
