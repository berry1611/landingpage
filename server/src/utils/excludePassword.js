const excludePassword = (userObj) => {
  const { password, ...rest } = userObj.toObject();
  return { rest };
};

export default excludePassword;
