const sharp = require("sharp");
const compress_images = require("compress-images");
const fs = require("fs");

let path = process.argv[2];
let width = Number(process.argv[3]);

function resize(inputPath, outputPath, width) {
  sharp(inputPath)
    .resize({ width: width })
    .toFile(outputPath, (error) => {
      if (error) console.log(error);
      else console.log("Imagem redimensionada com sucesso!");
      compress(outputPath, "./compressed/");
    });
}

function compress(pathInput, outputPath) {
  compress_images(
    pathInput,
    outputPath,
    {
      compress_forces: false,
      statistic: true,
      autoupdate: true,
    },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    function (error, completed, statistics) {
      console.log("---------------------");
      console.log(error);
      console.log(completed);
      console.log(statistics);
      console.log("---------------------");

      fs.unlink(pathInput, (error) => {
        if (error) console.log(error);
        else console.log(pathInput, "Apagado");
      });
    }
  );
}

resize(path, "./temp/output_resize.jpg", width);
