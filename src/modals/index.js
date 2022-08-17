import React, { useState } from "react";
import SelectWorkSpace from "./components/selectWorkSpace";
import CreateWorkSpace from "./components/createWorkSpace";

const Modal = ({
  editorCode,
  langEx,
  setModalOpen,
  createOpenVal,
  updateWorkSpaces,
}) => {
  const [createOpen, setCreateOpen] = useState(createOpenVal);
  const [createdWorkspace, setCreatedWorkSpace] = useState("");

  return (
    <div
      className="absolute z-20 pt-2 pb-6 px-4 left-10 top-60 md:inset-1/4 mx-auto 
     w-80 md:w-96 h-fit shadow-lg rounded-md bg-white dark:bg-dark-accent "
    >
      <div className="flex justify-between pb-10">
        <div>
          <h3
            className=" pl-0 
         text-light-call-sec font-semibold md:text-lg
          dark:text-light-accent  "
          >
            {createOpenVal ? "Create New Workspace" : "Save Document"}
          </h3>
        </div>

        <div
          className="cursor-pointer  pl-0 
          text-light-call-sec font-semibold md:text-md
           dark:text-light-accent"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      {!createOpen ? (
        <SelectWorkSpace
          setOpenCreate={(val) => {
            setCreateOpen(val);
          }}
          editorCode={editorCode}
          langEx={langEx}
          setModalOpen={(val) => {
            setModalOpen(val);
          }}
        />
      ) : (
        <CreateWorkSpace
          setOpenCreate={(val) => {
            setCreateOpen(val);
          }}
          setCreatedWorkSpace={(val) => {
            setCreatedWorkSpace(val);
          }}
          createOpenVal={createOpenVal}
          setModalOpen={(val) => {
            setModalOpen(val);
          }}
          updateWorkSpaces={() => updateWorkSpaces()}
        />
      )}
    </div>
  );
};

export default Modal;
