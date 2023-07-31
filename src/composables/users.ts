import { ref, onBeforeMount } from 'vue'
import { useFetch } from '@/composables'
import type { User } from '@/types'

export const useUsers = () => {
  const users = ref<User[]>([])
  const isLoading = ref<boolean>(false)
  const error = ref<unknown>(null)
  const url = 'https://jsonplaceholder.typicode.com/users'

  const getUsers = async () => {
    isLoading.value = true
    const { data, isLoading: userIsLoading, error: userError } = await useFetch(url)

    users.value = data.value as User[]
    isLoading.value = userIsLoading.value
    error.value = userError.value
  }

  onBeforeMount(getUsers)

  return { users, isLoading, error }
}
