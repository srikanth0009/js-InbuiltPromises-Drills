
import { create } from "domain";
import fs from 'fs/promises';
import { createDirectory, createFiles, deleteFiles } from "../problem1.js";



createDirectory()
  .then(() => createFiles())
  .then(() => deleteFiles())
  .catch((err) => {
    console.error("Error in operation chain:", err);
  });


