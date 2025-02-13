'use client'

import { useRouter } from "next/navigation"

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface patientInterface {
    key: string,
    id: number,
    name: string,
    email: string,
}

export default function CardPatient({ id, name, email }: patientInterface) {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/pages/admin/patient_infos_page/${id}`);
    }

    return (
        <div
            className="bg-zinc-50 rounded-md w-full flex justify-between items-center px-5 py-5 cursor-pointer hover:bg-zinc-100 border"
            onClick={handleCardClick}
        >
            <div className='flex flex-col'>
                <h1 className="text-md font-semibold text-zinc-900 text-start">{name}</h1>
                <p className='text-zinc-900 text-start text-sm'>{email}</p>
            </div>
            <div>
                <KeyboardArrowRightIcon
                    sx={{ color: "rgb(24 24 27 / var(--tw-text-opacity, 1))" }} />
            </div>
        </div>
    );
}
