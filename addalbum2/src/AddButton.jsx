import React from 'react';

function AddButton() {
  const handleAddClick = () => {
    // Handle add button click logic here
    console.log('Add button clicked');
  };

  return (
    <button type="button" onClick={handleAddClick}>
      ADD
    </button>
  );
}

export default AddButton;