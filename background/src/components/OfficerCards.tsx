import React from "react";

type OfficerCardsProps = {
  img: string;
  name: string;
  position: string;
};

const OfficerCards: React.FC<OfficerCardsProps> = ({ img, name, position }) => {
  return (
    <div
      className="flex flex-col gap-3 border rounded-lg border-green-500 max-w-[17rem] justify-center items-center py-5 px-10 
    transform transition duration-500 ease-in-out hover:scale-105"
    >
      <img src={img} alt={name} className="w-[100%] rounded-2xl" />
      <h2 className="text-foreground font-medium text-xl text-center">{name}</h2>
      <h3 className="text-primary font-bold text-lg text-center">{position}</h3>
    </div>
  );
};

export default OfficerCards;
