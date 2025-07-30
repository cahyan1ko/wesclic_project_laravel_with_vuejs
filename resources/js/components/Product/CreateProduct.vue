<template>
    <h2 class="text-2xl font-bold mb-6 text-[#5D5FEF]">Create Product</h2>

    <form class="space-y-6 bg-white p-8 rounded-xl shadow-md border border-gray-200">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
        <input
          v-model="form.name"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
          placeholder="Enter product name"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Price</label>
        <input
          v-model="form.price"
          type="number"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
          placeholder="Enter price"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          v-model="form.description"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
          placeholder="Enter description"
        ></textarea>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
        <input
          type="file"
          @change="handleFile"
          class="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#5D5FEF] file:text-white hover:file:bg-[#4d4fde]"
        />
      </div>

      <div class="pt-2">
        <button
          type="button"
          @click="createProduct"
          :disabled="isLoading"
          class="w-full bg-[#5D5FEF] hover:bg-[#4d4fde] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading">Creating...</span>
          <span v-else>Create</span>
        </button>
      </div>
    </form>
</template>


<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const emit = defineEmits(['created'])

const form = ref({
  name: '',
  description: '',
  price: '',
  image: null,
})

const isLoading = ref(false)

const handleFile = (e) => {
  form.value.image = e.target.files[0]
}

const resetForm = () => {
  form.value = {
    name: '',
    description: '',
    price: '',
    image: null,
  }
}

const showSuccessDialog = () => {
  Swal.fire({
    icon: 'success',
    title: 'Berhasil!',
    text: 'Produk berhasil ditambahkan.',
    confirmButtonText: 'OK',
    confirmButtonColor: '#5D5FEF'
  })
}

const createProduct = async () => {
  if (isLoading.value) return

  isLoading.value = true

  const fd = new FormData()
  fd.append('name', form.value.name)
  fd.append('description', form.value.description)
  fd.append('price', form.value.price)
  if (form.value.image) {
    fd.append('image', form.value.image)
  }

  try {
    const response = await axios.post('/api/products', fd)
    if (response.status === 201 || response.status === 200) {
      resetForm()
      showSuccessDialog()
      emit('created')
    }
  } catch (error) {
    Swal.fire({
        icon: 'error',
        title: 'Gagal menambahkan produk',
        text: 'Terjadi kesalahan saat menambahkan produk',
        confirmButtonText: 'OK',
        confirmButtonColor: '#5D5FEF',
        iconColor: '#EF4444',
    })
 } finally {
    isLoading.value = false
  }
}
</script>
