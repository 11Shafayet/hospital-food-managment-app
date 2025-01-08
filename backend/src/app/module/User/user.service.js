import { User } from './user.model.js';
import bcrypt from 'bcrypt';

// name,
// age,
// gender,
// phone,
// email,
// password,
// address,
// dutyTime,
// role,

const createUser = async (userData) => {
  const { name, age, gender, phone, email, password, address, dutyTime, role } =
    userData;

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user with the provided data
  const result = await User.create({
    name,
    age,
    gender,
    phone,
    email,
    password: hashedPassword,
    address,
    dutyTime,
    role,
  });

  return result;
};

export const UserServices = {
  createUser,
};
