import Image from "next/image";

const DepartmentCard = ({ title, text, img }) => {
  return (
    <div className="text-white">
      <Image src={img} width={281} height={218} />
      <h3 className="text-2xl">{title}</h3>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default DepartmentCard;
