import React, { useState } from "react";
import SelectWorkSpace from "./components/selectWorkSpace";
import CreateWorkSpace from "./components/createWorkSpace";

const Modal = ({ editorCode, langEx, setModalOpen }) => {
  const [createOpen, setCreateOpen] = useState(false);
  const [createdWorkspace, setCreatedWorkSpace] = useState("");

  return (
    <div className="absolute z-20 pt-2 pb-6 px-4 left-4 top-60 md:inset-1/4 mx-auto  w-96 h-fit shadow-lg rounded-md bg-white">
      <div className="">
        <h3 className="tracking-wide pb-6 pl-0   text-base  text-light-call-sec font-semibold md:text-md dark:text-white ">
          Save Document
        </h3>
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
        />
      )}
    </div>
  );
};

export default Modal;
