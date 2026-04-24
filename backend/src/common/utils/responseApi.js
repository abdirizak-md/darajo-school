const apiResponse = (res, { success, message, data, statusCode = 200 }) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
  });
};

export default apiResponse;