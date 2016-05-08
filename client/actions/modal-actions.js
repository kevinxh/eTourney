export const modalAction = (modal, action) => {
  return {
    type: action,
    modal,
  };
};
