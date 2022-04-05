import { main } from "v9helper";

console.log(
  "amber",
  main({
    inputFilename: "./",
    exportName: "default",
    isTransformAllThemes: true,
  })
);
