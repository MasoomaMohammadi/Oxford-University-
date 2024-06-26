export const isLogin = () => {
  if (document.cookie == "username=masoma") return true;
  return false;
};
