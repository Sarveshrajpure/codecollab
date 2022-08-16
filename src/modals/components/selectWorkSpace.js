import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SaveFileForm from "./saveFileForm";
import { getAllWorkSpace } from "../../WorkSpacePage/workSpaceActions";

const SelectWorkSpace = ({
  setOpenCreate,
  editorCode,
  langEx,
  setModalOpen,
}) => {
  const [workspaceList, setWorkSpaceList] = useState();
  const [fileOpen, setFileOpen] = useState(false);
  const [loader, setLoader] = useState();
  const [selectWorkspace, setSelectWorkSpace] = useState("default");
  const [workSpaceError, setWorkSpaceError] = useState();
  const user = useSelector((state) =>
    state.User.loginInfo.user.firstName ? state.User.loginInfo.user : ""
  );

  useEffect(() => {
    const getWorkSpaces = async () => {
      try {
        let sendData = {
          userId: user._id,
        };
        let response = await getAllWorkSpace(sendData);
        setWorkSpaceList(response);
        setLoader(false);
      } catch (err) {
        setLoader(false);
        if (err.response) {
          setWorkSpaceError(err.response.data.message);
        } else {
          setWorkSpaceError(err.message);
        }
      }
    };
    getWorkSpaces();
  }, [user._id]);

  console.log(selectWorkspace);

  return (
    <div className="">
      {!fileOpen ? (
        <div className="workSpaceNavDropDown flex justify-center ">
          <select
            id="language_Select"
            className="align-middle p-0 m-0 outline-none  border-2 border-light-accent  text-light-call-sec text-sm md:text-lg rounded-lg focus:light-call-sec focus:border-light-call-sec focus:ring-light-call-sec block   dark:bg-dark-bg dark:border-dark-accent dark:placeholder-dark-call-sec dark:text-dark-call-sec dark:focus:ring-dark-accent dark:focus:border-dark-accent w-64 "
            onChange={(e) => {
              setSelectWorkSpace(e.target.value);
              setFileOpen(true);
            }}
            defaultValue={selectWorkspace}
          >
            <option value="default" disabled hidden>
              Select a workSpace
            </option>

            {workspaceList && !loader
              ? workspaceList.map((ele, i) => {
                  return (
                    <option value={ele._id} key={i}>
                      {ele.name}
                    </option>
                  );
                })
              : "Loading..."}
          </select>
        </div>
      ) : (
        ""
      )}

      {fileOpen ? (
        <SaveFileForm
          workSpace={selectWorkspace}
          editorCode={editorCode}
          langEx={langEx}
          setModalOpen={(val) => {
            setModalOpen(val);
          }}
        />
      ) : (
        ""
      )}
      {!fileOpen ? (
        <div
          className="text-center  text-sm p-6 mt-1"
          onClick={() => {
            setOpenCreate(true);
          }}
        >
          <div className="cursor-pointer text-light-call-sec">
            Create a new Work Space
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default SelectWorkSpace;
