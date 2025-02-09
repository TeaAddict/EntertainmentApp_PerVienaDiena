export default function formatImgSource(imageSource) {
  if (!imageSource.startsWith(".")) {
    return imageSource;
  }

  return imageSource.replace("./assets", ".");
}
