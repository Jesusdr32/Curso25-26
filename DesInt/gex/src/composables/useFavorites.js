import { ref } from 'vue'

const favorites = ref(
  JSON.parse(localStorage.getItem('favorites')) || []
)

export function useFavorites() {
  const saveFavorites = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  const addFavorite = (product) => {
    const exists = favorites.value.find(item => item.id === product.id)

    if (!exists) {
      favorites.value.push(product)
      saveFavorites()
    }
  }

  const removeFavorite = (productId) => {
    favorites.value = favorites.value.filter(item => item.id !== productId)
    saveFavorites()
  }

  return {
    favorites,
    addFavorite,
    removeFavorite
  }
}