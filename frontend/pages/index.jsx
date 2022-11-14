import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import $ from 'jquery';
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  // const [createObjectURL, setCreateObjectURL] = useState(null);

  function fileHandler(e) {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setFile(i);
      // setCreateObjectURL(URL.createObjectURL(i));
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/fileUpload", {
      method: "POST",
      body: formData,
    });
    const res = await response.json();
    res.success == true ? alert("File Uploaded Successfully") : alert("File Upload Failed");
    router.reload();
  }


  return (
    <>
      <Head>
        <title>Resume Parser | HomePage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container-fluid py-5">
          <div>
            <form className="col-5 mx-auto" onSubmit={submitHandler} method={"POST"} encType="multipart/form-data">
              <h6>Upload Resumes</h6>
              <input
                id="file"
                type="file"
                name="resume"
                multiple
                required
                className="d-block py-3"
                onChange={fileHandler}
              ></input>
              <button type="submit" className="btn btn-outline-success">
                Upload
              </button>
            </form>
          </div>
          <div className="text-center py-3">
            ------------------------------OR----------------------------
          </div>
          <div className="text-center">
            <Link href={"/resumeForm"}>
              <button type="button" className="btn btn-outline-primary">
                Enter Details Manually
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
