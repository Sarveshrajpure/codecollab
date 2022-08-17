import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  renameFileSchema,
  deleteFileSchema,
  deleteWorkspaceSchema,
} from "../../validations/fileOperationsValidations";
import {
  renameFile,
  deleteFile,
  deleteWorkspace,
} from "../../WorkSpacePage/filesActions";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";

const RenameDeleteFile = ({
  closeModal,
  fileOperation,
  fileDetails,
  updateFiles,
  isDeleteWorkspace,
  workspace,
}) => {
  const ref = useRef(null);
  const [formState, setFormState] = useState(fileDetails);
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(renameFileSchema),
  });

  useEffect(() => {
    let clickOutsidehandler = (event) => {
      if (!ref.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", clickOutsidehandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsidehandler);
    };
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    let typedValue = value;
    if (!value) {
      typedValue = undefined;
    }
    setFormState({
      ...formState,
      [name]: typedValue,
    });
  };

  async function submitForm(e) {
    e.preventDefault();

    const validData = await renameFileSchema.validate(formState);

    try {
      if (validData) {
        setSpinner(true);
        setError("");

        if (validData.name === fileDetails.name) {
          setSpinner(false);
          toast.success("File renamed!");
          updateFiles();
          closeModal();
        } else {
          let dataToBeSent = {
            documentId: validData.documentId,
            newName: validData.name,
            fileExtension: validData.fileExtension,
          };

          let response = await renameFile(dataToBeSent);
          if (response) {
            setSpinner(false);
            toast.success("File renamed!");
            updateFiles();
            closeModal();
          }
        }
      }
    } catch (error) {
      setSpinner(false);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  }

  async function submitDeleteForm(e) {
    e.preventDefault();

    try {
      setSpinner(true);
      setError("");
      let validData = "";
      console.log(workspace);
      if (isDeleteWorkspace) {
        validData = await deleteWorkspaceSchema.validate({
          workspaceId: workspace._id,
        });
      } else {
        validData = await deleteFileSchema.validate({
          documentId: fileDetails.documentId,
        });
      }

      if (validData) {
        if (isDeleteWorkspace) {
          let dataToBeSent = { workspaceId: validData.workspaceId };
          let response = await deleteWorkspace(dataToBeSent);

          if (response) {
            setSpinner(false);
            toast.success("Workspace deleted!");
            closeModal();
          }
        } else {
          let dataToBeSent = { documentId: validData.documentId };
          let response = await deleteFile(dataToBeSent);

          if (response) {
            setSpinner(false);
            toast.success("File deleted!");
            updateFiles();
            closeModal();
          }
        }
      } else {
        setSpinner(false);
        setError("FileId/WorkspaceId required");
      }
    } catch (error) {
      setSpinner(false);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  }
  console.log(workspace._id);
  return (
    <div
      className="RenameDeleteFileModalBackground fixed z-40 h-screen w-screen top-0 left-0 
     right-0 bg-modal-bg/[0.7] "
    >
      <div
        className="RenameDeleteFileModalWrapper absolute  pt-2 pb-6 px-4 left-10 top-60 md:inset-1/4 mx-auto 
     w-80 md:w-96 h-fit  shadow-lg rounded-md bg-white dark:bg-dark-accent"
        ref={ref}
      >
        <h2 className="text-md md:text-lg font-medium text-light-call-sec dark:text-light-text-small">
          {fileOperation === "rename" ? "Rename File" : "Delete File"}
        </h2>

        {fileOperation === "rename" ? (
          <div className="renameForm w-full my-4">
            <form
              onSubmit={(e) => {
                submitForm(e);
              }}
            >
              <div className="flex justify-around">
                <div>
                  <input
                    className=" 
                rounded w-full bg-light-accent  border-dark-bg focus:border-light-call-sec 
                 dark:border-dark-accent dark:bg-dark-bg dark:focus:border-white py-2 px-3
                 text-light-text-small text-sm font-semibold focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="File name"
                    value={formState.name}
                    onInput={(e) => {
                      onChangeHandler(e);
                    }}
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
                </div>

                <h3 className="text-xl m-1 font-medium">.</h3>
                <div>
                  <input
                    className=" 
                rounded w-full bg-light-accent  border-dark-bg focus:border-light-call-sec 
                 dark:border-dark-accent dark:bg-dark-bg dark:focus:border-white py-2 px-3
                 text-light-text-small text-sm font-semibold focus:outline-none"
                    id="fileExtension"
                    type="text"
                    placeholder="extension"
                    value={formState.fileExtension}
                    onInput={(e) => {
                      onChangeHandler(e);
                    }}
                    {...register("fileExtension")}
                    disabled
                  />
                  {
                    <div
                      className="invalid-feedback  text-output-error text-xs px-2 pt-1"
                      style={errors.fileExtension ? { display: "block" } : {}}
                    >
                      {errors.fileExtension?.message}
                    </div>
                  }
                </div>
              </div>

              <div className="flex justify-around">
                {spinner ? (
                  <div className=" flex justify-center w-full p-2">
                    <Oval color="#5063F0" height={30} width={30} />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className=" px-2 md:px-4 py-2 mt-2 text-sm md:text-md transition-background-color duration-200 rounded
                     text-light-bg bg-light-call-sec dark:bg-light-call-sec hover:bg-light-hover
                      hover:text-light-call-sec dark:hover:bg-dark-hover"
                  >
                    Rename
                  </button>
                )}

                <button
                  type="submit"
                  className=" px-2 md:px-4 py-2 mt-2 text-sm md:text-md rounded transition-background-color duration-200 text-light-call-sec bg-light-accent
                   hover:bg-light-hover"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  cancel
                </button>
              </div>
              <div className="errorDiv text-sm text-output-error text-center mt-2">
                {error ? error : ""}
              </div>
            </form>
          </div>
        ) : (
          <div>
            <form
              onSubmit={(e) => {
                submitDeleteForm(e);
              }}
            >
              <div className="flex justify-around">
                <div>
                  <div className="text-md p-4 font-medium text-light-call-sec dark:text-light-bg">
                    {isDeleteWorkspace ? (
                      <h3>
                        Are you sure?, deleting worksapce would delete all files
                        within it.
                      </h3>
                    ) : (
                      <h3>{`Are you sure you want to delete ${
                        fileDetails
                          ? fileDetails.name
                          : "" + "." + fileDetails.fileExtension
                      } ?`}</h3>
                    )}
                  </div>
                  <input
                    className=" hidden
              rounded w-full bg-light-accent  border-dark-bg focus:border-light-call-sec 
               dark:border-dark-accent dark:bg-dark-bg dark:focus:border-white py-2 px-3
               text-light-text-small text-sm font-semibold focus:outline-none"
                    id="documentId"
                    type="text"
                    value={formState?.documentId}
                    {...register("documentId")}
                  />
                </div>
              </div>

              <div className="flex justify-around">
                {spinner ? (
                  <div className=" flex justify-center w-full p-2">
                    <Oval color="#5063F0" height={30} width={30} />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className=" px-2 md:px-4 py-2 mt-2 text-sm md:text-md transition-background-color duration-200 rounded
                   text-light-bg bg-light-call-sec dark:bg-light-call-sec hover:bg-output-error
                   hover:text-light-bg dark:hover:bg-output-error dark:hover:text-light-bg"
                  >
                    Delete
                  </button>
                )}

                <button
                  className=" px-2 md:px-4 py-2 mt-2 text-sm md:text-md rounded transition-background-color duration-200 text-light-call-sec bg-light-accent
                 hover:bg-light-hover"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  cancel
                </button>
              </div>
              <div className="errorDiv text-sm text-output-error text-center mt-2">
                {error ? error : ""}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RenameDeleteFile;
