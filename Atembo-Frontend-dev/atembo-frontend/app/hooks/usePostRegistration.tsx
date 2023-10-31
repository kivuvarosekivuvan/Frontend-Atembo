import { useState } from 'react';
import { createUser } from '../Utilities/utils';

interface UsersData {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

const useCreateUsers = (userData: UsersData) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState<string>('');

  const handleRegister = async () => {
    if (!userData.username || !userData.email || !userData.password || !userData.first_name || !userData.last_name) {
      setError('Please fill in all fields');
      return;
    }
      const createdUser = await createUser(userData);
      setUser(createdUser);

  };

  return { handleRegister, user, error };
};

export default useCreateUsers;