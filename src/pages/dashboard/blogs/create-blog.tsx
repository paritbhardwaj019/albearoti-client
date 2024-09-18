import { useNavigate } from "react-router-dom";
import { Button, PageHeader } from "../../../components";
import { FormBuilder, Option } from "../../../components/form-builder";
import React, { useState } from "react";
import { KEYWORDS_OPTIONS } from "../../../constants";
import { useCreatePostMutation } from "../../../api/postApi";
import { toast } from "sonner";

const ALL_INPUTS = [
  {
    name: "title",
    label: "Enter post title",
    type: "text",
  },
  {
    name: "content",
    label: "Enter post content",
    type: "textarea",
  },
  {
    name: "keywords",
    label: "Select post keywords",
    type: "multiselect",
    options: KEYWORDS_OPTIONS,
  },
];

export default function CreateBlog() {
  const [allInputs, setAllInputs] = useState<{
    keywords: Option[];
    title: string;
    content: string;
  }>({
    keywords: [],
    title: "",
    content: "",
  });
  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleNavigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | Option[]
  ) => {
    if (Array.isArray(e)) {
      setAllInputs((prev) => ({ ...prev, keywords: e }));
    } else {
      const { name, value } = e.target;

      setAllInputs((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await createPost({
      title: allInputs.title,
      content: allInputs.content,
      keywords: allInputs.keywords,
    });

    console.log(res?.data);

    if (res?.data?.success) {
      toast.success("Post created successfully");
      handleNavigate("/dashboard/blogs");
      setAllInputs({
        title: "",
        content: "",
        keywords: [],
      });
    }
  };

  return (
    <div className="w-full">
      <Button
        variant="outline"
        className="max-w-max mb-4"
        onClick={() => handleNavigate(-1)}
      >
        Back
      </Button>

      <PageHeader
        title="Create a New Blog Post"
        description="Share your thoughts, experiences, and insights with the world"
      />

      <form onSubmit={handleSubmit}>
        <div className="mt-10 space-y-4">
          {ALL_INPUTS.map((el, index) => (
            <FormBuilder
              name={el.name}
              label={el.label}
              type={el.type}
              onChange={handleChange}
              options={el?.options}
              key={index}
              required
            />
          ))}
        </div>
        <div className="flex items-center justify-end mt-10">
          <Button className="max-w-max" type="submit" loading={isLoading}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
