import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { createWorkSpaceSchema } from "../../validations/createWorkSpaceValidation";
import { saveFile } from "../../WorkSpacePage/filesActions";

const SaveFileForm = ({ workSpace, editorCode, langEx, setModalOpen }) => {
  const [fileName, setFileName] = useState();
  const [fileSaved, setFileSaved] = useState();
  const [loader, setLoader] = useState();
  const [FileError, setFileError] = useState();
  const user = useSelector((state) =>
    state.User.loginInfo.user.firstName ? state.User.loginInfo.user : ""
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(createWorkSpaceSchema),
  });
  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      if (data) {
        setLoader(true);

        let sendData = {
          fileName: fileName,
          fileContent: editorCode,
          fileExtension: langEx,
          workspaceId: workSpace,
          userId: user._id,
        };

        let response = await saveFile(sendData);

        if (response) {
          console.log(response);
          setLoader(false);
          toast.success(
            `${response.fileName}.${response.fileExtension} Created! `
          );
          setFileSaved(response);
          setModalOpen(false);
        }
      }
    } catch (err) {
      setLoader(false);
      if (err.response) {
        setFileError(err.response.data.message);
      } else {
        setFileError(err.message);
      }
    }
  };

  console.log(workSpace);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="createWorkSpaceFormInput ">
            <div className="">
              <label className=" text-light-text-small">Enter File name:</label>
              <input
                className="appearance-none transition-border-color duration-200  border 
               rounded border-light-accent focus:border-light-call-sec 
                dark:border-dark-accent dark:bg-dark-bg
                 dark:focus:border-white w-full py-2 px-3
                  text-light-text-small text-sm font-semibold focus:outline-none "
                id="nameWorkSpace"
                name="nameWorkSpace"
                type="text"
                placeholder="File Name"
                onInput={(e) => {
                  setFileName(e.target.value);
                }}
                value={fileName}
                {...register("name")}
              />
              {
                <div
                  className="invalid-feedback  text-output-error text-xs px-2 pt-1"
                  style={errors.name ? { display: "block" } : {}}
                >
                  {errors.name?.message}
                </div>
              }
            </div>{" "}
            {
              <div
                className="invalid-feedback  text-output-error text-xs px-2 pt-1"
                style={FileError ? { display: "block" } : {}}
              >
                {FileError}
              </div>
            }
          </div>
          <div className="createWorkSpaceBtnWrapper  ">
            {loader ? (
              <div className=" flex justify-center w-full p-3">
                <Oval color="#5063F0" height={30} width={30} />
              </div>
            ) : (
              <div className="flex justify-center w-full p-3">
                <button
                  type="submit"
                  id="createBtn"
                  className="createWorkSpaceBtn tracking-wide transition-background-color ease-in duration-200 p-2 pr-8 pl-8 bg-light-call-sec rounded text-center text-md font-semibold text-light-accent cursor-pointer hover:bg-light-hover hover:text-light-call-sec dark:hover:bg-dark-accent"
                >
                  Create
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SaveFileForm;
