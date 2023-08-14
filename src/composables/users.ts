import { ref, onBeforeMount } from "vue";
import { useFetch } from "@/composables";
import type { User } from "@/types";

type UsersData = User[] | undefined;

export const useUsers = () => {
  const users = ref<UsersData>();
  const isLoading = ref<boolean>(false);
  const error = ref<Error>();
  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    isLoading.value = true;
    const {
      data,
      isLoading: userIsLoading,
      error: userError,
    } = await useFetch(url);

    users.value = data.value as UsersData;
    isLoading.value = userIsLoading.value;
    error.value = userError.value;
  };

  onBeforeMount(getUsers);

  return { users, isLoading, error };
};
