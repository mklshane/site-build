import React, { useState } from 'react'
import OfficerCards from '../components/OfficerCards'
import profile from '../assets/ESTRELLANES.jpg'
import ramos from '../assets/EDITED_RAMOS.jpg'
import mendoza from '../assets/EDITED_MENDOZA.jpg'
import rocha from "../assets/EDITED_ROCHA.jpg"
import jopia from "../assets/EDITED_JOPIA.jpg";

type Officer = {
    name: string;
    position: string;
    img: string;
}

const officer: Officer[] = [
  {
    name: "Mikaela Shane Estrellanes",
    position: "ITEQS Manager",
    img: profile,
  },
  {
    name: "Georgina Ramos",
    position: "Auditor",
    img: ramos,
  },
  {
    name: "Maxine Mendoza",
    position: "Executive Secretary",
    img: mendoza,
  },
  {
    name: "Ernalene Rocha",
    position: "3rd Year Representative",
    img: rocha,
  },
  {
    name: "Luis Jopia",
    position: "Project Head for Internal Affairs",
    img: jopia,
  },
];



const Officers = () => {
    const [name, setName] = useState<string>("Shane")
    const [position, setPosition] = useState<string>("ITEQS Manager");
    
  return (
    <section id="officers" className='flex justify-center items-center mt-15'>
      <div className='w-[60%] min-h-dvh'>
        <h1 className="text-foreground text-5xl font-bold text-center">Officers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-7 my-15">
          
          {officer.map((officer) => (
            <OfficerCards img={officer.img} name ={officer.name} position={officer.position}/>
          ))
        }
            
        </div>
      </div>
    </section>
  );
}

export default Officers