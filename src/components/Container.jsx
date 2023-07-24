import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Alert from "./Alert";
import Loader from "./Loader";
import PromptForm from "./PromptForm";
import ImageContainer from "./ImageContainer";
const Container = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const configuration = new Configuration({
    apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const [promptValue, setPromptValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [numberOfImages, setNumberOfImages] = useState(1);
  const [imagesArray, setImagesArray] = useState([]);
  const [showError, setShowError] = useState(null);
  const generateImage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setImagesArray([]);
    setShowError(null);
    try {
      const response = await openai.createImage({
        prompt: promptValue,
        n: numberOfImages,
        size: "256x256",
      });
      setImagesArray(response.data.data);
      setLoading(false);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
      setLoading(false);
      setShowError("Some Error Occured Please Try Again!");
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };
  return (
    <div className="w-[90%] mx-auto my-4 flex flex-col justify-center">
      {loading && <Loader />}
      <PromptForm
        generateImage={generateImage}
        promptValue={promptValue}
        setNumberOfImages={setNumberOfImages}
        setPromptValue={setPromptValue}
      />
      <ImageContainer imagesArray={imagesArray} />
      {showError && <Alert errorMessage={showError} />}
    </div>
  );
};

export default Container;
