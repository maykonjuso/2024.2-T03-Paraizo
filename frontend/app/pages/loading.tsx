'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingPage() {
    return (
        <div className="bg-white flex items-center justify-center min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center"
            >
                <Image
                    src={'/logo-1.svg'}
                    alt="logo Paraizo"
                    width={200}
                    height={200}
                />
            </motion.div>
        </div>
    );
}
