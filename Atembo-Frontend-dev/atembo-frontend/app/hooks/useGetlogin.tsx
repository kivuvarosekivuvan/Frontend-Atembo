


import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../Utilities/utils';

interface LoginData {
  username: string;
  password: string;
}

const useLogin = (loginData: LoginData) => {
  const router = useRouter();
  const [user, setUser] = useState();

    const handleLogin = async () => {
      const response = await loginUser(loginData);
      console.log(response)
    
      if (response && response.message === 'Logged in successfully') {
        router.replace('/homePage');
      } else {
        router.push('/login');
      }
    
    setUser(response);
  };

  return { user, handleLogin };
};

export default useLogin;
