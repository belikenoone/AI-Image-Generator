import React from "react";

const PromptForm = ({
  generateImage,
  promptValue,
  setPromptValue,
  setNumberOfImages,
}) => {
  return (
    <form onSubmit={generateImage} className="flex gap-5 flex-col md:flex-row">
      <input
        type="text"
        placeholder="Enter Prompt"
        value={promptValue}
        onChange={(e) => setPromptValue(e.target.value)}
        className="input input-bordered "
      />
      <select
        onChange={(e) => setNumberOfImages(+e.target.value)}
        className="select select-bordered"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button className="btn btn-secondary">Generate</button>
    </form>
  );
};

export default PromptForm;
