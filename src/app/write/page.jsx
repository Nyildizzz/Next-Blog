"use client";
import React from "react";
import style from "./write.module.css";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

function Write() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={style.container}>
      <input type="text" placeholder="Title" className={style.input} />
      <div className={style.editor}>
        <button className={style.btn} onClick={() => {
            setOpen(!open);
        }}>
          <Image src="/plus.png" all="" width={20} height={20} />
        </button>
        {open && (
          <div className={style.add}>
            <button className={style.addBtn}>
              <Image src="/image.png" all="" width={20} height={20} />
            </button>
            <button className={style.addBtn}>
              <Image src="/external.png" all="" width={20} height={20} />
            </button>
            <button className={style.addBtn}>
              <Image src="/video.png" all="" width={20} height={20} />
            </button>
          </div>
        )}
        <ReactQuill className={style.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..."/>
      </div>
      <button className={style.publish}>
        Publish
      </button>
    </div>
  );
}

export default Write;
