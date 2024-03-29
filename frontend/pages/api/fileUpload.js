import fs from "fs";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

//using django api to extract data from file
async function extractData(fileName) {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    fileName: fileName,
  });

  let response = await fetch(`${process.env.DJANGO_URL}/resume/`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

//upload data to mongoDB
// async function saveData(user) {
//   const response = await fetch("http://localhost:3000/api/formUpload", {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: {
//           "Content-Type": "application/json",
//       },
//   });

//   const res = await response.json();
//   return res;  
// }

export default function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: err.message, success: false });
      }
      const file = files.file;

      const extension = await file.originalFilename.split(".").pop();
      if (extension === "pdf" || extension === "docx" || extension === "doc") {
        const fileName = `${file.newFilename}.${extension}`;

        //upload file server
        const path = `../uploads/${fileName}`;
        const data = await fs.promises.readFile(file.filepath);
        await fs.promises.writeFile(path, data);

        //extract data
        let extractedData = await extractData(fileName);

        //save data to database
        let userObj = {
          userName: extractedData["data"][0],
          email: extractedData["data"][1],
          mobileNumber: extractedData["data"][2],
          degree: extractedData["data"][3],
          skills: extractedData["data"][4],
          companyName: extractedData["data"][5],
          collegeName: extractedData["data"][6],
          designation: extractedData["data"][7],
          experience: extractedData["data"][8],
          linkedIn: "",
          fileName: fileName,
          role: "",
        };

        // let savedDataRes = await saveData(userObj);
        // res.status(201).json({ success: true, message: "File uploaded successfully!" });
        res.status(201).json({"userData" : userObj});
      } else {
        res.status(400).json({ success: false, error: "Invalid file type!" });
      }
    });
  } else {
    res.status(405).json({ error: "Only POST requests allowed" });
  }
}
