import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'
const UploadResume = () => {

    const router = useRouter();
    const [file, setFile] = useState();
    // const [createObjectURL, setCreateObjectURL] = useState(null);
  
    function fileHandler(e) {
      if (e.target.files && e.target.files[0]) {
        const i = e.target.files[0];
        setFile(i);
        // setCreateObjectURL(URL.createObjectURL(i));
      }
    }
  
    async function submitHandler(e) {
      props.setIsLoading(true);
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/fileUpload", {
        method: "POST",
        body: formData,
      });
      const res = await response.json();
      props.setIsLoading(false);
  
      props.setData(res.userData);
      router.push("/resumeForm");
      // res.success == true ? alert(res.message) : alert(res.error);
      // router.reload();
      // e.target.reset();
  
    }

    return (
        <main>
        <div className="container-fluid py-5">
          <div>
            <form className="col-5 mx-auto" onSubmit={submitHandler} method={"POST"} encType="multipart/form-data" id="resumeForm">
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
    );
}

export default UploadResume;