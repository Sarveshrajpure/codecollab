import React, { useState } from "react";

const FileOptionsModal = ({
  closeOptionsModal,
  setFileOperationModal,
  setFileOpreation,
  
}) => {
  return (
    <>
      <div
        className="OptionsModal z-20 p-2 absolute top-10 right-5 shadow rounded
   bg-light-bg dark:bg-dark-bg dark:shadow-dark-accent
text-light-call-sec dark:text-light-hover select-none"
      >
        <div
          className="px-4 py-2 rounded transition-background-color duration-200 font-medium
   hover:bg-light-call-sec hover:text-light-accent
    dark:hover:bg-dark-accent dark:hover:text-light-call-sec flex  text-left"
          onClick={() => {
            setFileOperationModal(true);
            setFileOpreation("rename");
            closeOptionsModal(false);
          }}
        >
          <i className="fa-solid fa-file-pen text-sm mt-0.5 mr-1"></i>
          <div>rename</div>
        </div>
        <div
          className="px-4 py-2 rounded transition-background-color duration-200 font-medium
   hover:bg-light-call-sec hover:text-light-accent dark:hover:bg-dark-accent
    dark:hover:text-light-call-sec flex  text-left"
          onClick={() => {
            setFileOperationModal(true);
            setFileOpreation("delete");
            closeOptionsModal(false);
          }}
        >
          <i class="fa-solid fa-trash-can text-md mt-1 mr-2"></i>
          <div> delete</div>
        </div>
      </div>
    </>
  );
};

export default FileOptionsModal;
