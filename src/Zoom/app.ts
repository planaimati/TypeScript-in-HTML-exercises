const imgUrl =
  "https://cdn.pixabay.com/photo/2016/06/20/21/46/sport-shoes-1470061_960_720.jpg";

const imageContainer: HTMLElement = document.querySelector(
  ".imageContainer"
) as HTMLDivElement;
const container = document.querySelector(".container");

const handleMouseOver = () => {
  const newImageContainer = document.createElement("div");
  const newImage = document.createElement("img");
  newImage.src = imgUrl;
  newImage.classList.add("newImage");
  newImageContainer.classList.add("zoomImageContainer");
  newImageContainer.appendChild(newImage);
  imageContainer?.appendChild(newImageContainer);
};

const handleMouseOut = () => {
  const child = document.querySelector(".zoomImageContainer");
  child?.remove();
};

const handleMouseMove = (event: MouseEvent) => {
  const newImage: HTMLElement = document.querySelector(
    ".newImage"
  ) as HTMLImageElement;

  const XYZ = imageContainer?.getBoundingClientRect() as DOMRect;

  if (
    event.clientX - XYZ.left > imageContainer.offsetWidth - 100 &&
    event.clientX - XYZ.top > imageContainer.offsetHeight - 100
  ) {
    return;
  } else {
    newImage.style.left = `-${event.clientX - XYZ.left}px`;
    newImage.style.top = `-${event.clientY - XYZ.top}px`;
  }

  //console.log(XYZ.left);
};

imageContainer?.addEventListener("mouseover", handleMouseOver);
imageContainer?.addEventListener("mouseout", handleMouseOut);
imageContainer?.addEventListener("mousemove", (event) =>
  handleMouseMove(event)
);
