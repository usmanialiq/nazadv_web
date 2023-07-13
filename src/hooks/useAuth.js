import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const router = useRouter();
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user) => {
    addUser(user);
    router.push('/home');
  };

  const logout = () => {
    removeUser();
    router.push('/');
  };

  return { user, login, logout };
};