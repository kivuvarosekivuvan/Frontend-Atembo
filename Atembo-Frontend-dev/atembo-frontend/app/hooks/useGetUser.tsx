import { getUser } from "../Utilities/utils";
import { useEffect, useState } from "react";

interface UserData {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

const useGetUser = () => {
  const [user, setUser] = useState<UserData[]>([]);
  const [lastAddedUser, setLastAddedUser] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);

        if (userData.length > 0) {
          const lastUser = userData[userData.length - 1];
          const lastVisitedUserName = `${lastUser.first_name} ${lastUser.last_name}`;
          setLastAddedUser(lastVisitedUserName);

        }
      } catch (error) {
        return error
      }
    };

    fetchUser();
  }, []);

  return { user, lastAddedUser };
};

export default useGetUser;