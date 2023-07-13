import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    createdAt: '',
  });
  const { getItem, setItem } = useLocalStorage();

  useEffect(() => {
    const userInfo = getItem('user');
    if (userInfo.length) 
      setUser(JSON.parse(userInfo));
  }, []);

  const addUser = (user) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
  };

  return { user, addUser, removeUser };
};