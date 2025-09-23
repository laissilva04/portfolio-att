"use client"

import { motion } from "framer-motion"
import { 
  FaReact, 
  FaGitAlt, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaJava 
} from "react-icons/fa"
import { 
  SiTailwindcss, 
  SiRobotframework 
} from "react-icons/si"

export default function Carrossel() {
  const icons = [
    <FaReact size={100} className="text-blue-500" />,
    <FaGitAlt size={100} className="text-orange-500" />,
    <FaNodeJs size={100} className="text-green-500" />,
    <FaHtml5 size={100} className="text-orange-600" />,
    <FaCss3Alt size={100} className="text-blue-600" />,
    <SiTailwindcss size={100} className="text-cyan-500" />,
    <FaJs size={100} className="text-yellow-500" />,
    <FaJava size={100} className="text-red-600" />,
  
    <SiRobotframework size={100} className="text-gray-700" />
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 30 }}
      >
        {[...Array(20)].map((_, index) => (
          <div key={index} className="flex items-center mx-8">
            {icons[index % icons.length]}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

