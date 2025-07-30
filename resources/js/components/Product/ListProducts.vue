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
            v-for="(product, index) in products"
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
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'

defineProps({
  products: Array
})

const emit = defineEmits(['edit', 'delete'])

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
  }
}
</script>
