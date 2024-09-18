import { useNavigate } from "react-router-dom";
import { Tag } from "./tag";
import { Option } from "./form-builder";

type Props = {
  title: string;
  content: string;
  tags: Option[];
  author: string;
  slug: string;
  createdAt: Date;
};

export const Card = ({
  title,
  content,
  tags,
  author,
  slug,
  createdAt,
}: Props) => {
  const handleNavigate = useNavigate();

  const handleClick = () => handleNavigate("/posts/" + slug);

  return (
    <div
      className="bg-white shadow-md shadow-black/10 rounded-md text-black hover:scale-105 transition-all duration-200 cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <div className="w-full p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm font-light">{content.slice(0, 120)}...</p>
        <div className="flex items-center gap-2 flex-wrap mt-4">
          {tags.map((el, index) => (
            <Tag key={index} tag={el.value.toString()} />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs mt-4">
            By <span className="underline ">{author}</span>
          </p>

          <p className="text-xs mt-4">
            {new Date(createdAt)?.toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
