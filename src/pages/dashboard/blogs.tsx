import { useNavigate } from "react-router-dom";
import { Button, PageHeader } from "../../components";
import { Card } from "../../components/card";
import { useQueryPostsQuery } from "../../api/postApi";
import { CardType } from "../../types";

export default function Blogs() {
  const handleNavigate = useNavigate();
  const { data = {}, isLoading } = useQueryPostsQuery({});

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <PageHeader title="Blogs" description="View and manage all blogs" />
        <div className="flex items-center justify-end gap-2">
          <Button
            className="max-w-max"
            onClick={() => handleNavigate("/dashboard/blogs/create")}
          >
            Create
          </Button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                className="h-[272px] bg-gray-300 animate-pulse  w-full rounded-md"
                key={index}
              ></div>
            ))
          : data?.data?.map((el: CardType) => (
              <Card
                key={el._id}
                title={el.title}
                author={el.author.fullName}
                content={el.content}
                slug={el.slug}
                tags={el.keywords}
                createdAt={el.createdAt}
              />
            ))}
      </div>
    </div>
  );
}
