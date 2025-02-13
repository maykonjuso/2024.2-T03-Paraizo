import { PacientRepositories } from "@/app/pages/admin/patients/api";
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface InterfacePatient {
    _id: { $oid: string };
    name: string;
    cpf: string;
    birthDate: string;
    email: string;
    phone: string;
}


interface InterfaceDeletePatientModal {
    title: string,
    msgAlert: string,
    patient: InterfacePatient | null,
}



export default function DeletePatientModal({ patient = null, title, msgAlert }: InterfaceDeletePatientModal) {
    const [open, setOpen] = useState(false)
    const router = useRouter();

    const handleOpen = () => {
        setOpen(prev => !prev)

    }
    
    const handleClose = () => {
        setOpen(prev => !prev)
    }
    const handleDelete = async () => {

        const patientRepositories = new PacientRepositories();
        const data = await patientRepositories.deletePacient(
            patient && patient._id ? String(patient._id.$oid) : ""
        );
        
        setOpen(prev => !prev)

        router.push(`/pages/admin/patients`);
    }

    return (
        <div className="my-4">
            <span className="flex w-full justify-start items-center gap-4">
                <button onClick={handleOpen} className="text-white min-w-fit bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Excluir paciente
                </button>
                <Alert sx={{ width: "min" }} severity="warning">{msgAlert}</Alert>
            </span>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-tittle"
                aria-describedby="alert-dialog-description">
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <Alert sx={{ width: "100%" }} severity="warning">{msgAlert}</Alert>
                    <div
                        className="flex flex-col justify-center items-center gap-2">
                        <h1 className="w-full text-start font-bold">Paciente:</h1>
                        <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Nome completo:</b> {patient?.name}</p>
                        <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>CPF:</b> {patient?.cpf}</p>
                        <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Data de nascimento:</b> {patient?.birthDate}</p>
                        <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Telefone:</b> {patient?.phone}</p>
                        <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>E-mail:</b> {patient?.email}</p>
                    </div>
                </DialogContent>

                <DialogActions>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#F44250",
                            color: "white",
                        }}
                        onClick={handleDelete}>
                        Confirmar exclusão
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancelar
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    )
}