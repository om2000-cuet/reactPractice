import { useState } from "react";

function ImageShow() {
  const [showImage, setShowImage] = useState(
    "https://allaboutbasic.wordpress.com/wp-content/uploads/2025/10/essence-of-vagbadh-geeta-1.jpg",
  );
  const changeImage = () => {
    setShowImage(
      "https://allaboutbasic.wordpress.com/wp-content/uploads/2024/04/wp-touch-pro.png",
    );
  };
  return (
    <div>
      <img src={showImage} />
      <button onClick={changeImage}>Click here </button>
    </div>
  );
}

export default ImageShow;
