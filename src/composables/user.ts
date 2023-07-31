import { ref, onBeforeMount } from 'vue'
import { useFetch } from '@/composables'
import type { User } from '@/types'

export const useUser = (id: number) => {
  const user = ref<User | null>(null)
  const isLoading = ref<boolean>(false)
  const error = ref<unknown>(null)
  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  const getUser = async () => {
    isLoading.value = true
    const { data, isLoading: userIsLoading, error: userError } = await useFetch(url)

    user.value = data.value as User
    isLoading.value = userIsLoading.value
    error.value = userError.value
  }

  onBeforeMount(getUser)

  return { user, isLoading, error }
}
