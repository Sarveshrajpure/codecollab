import React, { useState } from "react";
import RenameDeleteFile from "../../modals/components/RenameDeleteFile";

const WorkspaceOptionsModal = ({
  closeOptionsModal,
  workspace,
  updateWorkspaces,
}) => {
  const [deleteModal, setDeleteModal] = useState("");
  return (
    <>
      <div
        className="workspaceOptionsModal z-20 p-2 absolute top-14 right-0  shadow rounded
   bg-light-bg dark:bg-dark-bg dark:shadow-dark-accent
text-light-call-sec dark:text-light-hover select-none"
      >
        <div
          className="px-4 py-2 text-sm rounded transition-background-color duration-200 font-medium
   hover:bg-light-call-sec hover:text-light-accent dark:hover:bg-dark-accent
    dark:hover:text-light-call-sec flex  text-left"
          onClick={() => {
            setDeleteModal(true);
          }}
        >
          <i class="fa-solid fa-trash-can text-lg mt-2   mr-3"></i>
          <div> Delete workspace</div>
        </div>
      </div>
      {deleteModal ? (
        <RenameDeleteFile
          fileOperation={"delete"}
          workspace={workspace}
          closeModal={() => {
            setDeleteModal(false);
          }}
          isDeleteWorkspace={true}
          updateWorkspaces={() => {
            updateWorkspaces();
          }}
          closeOptionsModal={() => {
            closeOptionsModal();
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default WorkspaceOptionsModal;
