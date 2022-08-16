import React, { useState, useRef, useEffect } from "react";
import { getOneFile } from "../filesActions";
import { add_file_content } from "../../Actions/fileActions";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import FileOptionsModal from "./FileOptionsModal";
import RenameDeleteFile from "../../modals/components/RenameDeleteFile";

const FileComponent = ({ fileId, fileName, fileExtension, updateFiles }) => {
  const ref = useRef(null);

  const dispatch = useDispatch();

  const fileDetails = {
    name: fileName,
    documentId: fileId,
    fileExtension: fileExtension,
  };

  const [optionsModal, setOptionsModal] = useState(false);
  const [fileOperationsModal, setFileOperationsModal] = useState(false);
  const [fileOperation, setFileOperation] = useState(null);

  useEffect(() => {
    let clickOutsidehandler = (event) => {
      if (!ref.current.contains(event.target)) {
        setOptionsModal(false);
      }
    };
    document.addEventListener("mousedown", clickOutsidehandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsidehandler);
    };
  }, []);

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
    <div className="singleFileWrapper ">
      <div
        className="singleFile relative p-4 m-2 cursor-pointer shadow rounded
       text-light-call-sec dark:text-light-hover
       bg-light-accent dark:bg-dark-accent flex justify-between
        hover:bg-light-call-sec  hover:text-light-bg dark:hover:bg-dark-hover 
         transition-background-color ease-in duration-200"
        ref={ref}
      >
        <div
          className="singleFileName hover:underline font-medium"
          onClick={() => {
            openFileInEditor();
          }}
        >
          {fileName + "." + fileExtension}
        </div>
        <div
          className="singleFileOptions  transition-text-color duration-200 hover:text-light-text-small  
         px-2 flex justify-center pt-1 "
          onClick={() => {
            setOptionsModal((prev) => !prev);
          }}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
        {optionsModal ? (
          <FileOptionsModal
            closeOptionsModal={() => {
              setOptionsModal(false);
            }}
            setFileOperationModal={(val) => {
              setFileOperationsModal(val);
            }}
            setFileOpreation={(val) => {
              setFileOperation(val);
            }}
          />
        ) : (
          ""
        )}
      </div>
      {fileOperationsModal ? (
        <RenameDeleteFile
          closeModal={() => {
            setFileOperationsModal(false);
          }}
          fileOperation={fileOperation}
          fileDetails={fileDetails}
          updateFiles={() => {
            updateFiles();
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default FileComponent;
