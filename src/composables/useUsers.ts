import type { User } from '@/types'
import { ref, onBeforeMount } from 'vue'

export const useUsers = () => {
  const users = ref<User[]>([])
  const isLoading = ref<boolean>(false)
  const error = ref<unknown>(null)

  const getUsers = async () => {
    isLoading.value = true
    error.value = null

    try {
      // const response = await fetch('https://dummyjson.com/users')
      const response = await fetch(
        'https://randomuser.me/api/?inc=name,email,location,picture,login&nat=us&results=6'
      )

      if (!response.ok) {
        throw new Error('Failed to fetch users.')
      }

      const data = await response.json()
      console.log('data: ', data)

      users.value = data.results
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  onBeforeMount(getUsers)

  return {
    users,
    isLoading,
    error
  }
}
