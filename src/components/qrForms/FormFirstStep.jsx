import React, { useEffect, useRef, useState } from "react";
import styles from "./common.module.css";
import ReactLoading from "react-loading";

const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dvwdyqvzt/image/upload";

function FormFirstStep({ formData = {}, setFormData = () => { } }) {

  const [isLoading, setIsLoading] = useState(false);

  const dragZone = useRef(null);
  // function handleDragOver(e) {
  //   e.preventDefault();
  //   dragZone.current.classList.add(styles.dragOver);
  // }
  // function handleDragLeave(e) {
  //   e.preventDefault();
  //   dragZone.current.classList.remove(styles.dragOver);
  // }
  // function handleDrop(e) {
  //   e.preventDefault();
  //   dragZone.current.classList.remove(styles.dragOver);
  //   const file = e.dataTransfer.files;
  // }

  const handleImageUpload = async (e) => {
    setIsLoading(true);
    if (e.target.files) {
      // setImage(e.target.files[0]);
      const image = e.target.files[0];
      if (!image) return;
      const form = new FormData();
      form.append("file", image);
      form.append("upload_preset", "sjcclscl");

      const reader = new FileReader();

      reader.readAsDataURL(image);
      try {
        const response = await fetch(CLOUDINARY_UPLOAD_URL, {
          method: "POST",
          body: form,
        });

        if (!response.ok) {
          throw new Error("Failed to upload image");
        }

        const data = await response.text();
        const parsedData = JSON.parse(data);
        const cloudinaryImgUrl = parsedData.url;

        setFormData({
          ...formData,
          coverURL: cloudinaryImgUrl,
        });

      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle error or set an error state
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className={styles.form_Cont}>
        {isLoading && (
          <div className="fixed left-0 right-0 top-[100px] bottom-[0px] md:bottom-[0px] flex justify-center items-center backdrop-blur-sm bg-white/5 z-50">
            <ReactLoading type="spinningBubbles" color="#000" />
          </div>
        )}
        <div className={styles.elemen_Cont}>
          <label className={styles.title__Lable}>Project name</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter your project name here"
            value={formData.title}
            onChange={(e) => {
              setFormData({
                ...formData,
                title: e.target.value
              })
            }}
          />
        </div>
        <div className={styles.elemen_Cont}>
          <label className={styles.title__Lable}>Project description</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter your project description here"
            value={formData.description}
            onChange={(e) => {
              setFormData({
                ...formData,
                description: e.target.value
              })
            }}
          />
        </div>
        <label className={styles.title__Lable}>Project Cover Image</label>
        <div
          ref={dragZone}
          // onDragOver={handleDragOver}
          // onDragLeave={handleDragLeave}
          // onDrop={handleDrop}
          className={styles.drag_Cont}
        >
          {formData.coverURL && (
            <img
              src={formData.coverURL}
              alt="image"
              className={styles.cover_img}
            />
          )}
          <p className={styles.title__Lable}>Png, gif, WEBP. Max 10MB</p>
          <label htmlFor="file_Up" className={styles.special_Label}>
            Select Image
          </label>
          <input type="file" id="file_Up" style={{ display: "none" }} onChange={handleImageUpload} />
        </div>
      </div>
    </>
  );
}

export default FormFirstStep;
