'use client'

import patients from "@/app/mocks/patients"
import React, { useEffect, useState } from "react"
import { Box, Button, TextField } from "@mui/material"
import { useParams, useRouter } from "next/navigation"
import { PacientRepositories } from "../patients/api"

export default function PatientInfosEdit() {
    const router = useRouter()


    const [formData, setFormData] = useState<any | null>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (formData) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const patientRepositories = new PacientRepositories();
        // formData['id'] = formData['_id']['$oid']

        const data = await patientRepositories.createPacient(
            formData
        );

        router.push(`/pages/admin/patients`);
    }

    const handleCancel = () => {
        router.back() // Navega de volta à página anterior
    }

    return (
        <div className="flex justify-center items-start w-full bg-white rounded">
            <div className="min-h-96 px-4 w-full">
                <div className="lex justify-center items-center bg-white border rounded-md mb-4">
                    <h1 className="text-black my-2 w-full p-2 rounded-md flex justify-between text-xl">
                        Criar um novo paciente:
                    </h1>
                </div>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        margin: '0 auto'
                    }}>
                    <TextField
                        label="Nome"
                        name="name"
                        value={formData?.name || ''}  // Usar formData para armazenar o valor
                        onChange={handleChange}
                        fullWidth />

                    <TextField
                        label="CPF"
                        name="cpf"
                        value={formData?.cpf || ''}  // Usar formData para armazenar o valor
                        onChange={handleChange}
                        fullWidth />

                    <TextField
                        label="Data de Nascimento"
                        name="birthDate"
                        value={formData?.birthDate || ''}  // Usar formData para armazenar o valor
                        onChange={handleChange}
                        fullWidth />

                    <TextField
                        label="Telefone"
                        name="phone"
                        value={formData?.phone || ''}  // Usar formData para armazenar o valor
                        onChange={handleChange}
                        fullWidth />

                    <TextField
                        label="Email"
                        name="email"
                        value={formData?.email || ''}  // Usar formData para armazenar o valor
                        onChange={handleChange}
                        fullWidth />


                    <div className="flex w-full justify-start gap-4">
                        <button onClick={handleCancel} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Salvar
                        </button>
                        <button className="text-white min-w-fit bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Cancelar
                        </button>
                    </div>
                </Box>
            </div>
        </div>
    )
}
