module.exports = {
  createUser: (req, res) => {
    res.status(500).json({
      status: 'error',
      message: "Create user route does not exist yet"
    })
  },
  getUser: (req, res) => {
    res.status(500).json({
      status: 'error',
      message: "Get user route does not exist"
    })
  }
}