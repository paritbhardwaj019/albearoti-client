interface Props {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-0.5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-500 text-sm font-light">{description}</p>
    </div>
  );
};
