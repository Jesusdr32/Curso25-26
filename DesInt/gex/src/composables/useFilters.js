  import { computed } from 'vue'

export function useFilters(products, search, selectedBrand, sortOption) {
  const filteredProducts = computed(() => {
    let filtered = [...products.value]

    if (search.value) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.value.toLowerCase())
      )
    }

    if (selectedBrand.value) {
      filtered = filtered.filter(
        product => product.brand?.name === selectedBrand.value
      )
    }

    if (sortOption.value === 'Precio menor') {
      filtered.sort((a, b) => a.price - b.price)
    }

    if (sortOption.value === 'Precio mayor') {
      filtered.sort((a, b) => b.price - a.price)
    }

    if (sortOption.value === 'Nombre') {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  })
  
  return {
    filteredProducts
  }
}