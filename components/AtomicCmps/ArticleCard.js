import Image from "next/image";

const ArticleCard = ({ img, title, text, author, time }) => {
  return (
    <div className="text-white flex flex-col sm:flex-row items-center gap-6 mt-10">
      <Image
        className="object-cover flex-auto"
        width={263}
        height={172}
        src={img}
      />
      <div className="w-11/12 flex flex-col justify-between space-y-4 py-4">
        <h3 className="text-xl font-semibold font-nunito">{title}</h3>
        <p className="text-limit text-xs">{text}</p>
        <div className="flex gap-16">
          <p className="text-sm">
            By <strong className="underline text-accentColor">{author}</strong>
          </p>
          <p className="text-sm">{time} min Read</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
