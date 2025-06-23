'use client'
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";



export function SkillIcon(
    {src, alt, iconClass, name}
    :
    {src:string, alt:string, iconClass:string, name:string}
){
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 }); // スプリングの調整
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 }); // スプリングの調整
    
    const rotateX = useTransform(
        mouseYSpring,
        [0.5, -0.5],
        ["5deg", "-5deg"]
    );
    
    const rotateY = useTransform(
        mouseXSpring, // 水平方向の動きを使用
        [0.5, -0.5],
        ["-5deg", "5deg"] // 符号を修正
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

    const iconVariants = {
        whileSkillIconHover: { scale: 1.2 },
        whileSkillIconTap: { scale: 0.95 }
    }

    const frameVariants = {
        whileSkillIconHover: { scale: 1.1 },
        whileSkillIconTap: { scale: 0.95 }
    }

    const frameOpacity = {
        whileSkillIconHover: { opacity: 0.1 },
        whileSkillIconTap: { opacity: 0.2 }
    }

    return (
        <motion.button
        className="h-25 2xl:h-40 w-40 2xl:w-64"
        whileHover = "whileSkillIconHover"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave} // マウスリーブ時の処理を追加
        style={{
            transformStyle: "preserve-3d",
            perspective: 600 // 遠近感を追加
        }}
        whileTap = "whileSkillIconTap"
        >
            <motion.div
            className="h-full flex flex-col items-center justify-center gap-1 outline rounded-xl hover:outline-white hover:outline-2"
            variants={frameVariants}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            >
                <motion.div
                style={{
                    background: "linear-gradient(45deg, #3a3c47 0%, #6b7077 100%)", opacity: 0
                }}
                className="h-full w-full absolute rounded-xl"
                variants={frameOpacity}
                />
                <motion.div
                variants={iconVariants}
                className={`${iconClass} relative`}
                style={{
                    transformStyle: "preserve-3d"
                }}
                >
                    <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="10vw"
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                    />
                </motion.div>
                <motion.p
                variants={iconVariants}
                style={{
                    transformStyle: "preserve-3d"
                }}                
                >{name}</motion.p>
            </motion.div>
        </motion.button>
    );
}