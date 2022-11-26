import fs from "fs";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

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
        const path = `../uploads/${file.newFilename}.${extension}`;
        const data = await fs.promises.readFile(file.filepath);
        await fs.promises.writeFile(path, data);
        res.status(201).json({ success: true, message: "File uploaded" });
      }else{
        res.status(400).json({ success: false, error: "Invalid file type" });
      }

    });
  } else {
    res.status(405).json({ error: "Only POST requests allowed" });
  }
}
