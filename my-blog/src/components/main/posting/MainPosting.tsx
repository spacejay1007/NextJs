"use client";

import { Input } from "@/common/input/Input";
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
          styles={{ width: 400, border: "1px solid black" }}
          onChange={(e) => {
            console.log(e.target.value);
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
      <div>
        <button
          onClick={() => {
            postHandler();
          }}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default MainPosting;
