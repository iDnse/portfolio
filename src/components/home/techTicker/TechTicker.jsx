import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaSass, FaReact, FaFigma } from "react-icons/fa";
import styles from "./TechTicker.module.scss"; // Importamos los estilos como módulo

const TechTicker = () => {
  const technologies = [
    { id: 1, icon: <FaHtml5 size={48} color="#E34F26" />, name: "HTML5" },
    { id: 2, icon: <FaCss3Alt size={48} color="#1572B6" />, name: "CSS3" },
    { id: 3, icon: <FaJs size={48} color="#F7DF1E" />, name: "JavaScript" },
    { id: 4, icon: <FaBootstrap size={48} color="#7952B3" />, name: "Bootstrap" },
    { id: 5, icon: <FaSass size={48} color="#CC6699" />, name: "Sass" },
    { id: 6, icon: <FaReact size={48} color="#61DAFB" />, name: "React.js" },
    { id: 7, icon: <FaFigma size={48} color="#F24E1E" />, name: "Figma" },
  ];

  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className={styles.container}>
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerContainer}>
          {duplicatedTechs.map((tech, index) => (
            <div key={`${tech.id}-${index}`} className={styles.techItem}>
              {tech.icon}
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTicker;