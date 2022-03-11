import Image from "next/image";

const myLoader = ({ src }) => {
  return `${src}`;
};

const ArticleCard = ({ _id, img, title, text, author, time }) => {
  return (
    <div className="text-white max-w-sm  sm:max-w-full flex flex-col sm:flex-row items-center gap-6">
      <div className="w-full md:max-w-sm" style={{ maxWidth: "20rem" }}>
        <Image
          loader={myLoader}
          alt=""
          className="object-cover flex-auto"
          width={300}
          height={172}
          layout="responsive"
          src={img}
        />
      </div>
      <div className="w-11/12 flex flex-col justify-between space-y-4 py-4">
        <h3>
          <a
            href={`/articles/${_id}`}
            className="text-xl font-semibold font-nunito"
          >
            {title}
          </a>
        </h3>
        <p className="text-limit text-xs text-gray-400">{text}</p>
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
