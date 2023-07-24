import React from "react";
import { LuDownload } from "react-icons/lu";
const ImageContainer = ({ imagesArray }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center  mt-7">
      {imagesArray.map((image, index) => {
        const downloadFileName = `image_${index + 1}.jpg`;
        return (
          <div
            className="rounded-md overflow-hidden relative group"
            key={index}
          >
            <div className="h-full w-full bg-pink-500 bg-opacity-40 absolute -top-full left-0 transition-all group-hover:top-0">
              <a
                href={image.url}
                className="btn btn-circle absolute bottom-2 right-2"
                download={downloadFileName}
                target="_blank"
              >
                <LuDownload />
              </a>
            </div>
            <img
              src={image.url}
              alt="Just an image"
              key={index}
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageContainer;
