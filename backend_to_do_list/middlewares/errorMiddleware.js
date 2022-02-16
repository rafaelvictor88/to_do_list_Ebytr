module.exports = (err, req, res, _next) => {
  if (err.status) {
    return res
      .status(err.status)
      .json(err.message);
  }
  console.log('error midleware: ', err.message);
  return res.status(500).json({ message: 'Internal Server Error' });
};
