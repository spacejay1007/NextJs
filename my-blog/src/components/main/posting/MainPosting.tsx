"use client";

import axios from "axios";
import { Button } from "common/components/button/Button";
import { Input } from "common/components/input/Input";
import {
  FileUpload,
  uploadInitState,
} from "common/components/upload/FileUpload";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type T_FormType = {
  title: string;
  desc: string;
  category: string;
};

const MainPosting = (): JSX.Element => {
  // react hook
  // const [valueState, setValueState] = useState({
  //   title: "",
  //   desc: "",
  //   category: "",
  // });
  // const [error, setError] = useState<{
  //   [key: string]: string;
  // }>({
  //   title: "",
  //   desc: "",
  //   cate: "",
  // });
  const [upload, setUpload] = useState(uploadInitState);

  // react hook form
  const { register, setValue, handleSubmit, getValues, formState } =
    useForm<T_FormType>();

  // param
  // const postingParams = { ...valueState };
  const formData = new FormData();

  // func
  // const valueStateValid = () => {
  //   for (const key in valueState) {
  //     if (valueState[key as keyof typeof valueState] === "") {
  //       // setError({key, });
  //       return false;
  //     }
  //   }
  //   return true;
  // };
  const postHandler = async (data: T_FormType) => {
    // if (!valueStateValid()) return;
    if (!data) return;

    // if (valueState)
    //   // prettier-ignore
    //   await axios.post("/api/posts", JSON.stringify({...postingParams}),
    //     {
    //       headers: {"Content-Type": `application/json`},
    //     }
    //   )
    //   .then((res) => {
    //     setValueState({ title: "", desc: "", category: "" });
    //   });

    if (data)
      // prettier-ignore
      await axios.post("/api/posts", JSON.stringify({...data}),
        {
          headers: {"Content-Type": `application/json`},
        }
      )
      .then((res) => {
        setValue( "title", "")
      });
  };

  return (
    <form onSubmit={handleSubmit(postHandler)}>
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
          {/* <input {...(register("titles"), { required: true })} /> */}
          <Input
            {...register("title", { required: "타이틀을 입력해주세요." })}
            // value={formState.defaultValues.title}
            error={formState.errors.title?.message as string}
            styles={{ width: 400, border: "1px solid black" }}
            onChange={(e) => {
              setValue("title", e.target.value);
            }}
          />
        </div>

        {/* <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
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
        </div> */}

        <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
          <p style={{ width: 100 }}>Image Upload</p>

          <FileUpload text="파일을 올려주세요" />
        </div>

        <div style={{ marginTop: 20 }}>
          <Button
            // onClick={() => postHandler()}
            text="저장"
            // styles={{  }}
          ></Button>
        </div>
      </div>
    </form>
  );
};

export default MainPosting;
