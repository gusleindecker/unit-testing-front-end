import { ref, toValue, type MaybeRefOrGetter } from 'vue'

export const useFetch = async (url: MaybeRefOrGetter<string>) => {
  const isLoading = ref<boolean>(true)
  const data = ref<unknown>([])
  const error = ref<unknown>(null)

  try {
    const response = await fetch(toValue(url))

    if (!response.ok) {
      throw new Error(`Failed to fetch data.`)
    }

    const parsedResponse = await response.json()
    data.value = parsedResponse
  } catch (err) {
    error.value = err
  } finally {
    isLoading.value = false
  }

  return { isLoading, data, error }
}
