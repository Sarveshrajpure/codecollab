import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { createWorkSpaceSchema } from "../../validations/createWorkSpaceValidation";
import { createWorkSpace } from "../../WorkSpacePage/workSpaceActions";

const CreateWorkSpace = ({
  setOpenCreate,
  setCreatedWorkSpace,
  createOpenVal,
  setModalOpen,
}) => {
  const [workspaceName, setWorkSpaceName] = useState();
  const [loader, setLoader] = useState();
  const [workSpaceError, setWorkSpaceError] = useState();
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
          name: data.name,
          userId: user._id,
        };

        let response = await createWorkSpace(sendData);

        if (response) {
          setLoader(false);
          toast.success(`${response.name} Created! `);
          setCreatedWorkSpace(response);
          createOpenVal ? setModalOpen(false) : setOpenCreate(false);
        }
      }
    } catch (err) {
      setLoader(false);
      if (err.response) {
        setWorkSpaceError(err.response.data.message);
      } else {
        setWorkSpaceError(err.message);
      }
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="createWorkSpaceFormInput ">
            <div className="p-2">
              <input
                className="appearance-none transition-border-color duration-200  border 
                 rounded border-light-accent focus:border-light-call-sec  dark:border-dark-accent dark:bg-dark-bg dark:focus:border-white w-full py-2 px-3 text-light-text-small text-sm font-semibold focus:outline-none "
                id="nameWorkSpace"
                name="nameWorkSpace"
                type="text"
                placeholder="Workspace Name"
                onInput={(e) => {
                  setWorkSpaceName(e.target.value);
                }}
                value={workspaceName}
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
                style={workSpaceError ? { display: "block" } : {}}
              >
                {workSpaceError}
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

export default CreateWorkSpace;
