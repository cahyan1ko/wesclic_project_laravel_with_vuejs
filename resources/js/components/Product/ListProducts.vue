<template>
  <div v-if="products.length > 0">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <thead class="bg-[#5D5FEF] text-gray-700">
          <tr class="text-white">
            <th class="py-3 px-6 text-left font-medium">Product Name</th>
            <th class="py-3 px-6 text-left font-medium">Description</th>
            <th class="py-3 px-6 text-left font-medium">Price</th>
            <th class="py-3 px-6 text-center font-medium">Image</th>
            <th class="py-3 px-6 text-center font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in paginatedProducts"
            :key="product.id"
            class="hover:bg-gray-50 transition-all duration-200"
          >
            <td class="py-3 px-6 font-medium text-gray-800">{{ product.name }}</td>
            <td class="py-3 px-6 text-gray-700">{{ product.description }}</td>
            <td class="py-3 px-6 text-gray-700">
              Rp {{ new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(product.price) }}
            </td>
            <td class="py-3 px-6 text-center">
              <img
                :src="product.image"
                alt="Foto Produk"
                class="w-16 h-16 object-cover rounded-md shadow-sm mx-auto border"
              />
            </td>
            <td class="py-3 px-6 text-center">
              <div class="flex justify-center items-center gap-2">
                <button
                  @click="$emit('edit', product)"
                  class="px-4 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold rounded-lg transition"
                >
                  Edit
                </button>
                <button
                  @click="confirmDelete(product.id)"
                  class="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex justify-end mt-4 mr-10">
        <div class="space-x-1">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            class="px-3 py-1 text-sm font-medium rounded-md border transition"
            :class="{
              'bg-[#5D5FEF] text-white border-[#5D5FEF]': currentPage === page,
              'bg-white text-gray-700 border-gray-300 hover:bg-gray-100': currentPage !== page
            }"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Swal from 'sweetalert2'

const props = defineProps({
  products: Array
})

const emit = defineEmits(['edit', 'delete'])

const itemsPerPage = 10
const currentPage = ref(1)

const totalPages = computed(() => {
  return Math.ceil(props.products.length / itemsPerPage)
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return props.products.slice(start, start + itemsPerPage)
})

const confirmDelete = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure you want to delete?',
    text: "Product data will be permanently deleted!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e3342f',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel'
  })

  if (result.isConfirmed) {
    emit('delete', id)
    Swal.fire({
      icon: 'success',
      title: 'Deleted!',
      text: 'The product has been successfully deleted.',
      timer: 2000,
      showConfirmButton: false
    })

    if (paginatedProducts.value.length === 1 && currentPage.value > 1) {
      currentPage.value -= 1
    }
  }
}
</script>
