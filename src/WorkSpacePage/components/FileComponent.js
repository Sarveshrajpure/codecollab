import React, { useState } from "react";
import { getOneFile } from "../filesActions";
import { add_file_content } from "../../Actions/fileActions";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";

const FileComponent = ({ fileId, fileName, fileExtension }) => {
  const dispatch = useDispatch();

  const openFileInEditor = async () => {
    try {
      let dataToBeSent = { documentId: fileId };

      let response = await getOneFile(dataToBeSent);
      dispatch(add_file_content(response[0]));

      let roomId = uuidV4();
      window.open(`/editor/${roomId}/true`, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="singleFileWrapper"
      onClick={() => {
        openFileInEditor();
      }}
    >
      <div className="singleFile p-4 m-2 cursor-pointer shadow rounded text-light-call-sec dark:text-light-hover bg-light-accent dark:bg-dark-accent flex justify-between hover:bg-light-call-sec  hover:text-light-bg dark:hover:bg-dark-hover  transition-background-color ease-in duration-200">
        <div className="singleFileName  ">{fileName + "." + fileExtension}</div>
        <div>
          <i className="fa-solid fa-file-pen "></i>
        </div>
      </div>
    </div>
  );
};

export default FileComponent;
