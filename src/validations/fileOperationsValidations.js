import * as yup from "yup";

export const renameFileSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be atleast 3 characters or more")
    .max(100, "Must be 100 characters or less")
    .required("Required"),
  documentId: yup.string().required("file ID id required"),
  fileExtension: yup
    .string()
    .min(2, "must be atleast 2 characters or more")
    .required("File extension required"),
});

export const deleteFileSchema = yup.object().shape({
  documentId: yup.string().required("file ID id required"),
});

export const deleteWorkspaceSchema = yup.object().shape({
  workspaceId: yup.string().required("workspace ID is required"),
});
