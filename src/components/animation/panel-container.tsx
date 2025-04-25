'use client'
import { motion } from "motion/react";
import { ReactNode } from "react";



export function TransparentContainer(
    {children}
    :
    {children: ReactNode}
){

    const transparentFilter = {
        whileSkillIconHover: { opacity: 0 },
    }

    const frameVariants = {
        whileSkillIconHover: { scale: 1 },
        whileSkillIconTap: { scale: 0.9 }
    }

    const frameOpacity = {
        whileSkillIconHover: { opacity: 0.2 },
        whileSkillIconTap: { opacity: 0.2 }
    }

    return (
        <>
        <motion.button
        className="hidden sm:block  w-200"
        whileHover = "whileSkillIconHover"
        whileTap = "whileSkillIconTap"
        >
            <motion.div
            className="h-full flex flex-col items-center justify-center gap-1 rounded-xl p-10 hover:outline-2 hover:outline-white"
            variants={frameVariants}
            style={{
                scale: 0.7
            }}
            >
                <motion.div
                style={{
                    background: "linear-gradient(45deg, #3a3c47 0%, #6b7077 100%)", opacity: 0.1,
                }}
                className="h-full w-full absolute rounded-xl z-1"
                variants={frameOpacity}
                />
                <motion.div className="h-full w-full absolute rounded-xl z-3 flex items-center justify-center"
                style={{
                    background: "linear-gradient(45deg, #3a3c47 0%, #6b7077 100%)",
                    opacity: 0.75,
                }}
                variants={transparentFilter}
                >
                    <p className="text-5xl sm:text-9xl z-4 text-gray-900 font-bold">Hover</p>
                </motion.div>
                <motion.div
                style={{
                    scale: 1,
                    
                }}
                className="z-2"
                >
                    {children}
                </motion.div>
            </motion.div>
        </motion.button>
        </>
    );
}