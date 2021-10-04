import Image from "next/image";

const DepartmentCard = ({ title, text, img }) => {
  return (
    <div className="text-white" style={{ Width: "230px" }}>
      <Image className="object-cover" src={img} width={281} height={218} />
      <h3 className="text-lg">{title}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default DepartmentCard;
