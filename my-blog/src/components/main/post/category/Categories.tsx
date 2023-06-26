import React from "react";

type Props = {
  categories: string[];
  post: string;
  setPost: (cate: string) => void;
};
export const Categories = ({
  categories,
  post,
  setPost,
}: Props): JSX.Element => {
  return (
    <div className="text-center p-4">
      <h2 className="text-lg font-bold border-b">Category</h2>

      {["All Posts", ...categories].map((cate: any, idx) => {
        return (
          <div
            key={cate}
            className={`cursor-pointer hover:text-sky-500 ${
              cate === post && "text-sky-600"
            }`}
          >
            <div
              onClick={() => {
                setPost(cate);
              }}
            >
              {cate}
            </div>
          </div>
        );
      })}
    </div>
  );
};
