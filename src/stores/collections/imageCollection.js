export const loadImages = async () => {
  const imagePaths = new Array(5);
  imagePaths[0] = "./assets/svgs/svg0.svg";
  imagePaths[1] = "./assets/svgs/svg1.svg";
  imagePaths[2] = "./assets/svgs/svg2.svg";
  imagePaths[3] = "./assets/svgs/svg3.svg";
  imagePaths[4] = "./assets/svgs/svg4.svg";

  let images = new Array(5);

  for (let i = 0; i < 5; i++) {
    let image = new Image();
    image.src = imagePaths[i];
    image.alt = "";
    images[i] = image;
  }
};
