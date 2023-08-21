import React, { useState, useCallback, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";

const assets_url = process.env.BACKEND_URL;

export default function Index(props) {
  const { show, images, url, setShow } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [imageToShow, setImageToShow] = useState([]);
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    const cpImageToShow = [...imageToShow];
    images?.forEach((img) => {
      cpImageToShow.push(`${assets_url}/vehicles/${img}`);
    });
    setImageToShow(cpImageToShow);
    setImageReady(true);
  }, [images]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setShow(false);
  };

  return (
    <div>
      {show && imageReady && (
        <ImageViewer
          src={imageToShow}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}
