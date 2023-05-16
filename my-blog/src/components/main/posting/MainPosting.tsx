"use client";

const MainPosting = (): JSX.Element => {
  return (
    <div>
      <div className="flex ">
        <p>id</p>
        <input style={{ width: 300, border: "1px solid black" }}></input>
      </div>
      <div className="flex ">
        <p>title</p>
        <input style={{ width: 300, border: "1px solid black" }}></input>
      </div>{" "}
      <div className="flex ">
        <p>설명</p>
        <input style={{ width: 300, border: "1px solid black" }}></input>
      </div>{" "}
      <div className="flex ">
        <p>category</p>
        <select style={{ width: 300, border: "1px solid black" }}></select>
      </div>
      <div>
        <button
          onClick={() => {
            console.log("저장");
          }}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default MainPosting;
