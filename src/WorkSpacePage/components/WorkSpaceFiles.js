import React, { useState, useEffect } from "react";
import { getRecentFiles, getFilesByWorkspaceId } from "../filesActions";

const WorkSpaceFiles = ({ workspace, userId }) => {
  const [files, setFiles] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    async function getFiles() {
      try {
        if (workspace === "default" || workspace === "recent") {
          let dataToBeSent = {
            userId: userId,
          };
          setSpinner(true);
          let response = await getRecentFiles(dataToBeSent);
          setFiles(response);
          setSpinner(false);
        } else {
          let workspaceId = { workspaceId: workspace };
          setSpinner(true);
          let response = await getFilesByWorkspaceId(workspaceId);
          setFiles(response);
          setSpinner(false);
        }
      } catch (error) {
        setSpinner(false);
      }
    }

    getFiles();
  }, [workspace]);
  return (
    <div className="workspaceFilesWrapper bg-gmail-yellow">
      files
      <div className="filesLogo"> </div>
    </div>
  );
};

export default WorkSpaceFiles;
