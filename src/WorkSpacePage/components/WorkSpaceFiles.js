import React, { useState, useEffect, useRef } from "react";
import { getRecentFiles, getFilesByWorkspaceId } from "../filesActions";
import { ThemeContext } from "../../Utilities/themeContext";
import { Oval } from "react-loader-spinner";
import fileLightIcon from "../../assests/file_light_icon.svg";
import fileDarkIcon from "../../assests/file_dark_icon.svg";
import FileComponent from "./FileComponent";
import { Scrollbars } from "react-custom-scrollbars-2";
import WorkspaceOptionsModal from "./WorkspaceOptionsModal";

const WorkSpaceFiles = ({ workspace, userId }) => {
  const ref = useRef(null);
  const { theme } = React.useContext(ThemeContext);

  const [files, setFiles] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [updateFiles, setUpdateFiles] = useState(false);
  const [workspaceModal, setWorkspaceModal] = useState(false);
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
          let workspaceId = { workspaceId: workspace._id };
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
  }, [workspace._id, updateFiles]);

  useEffect(() => {
    let clickOutsidehandler = (event) => {
      if (!ref.current.contains(event.target)) {
        setWorkspaceModal(false);
      }
    };
    document.addEventListener("mousedown", clickOutsidehandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsidehandler);
    };
  }, []);

  return (
    <div className="workspaceFilesWrapper mt-10 md:mt-0 ">
      {spinner ? (
        <div className=" flex justify-center w-full p-3">
          <Oval color="#5063F0" height={40} width={40} />
        </div>
      ) : (
        <div className="workSpaceFilesContent w-full">
          <div className="filesLogo md:w-9/12  flex md:ml-5 md:justify-between justify-center">
            <div className=" flex justify-start ">
              <img
                src={theme === "dark" ? fileDarkIcon : fileLightIcon}
                alt="collabImg"
                width="25rem"
              ></img>
              <h3
                className="text-left md:wd-3/4  font-semibold tracking-wide 
              pl-2 pt-2 text-lg md:text-2xl text-light-call-sec dark:text-white"
              >
                {workspace === "default" || workspace === "recent"
                  ? "Recent Files"
                  : workspace.name}
              </h3>
            </div>

            <div
              className="workspaceOptions relative transition-text-color duration-200
               hover:text-light-text-small  
         px-2 flex justify-center  md:pt-3 pt-3.5 ml-2 "
              ref={ref}
            >
              {workspace === "recent" || workspace === "default" ? (
                ""
              ) : (
                <div
                  className="p-2 relative"
                  onClick={() => {
                    setWorkspaceModal((prev) => !prev);
                  }}
                >
                  <i className="fa-solid fa-ellipsis-vertical md:text-xl"></i>
                </div>
              )}

              {workspaceModal ? (
                <WorkspaceOptionsModal
                  workspace={workspace}
                  closeOptionsModal={() => {
                    setWorkspaceModal(false);
                  }}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="h-96">
            <div
              className="IndividualFilesWrapper md:w-4/5 overflow-y-auto h-full
             flex-col justify-center p-3 md:mr-2 rounded md:mt-5 "
            >
              <Scrollbars autoHide>
                {files.map((ele, index) => {
                  return (
                    <FileComponent
                      key={index}
                      fileName={ele.fileName}
                      fileExtension={ele.fileExtension}
                      fileId={ele._id}
                      updateFiles={() => {
                        setUpdateFiles((prev) => !prev);
                      }}
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
