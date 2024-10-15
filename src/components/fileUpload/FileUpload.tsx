import React, { useRef, useState } from "react";
import axios from "axios";
import styles from "./fileUpload.module.css";
import { Button } from "../buttons/Buttons";
import { FileText } from "lucide-react";

export function FileUpload() {
   const inputRef = useRef<HTMLInputElement | null>(null);
   const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const [progress, setProgress] = useState(0);
   const [uploadStatus, setUploadStatus] = useState("select");

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
         setSelectedFile(event.target.files[0]);
      }
   };

   const onChooseFile = () => {
      inputRef.current?.click();
   };

   const clearFileInput = () => {
      if (inputRef.current) {
         inputRef.current.value = "";
      }
      setSelectedFile(null);
      setProgress(0);
      setUploadStatus("select");
   };

   const handleUpload = async () => {
      if (uploadStatus === "done") {
         clearFileInput();
         return;
      }
      try {
         setUploadStatus("Uploading");
         const formData = new FormData();
         if (selectedFile) {
            formData.append("file", selectedFile);
         }

         await axios.post("http://localhost:5173/api/upload", formData, {
            onUploadProgress: (progressEvent: any) => {
               const percentCompleted = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
               );
               setProgress(percentCompleted);
            },
         });

         setUploadStatus("done");
      } catch (error) {
         setUploadStatus("select");
      }
   };

   return (
      <div className={styles.container}>
         <input
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
            className={styles.hiddenInput}
         />

         {!selectedFile ? (
            <Button
               color={"White"}
               fontSize={"1rem"}
               backgroundColor="var(--secondary-color)"
               onClick={onChooseFile}
            >
               <span>Upload file</span>
            </Button>
         ) : (
            <>
               <div className={styles.fileInfo}>
                  <div className={styles.fileDetails}>
                     <div className={styles.picCircle}>
                        <FileText size={"70%"} />
                     </div>
                     <p className={styles.fileName}>{selectedFile.name}</p>
                     <div className={styles.progressBg}>
                        <div
                           className={styles.progress}
                           style={{ width: `${progress}%` }}
                        />
                     </div>
                  </div>
                  {uploadStatus === "select" ? (
                     <Button
                        onClick={clearFileInput}
                        color={"var(--primary-color)"}
                        backgroundColor={"transparent"}
                        fontSize={"1rem"}
                     >
                        <span>Choose other file</span>
                     </Button>
                  ) : (
                     <div className={styles.checkCircle}>
                        {uploadStatus === "Uploading" ? (
                           <span>hourglass_empty</span>
                        ) : uploadStatus === "done" ? (
                           <span
                              className="material-symbols-outlined"
                              style={{ fontSize: "20px" }}
                           >
                              check
                           </span>
                        ) : null}
                     </div>
                  )}
               </div>

               <Button
                  onClick={handleUpload}
                  backgroundColor={"var(--secondary-color)"}
                  color={"white"}
                  fontSize={"1rem"}
               >
                  {uploadStatus === "select" || uploadStatus === "Uploading"
                     ? "Submit"
                     : "Done"}
               </Button>
            </>
         )}
      </div>
   );
}
