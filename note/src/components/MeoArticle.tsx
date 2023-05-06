"use client";

import { useEffect, useState } from "react";
import styles from "./MeoArticle.module.css";

export const MeoArticle = (): JSX.Element => {
  const [state, setState] = useState("Data Loading...");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setState(data.data[0]));
  }, []);

  return <article className={styles.article}>{state}</article>;
};
