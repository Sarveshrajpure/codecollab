import React, { useState } from "react";
import SelectWorkSpace from "./components/selectWorkSpace";
import CreateWorkSpace from "./components/createWorkSpace";

const Modal = () => {
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div className="absolute z-20 p-6 inset-1/4 mx-auto  w-96 h-fit shadow-lg rounded-md bg-white">
      {!createOpen ? (
        <SelectWorkSpace
          setOpenCreate={(val) => {
            setCreateOpen(val);
          }}
        />
      ) : (
        <CreateWorkSpace
          setOpenCreate={(val) => {
            setCreateOpen(val);
          }}
        />
      )}
    </div>
  );
};

export default Modal;
