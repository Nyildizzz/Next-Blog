"use client";
import React from "react";
import style from "./write.module.css";
import Image from "next/image";
import { useState,useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";


function Write() {
  const { status } = useSession();
  const router = useRouter();
  const storage = getStorage(app);


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [files, setFiles] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + files.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, files);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
         
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
        },
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL)
          });
        }
      );
    };

    files && upload();
  }, [files]);

  if (status === "loading") {
    return <div className={style.loading}>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");



      const handleSubmit = async () => {
        // HTML etiketlerini temizle
        const cleanDesc = new DOMParser().parseFromString(value, 'text/html').body.textContent;
      
        const res = await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc: cleanDesc, // Temizlenmiş açıklamayı kullan
            img: media,
            slug: slugify(title),
            catSlug: catSlug || "style"
          })
        });
      };
      

  return (
    <div className={style.container}>
      <input onChange={(e) =>setTitle(e.target.value)} type="text" placeholder="Title" className={style.input} />
      <select className={style.select} onChange={(e) => setCatSlug(e.target.value)}>
      <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={style.editor}>
        <button
          className={style.btn}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Image src="/plus.png" all="" width={20} height={20} />
        </button>
        {open && (
          <div className={style.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFiles(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={style.addBtn}>
              <label htmlFor="image">
                <Image src="/image.png" all="" width={20} height={20} />
              </label>
            </button>
            <button className={style.addBtn}>
              <Image src="/external.png" all="" width={20} height={20} />
            </button>
            <button className={style.addBtn}>
              <Image src="/video.png" all="" width={20} height={20} />
            </button>
          </div>
        )}
        <ReactQuill
          className={style.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button onClick={handleSubmit} className={style.publish}>Publish</button>
    </div>
  );
}

export default Write;
