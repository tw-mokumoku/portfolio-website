'use client'

import { useMeasure, useWindowSize } from "react-use";
import { motion } from "motion/react";
import Link from "next/link";

export function SecretConversion(){
    const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure<HTMLDivElement>();
    
    const handleClick = () => {
        console.log(x, y, width, height, top, right, bottom, left);
    }

    return (
        <>
            <Link href="/chill">
                <motion.span ref={ref}
                    onClick={handleClick}
                    whileHover={{ color: 'rgb(223, 235, 222)' }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 1000, ease: 'easeInOut' }}
                    className="text-gray-800 cursor-pointer bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600"
                    >
                    -
                </motion.span>
            </Link>
        </>
    )
}