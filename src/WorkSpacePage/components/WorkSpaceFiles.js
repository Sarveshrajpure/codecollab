import React, { useState, useEffect } from "react";
import { getRecentFiles, getFilesByWorkspaceId } from "../filesActions";
import { ThemeContext } from "../../Utilities/themeContext";
import { Oval } from "react-loader-spinner";
import fileLightIcon from "../../assests/file_light_icon.svg";
import fileDarkIcon from "../../assests/file_dark_icon.svg";
import FileComponent from "./FileComponent";
import { Scrollbars } from "react-custom-scrollbars-2";

const WorkSpaceFiles = ({ workspace, userId }) => {
  const { theme } = React.useContext(ThemeContext);

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
    <div className="workspaceFilesWrapper mt-10 md:mt-0 ">
      {spinner ? (
        <div className=" flex justify-center w-full p-3">
          <Oval color="#5063F0" height={40} width={40} />
        </div>
      ) : (
        <div className="workSpaceFilesContent">
          <div className="filesLogo flex justify-center md:justify-start ">
            <div className="mt-2">
              <img
                src={theme === "dark" ? fileDarkIcon : fileLightIcon}
                alt="collabImg"
                width="25rem"
              ></img>
            </div>
            <h3 className="text-left font-semibold tracking-wide pl-2 pt-2 text-lg md:text-2xl text-light-call-sec dark:text-white">
              {" "}
              {workspace === "default" || workspace === "recent"
                ? "Recent Files"
                : ""}
            </h3>
          </div>
          <div className="h-96">
            <div className="IndividualFilesWrapper md:w-4/5 overflow-y-auto h-full flex-col justify-center p-3 md:mr-2 rounded md:mt-5 ">
              <Scrollbars autoHide>
                {files.map((ele, index) => {
                  return (
                    <FileComponent
                      key={index}
                      fileName={ele.fileName}
                      fileExtension={ele.fileExtension}
                      fileId={ele._id}
                    />
                  );
                })}
              </Scrollbars>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSpaceFiles;
