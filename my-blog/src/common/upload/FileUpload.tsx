/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { Loading } from "../loading/Loading";

type T_UploadProps = {
  type?: string;
  text?: string;
  onChange?: (file: File | null) => void;
};

type T_Preview = {
  title: string;
  preview: string | ArrayBuffer;
};

export const FileUpload: React.FC<T_UploadProps> = ({
  type,
  text,
  onChange,
}): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // 처음에는 보낸 텍스트 이름 파일 올리면 File이름으로
  const [imgPreview, setImgPreview] = useState<T_Preview>({
    title: text ? text : "",
    preview: "",
  });

  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    const files = e.target.files ? e.target.files[0] : null;

    // ImagePreview
    const reader = new FileReader();
    reader.readAsDataURL(files as File);

    /** ImagePreview > Title과 Image를 보여준다 - 김재용 - */
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImgPreview({
          title: (files && files.name) || "",
          preview: reader.result || "",
        });
        setLoading(false);
        resolve();
      };
    });

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
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div>{imgPreview.title}</div>
            <img style={{ width: "100%" }} src={imgPreview.preview} />
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        style={{ display: "none" }}
        accept={type ? type : "image/*"}
        multiple
        onChange={onChangeHandler}
      />
    </div>
  );
};
