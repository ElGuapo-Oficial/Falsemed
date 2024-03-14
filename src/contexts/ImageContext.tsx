import React, { useContext } from "react";

interface ImageContextType {
  imageUrl: string;
  setImageUrl: (url: string) => void;
}

// Set the default context value (empty in this case)
const defaultState: ImageContextType = {
  imageUrl: '',
  setImageUrl: () => {},
};

const ImageContext = React.createContext<ImageContextType>(defaultState);

export const useImageContext = () => useContext(ImageContext);

export default ImageContext;