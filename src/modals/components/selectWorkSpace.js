import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllWorkSpace } from "../../WorkSpacePage/workSpaceActions";

const SelectWorkSpace = () => {
  const [workspaceList, setWorkSpaceList] = useState();
  const [selectWorkspace, setSelectWorkSpace] = useState("");
  const [loader, setLoader] = useState();
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
        console.log(response);
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

  return (
    <div className="absolute z-20 p-6 inset-1/4 mx-auto  w-96 h-fit shadow-lg rounded-md bg-white">
      <div className="workSpaceNavDropDown flex justify-center ">
        <select
          id="language_Select"
          className="align-middle p-0 m-0 outline-none  border-2 border-light-accent  text-light-call-sec text-sm md:text-lg rounded-lg focus:light-call-sec focus:border-light-call-sec focus:ring-light-call-sec block   dark:bg-dark-bg dark:border-dark-accent dark:placeholder-dark-call-sec dark:text-dark-call-sec dark:focus:ring-dark-accent dark:focus:border-dark-accent w-64 "
          onChange={(e) => {
            setSelectWorkSpace(e.target.value);
          }}
        >
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
      <div className="text-center  text-sm p-6">
        <div className="cursor-pointer">Create a new Work Space</div>
      </div>
    </div>
  );
};

export default SelectWorkSpace;
