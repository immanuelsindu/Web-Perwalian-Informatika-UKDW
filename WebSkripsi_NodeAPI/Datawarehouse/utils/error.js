const error = (messages, errorCode, res) => {
  return res.status(errorCode).json({
    error: true,
    message: messages,
  });
};

module.exports = error;
