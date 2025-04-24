'use client'
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ReactNode } from "react";



export function TransparentContainer(
    {children}
    :
    {children: ReactNode}
){
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 }); // スプリングの調整
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 }); // スプリングの調整
    
    const rotateX = useTransform(
        mouseYSpring,
        [0.5, -0.5],
        ["0.5deg", "-0.5deg"]
    );
    
    const rotateY = useTransform(
        mouseXSpring, // 水平方向の動きを使用
        [0.5, -0.5],
        ["-0.5deg", "0.5deg"] // 符号を修正
    );
    
    
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) =>{
        const rect = e.currentTarget.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

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
        <motion.button
        className="w-200"
        whileHover = "whileSkillIconHover"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave} // マウスリーブ時の処理を追加
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
                    <p className="text-9xl z-4 text-gray-900 font-bold">Hover</p>
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
    );
}