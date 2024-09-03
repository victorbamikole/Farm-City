import AsyncStorage from '@react-native-async-storage/async-storage';
import request from '@/constants/request';

import typeGenerator, { action } from './typeGenerator';

// Define the types for userData and the Redux action
interface UserData {
  [key: string]: any; // Adjust this based on the structure of your user data
}

interface LoginResponse {
  data: {
    token: string;
    [key: string]: any; // Adjust this based on the structure of your response data
  };
}

export const loginType = typeGenerator('LOGIN');

/**
 * This action logs in a user and populates the store
 * @param userData - This is the user data to be sent to the API
 */
export const loginUser = (userData: UserData) => async (dispatch: Function) => {
  dispatch(action(loginType.loading, true));
  try {
    const response: LoginResponse = await request({
      route: '/login',
      method: 'post',
      payload: userData,
    });

    const data = response.data;

    console.log('=========DATAAAAAA================');
    console.log(data);
    console.log('==================================');

    await AsyncStorage.setItem('data', JSON.stringify(data));

    const token = data.token;
    await AsyncStorage.setItem('token', token);

    dispatch(action(loginType.success, data));
    dispatch(action(loginType.loading, false));

  } catch (err: any) {
    console.log('===========ERRRORR=====================');
    console.log(err.response?.data);
    console.log('==================================');
    dispatch(action(loginType.failure, err.response));
    dispatch(action(loginType.loading, false));
  }
};
