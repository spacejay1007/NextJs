"use client";

import { Button } from "@/common/button/Button";
import { Input } from "@/common/input/Input";
import { FileUpload } from "@/common/upload/FileUpload";
import axios from "axios";
import { useEffect, useState } from "react";

const MainPosting = (): JSX.Element => {
  const [valueState, setValueState] = useState({
    title: "",
    desc: "",
    category: "",
  });
  const postHandler = async () => {
    await axios
      .post(
        "/api/posts",
        JSON.stringify({
          ...valueState,
        }),
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setValueState({ title: "", desc: "", category: "" });
      });
  };

  return (
    <div
      style={{
        width: "100%",
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <p style={{ width: 100 }}>title</p>

        <Input
          value={valueState.title}
          styles={{ width: 400, border: "1px solid black" }}
          onChange={(e) => {
            setValueState({
              title: e.target.value,
              desc: valueState.desc,
              category: valueState.category,
            });
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <p style={{ width: 100 }}>설명</p>

        <Input
          value={valueState.desc}
          type="text"
          styles={{ width: 400, border: "1px solid black" }}
          onChange={(e) => {
            setValueState({
              title: valueState.title,
              desc: e.target.value,
              category: valueState.category,
            });
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <p style={{ width: 100 }}>category</p>

        <Input
          value={valueState.category}
          styles={{ width: 400, border: "1px solid black" }}
          onChange={(e) => {
            setValueState({
              title: valueState.title,
              desc: valueState.desc,
              category: e.target.value,
            });
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <p style={{ width: 100 }}>Image Upload</p>

        <FileUpload text="파일을 올려주세요" />
      </div>

      <div>
        <Button
          onClick={() => postHandler()}
          text="저장"
          styles={{ marginTop: 20 }}
        ></Button>
      </div>
    </div>
  );
};

export default MainPosting;
