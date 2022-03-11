import Image from "next/image";
const myLoader = ({ src }) => {
  return `${src}`;
};
const DepartmentCard = ({ title, text, name, img }) => {
  return (
    <div className="text-white" style={{ Width: "230px" }}>
      <Image
        loader={myLoader}
        alt=""
        className="object-cover object-top"
        src={img}
        width={281}
        height={218}
      />
      <h3 className="text-lg, capitalize font-bold">{title}</h3>
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default DepartmentCard;
