export const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="text-xs rounded-full px-3 py-1 bg-green-100 text-green-600">
      {tag}
    </div>
  );
};
