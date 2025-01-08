import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse.js';
import { UserServices } from './user.service.js';

// name: '',
// age: '',
// gender: '',
// phone: '',
// email: '',
// password: '',
// address: '',
// dutyTime: '',
// role: '',

const createUser = async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      phone,
      email,
      password,
      address,
      dutyTime,
      role,
    } = req.body;

    const result = await UserServices.createUserIntoDB(req.file, {
      name,
      age,
      gender,
      phone,
      email,
      password,
      address,
      dutyTime,
      role,
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: error.message || 'Failed to create user',
      data: null,
    });
  }
};

export const UserControllers = {
  createUser,
};
