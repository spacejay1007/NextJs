import React, { useRef, useState } from "react";

type T_UploadProps = {
  text?: string;
  onChange?: (file: File | null) => void;
};

export const FileUpload: React.FC<T_UploadProps> = ({
  text,
  onChange,
}): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  // 처음에는 보낸 텍스트 이름 파일 올리면 File이름으로
  const [fileName, setFileName] = useState<JSX.Element | string>(
    text ? text : ""
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? e.target.files[0] : null;
    console.log(files?.name);
    // 파일명을 text에서 받아온다
    if (files && files.name) setFileName(files.name);
    // console.log(e.target.files);
  };
  return (
    <div
      className="upload__box"
      style={{ width: "400px" }}
      onClick={(e) => {
        e.stopPropagation();
        inputRef.current?.click();
      }}
    >
      <div
        style={{
          backgroundColor: "#5b975b",
          color: "#fff",
          padding: "10px",
          width: "100%",
          borderRadius: 6,
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {fileName ? fileName : ""}
      </div>

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
