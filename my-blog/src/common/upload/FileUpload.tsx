import React, { useRef } from "react";

type T_UploadProps = {
  text?: string;
  onChange?: (file: File | null) => void;
};

export const FileUpload: React.FC<T_UploadProps> = ({
  text,
  onChange,
}): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? e.target.files[0] : null;
    console.log(files);
    // console.log(e.target.files);
  };
  return (
    <div
      className="upload__box"
      onClick={(e) => {
        e.stopPropagation();
        inputRef.current?.click();
      }}
    >
      <label
        style={{
          marginTop: 30,
          backgroundColor: "#5b975b",
          color: "#fff",
          textAlign: "center",
          padding: "10px 0",
          width: "65%",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        {text ? text : ""}
      </label>

      <input
        ref={inputRef}
        type="file"
        style={{ display: "none" }}
        multiple
        onChange={onChangeHandler}
      />
    </div>
  );
};
