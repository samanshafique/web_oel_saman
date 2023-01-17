router.route('/login')
  .get((req, res) => {
    res.render('login')
  })
  .post(async (req, res, next) => {
  try {
    const result = loginSchema.validate(req.body)
    if (result.error) {
      req.flash('error', 'Data entered is not valid. Please try again.')
      res.redirect('/users/login')
      return
    }
    const user = await User.findOne({ 'email': result.value.email })
    if (user) {
      let passwordIsValid = bcrypt.compareSync(
        result.value.password,
        user.password
      );
      if (!passwordIsValid) {
        req.flash('error', 'Email/Password is not valid. Please try again.')
        res.redirect('/users/login')
        return
      }
      req.flash('success', 'Login successfully')
      res.redirect('/users/dashboard')
    }
  } catch (error) {
    next(error)
  }
})