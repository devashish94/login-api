const incomingUserDetailsSchema = require('../models/JoiUserSchema');
const userTableModel = require('../models/UserSchema');

const usernameExists = async (username) => {
  return await userTableModel.findOne({
    where: {
      username: username,
    }
  })
}

const userExists = async (username, password) => {
  return await userTableModel.findOne({
    where: {
      username: username,
      password: password
    }
  })
}

const userDetailsValidater = (username, password) => {
  const userToValidate =  { username: username, password: password };
  const validate = incomingUserDetailsSchema.validate(userToValidate);
  return validate.error
}

const isUserValidForCreation = async (username, password) => {
  const notUniqueUsername = await usernameExists(username, password);
  const userDetailsNotValid = userDetailsValidater(username, password);

  if (userDetailsNotValid) {
    return {
      error: true,
      message: userDetailsNotValid.details[0].message
    };
  }
  if (notUniqueUsername) {
    return {
      error: true,
      message: 'Username should be unique'
    }
  }
  return {
    error: false,
    message: 'VALID'
  }
}

exports.createUser = async (username, password) => {
  const userValid = await isUserValidForCreation(username, password);
  if (!userValid.error) {
    try {
      await userTableModel.create({
        username: username,
        password: password
      })
    } catch(err) {
      console.log(`User creation failed, error: ${err}`)
      return {
        error: 'DATABASE_ERROR',
        message: err.message
      } 
    }
  }
  return userValid
}

exports.loginUser = async (username, password) => {
  const userDetailsNotValid = userDetailsValidater(username, password);
  if (userDetailsNotValid) {
    return {
      error: true,
      message: userDetailsNotValid.details[0].message 
    }
  }
  const userPresent = await userExists(username, password);
  if (userPresent) {
    return {
      error: false,
      username: userPresent.username,
      message: 'DONE'
    }
  }
  return {
    error: true,
    message: 'User details incorrect' 
  }
}
