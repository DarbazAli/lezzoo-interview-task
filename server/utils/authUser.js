import generateToken from './generateToken.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
  const { email, password } = req.body

  if (email === 'admin@example.com' && password === '12345') {
    res.json({
      email,
      token: generateToken(email),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
}

export default authUser
