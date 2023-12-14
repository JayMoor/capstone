import React from 'react';

function FileUploadButton() {
  const handleFileChange = (event) => {
    // Handle file change logic here
    const selectedFile = event.target.files[0];
    console.log('Selected File:', selectedFile);
  };

  return (
    <div>
      <label htmlFor="fileInput">Choose File:</label>
      <input
        type="file"
        id="fileInput"
        name="filename"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileUploadButton;