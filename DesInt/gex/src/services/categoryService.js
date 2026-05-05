import { fetchCategories } from './api'

export async function getAllCategories() {
  return await fetchCategories()
}