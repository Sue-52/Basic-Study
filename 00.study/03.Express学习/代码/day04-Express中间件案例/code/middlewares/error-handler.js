module.exports = () => {
  return (err, req, res, next) => {
    res.status(500).json({
      code: 500,
      errorMsg: err, message
    })
  }
}