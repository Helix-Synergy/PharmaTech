import React from "react";

const ImageGalleryCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* First row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://safdie-staging.imgix.net/b27da03b-d334-4049-ba75-e3679385cb13/01_B-F_MBS-HS_16_SandsSP_4x3.jpg?auto=format%2Ccompress&q=50&ixlib=imgixjs-3.5.1"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1662385834577-0c6628d57eab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VudG9zYSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyGTCp_wRWjgovnnyj3yCSPhFWTl4b6dBlA&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>

      {/* Second row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4d/a7/97/photo2jpg.jpg?w=900&h=500&s=1"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://images7.alphacoders.com/723/thumb-1920-723456.jpg"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFLtJQZ-UuAJ3JLKzV3cMxaLYVueXZ6A81w&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageGalleryCard;
// Marina Bay Sands
