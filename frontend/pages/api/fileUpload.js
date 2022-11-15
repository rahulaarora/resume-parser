import fs from "fs";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function saveFile(file) {
  let extension = file.originalFilename.split(".").pop();
  const path = `../uploads/${file.newFilename}.${extension}`;
  const data = await fs.promises.readFile(file.filepath);
  await fs.promises.writeFile(path, data);
}

export default function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: err.message , success: false });
      }
      await saveFile(files.file);
      res.status(201).json({ success: true });
    });
  } 
  else {
    res.status(405).json({ error: "Only POST requests allowed" });
  }
}
