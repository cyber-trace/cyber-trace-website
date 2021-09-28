import Image from "next/image";

const ArticleCard = ({ img, title, text, author, time }) => {
  return (
    <div className="text-white flex gap-10">
      <Image width={263} height={172} src={img} />
      <div className="flex flex-col justify-between py-4">
        <div>
          <h3 className="text-2xl">{title}</h3>
          <p className="text-lg">{text}</p>
        </div>
        <div className="flex gap-16">
          <p>
            By <strong className="underline">{author}</strong>
          </p>
          <p>{time} min Read</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
