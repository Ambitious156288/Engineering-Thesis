import { createSlice } from '@reduxjs/toolkit';
import { fileAPI } from '../api/file-api';

const fileReducer = createSlice({
  name: 'files',
  initialState: {
    files: [],
    currentDir: null,
    fileStack: [],
    mode: 'list',
    loading: false,
  },
  reducers: {
    setFiles(state, action) {
      state.files = action.payload;
    },
    setCurrentDir(state, action) {
      state.currentDir = action.payload;
    },
    createFile(state, action) {
      state.files.push(action.payload);
    },
    removeFile(state, action) {
      state.files = state.files.filter(file => file._id !== action.payload.id);
    },
    pushToFileStack(state, action) {
      state.fileStack.push(action.payload);
    },
    popFromFileStack(state, action) {
      state.fileStack.pop();
    },

    setFileViewMode(state, action) {
      state.mode = action.payload;
    },
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  setFiles,
  setCurrentDir,
  createFile,
  removeFile,
  pushToFileStack,
  popFromFileStack,
  setFileViewMode,
  toggleLoading,
} = fileReducer.actions;
export default fileReducer.reducer;

export const loadFiles = (dirId, sort) => async dispatch => {
  const data = await fileAPI.getFiles(dirId, sort);
  dispatch(setFiles(data));
};

export const createNewDir = (dirId, name) => async dispatch => {
  const dir = await fileAPI.createDir(dirId, name);
  dispatch(createFile(dir));
};

export const uploadFile = (file, dirId) => async dispatch => {
  const fileData = await fileAPI.uploadFile(file, dirId, dispatch);

  dispatch(createFile(fileData));
};

export const downloadFile = file => async dispatch => {
  const fileBlob = await fileAPI.downloadFile(file._id);

  const fileDownloadUrl = window.URL.createObjectURL(fileBlob);
  const link = document.createElement('a');
  document.body.appendChild(link);
  link.href = fileDownloadUrl;
  link.download = file.name;
  link.click();
  link.remove();
};

export const deleteFile = file => async dispatch => {
  const fileId = await fileAPI.deleteFile(file._id);

  dispatch(removeFile(fileId));
};

// export const searchFiles = (searchString) => async (dispatch) => {
//   const foundFiles = await fileAPI.searchFile(searchString);
//   dispatch(setFiles(foundFiles));
// };
