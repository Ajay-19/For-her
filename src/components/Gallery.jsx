import { useState } from "react";
import { FaUpload } from "react-icons/fa";  // Importing the upload icon from react-icons

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image8.jpg",
    "/images/image6.JPEG",
    "/images/image7.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file); // Convert the image to a base64 string
    }
  };

  return (
    <div className="relative p-6">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-md"
        style={{
          backgroundImage: 'url("/images/image1.jpg")', // Replace with the desired background image
          zIndex: -1,
        }}
      ></div>

      {/* Gallery Content */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-center text-pink-500">Our Memories</h2>
        {/* Upload Icon */}
        <label htmlFor="file-upload" className="cursor-pointer">
          <FaUpload size={24} className="text-pink-500 hover:text-pink-600" />
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative group"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity"></div>

            {/* Gallery Image */}
            <img
              src={img}
              alt="Love Memory"
              className="w-full h-100 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
