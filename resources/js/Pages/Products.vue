<template>
    <HeaderDashboard title="Products Management" :showSearch="false"/>
    <div class="w-full px-4 py-4 mx-auto relative">
        <div class="flex items-center justify-between mb-4">
            <div class="flex-1 mx-4 max-w-md relative">
                <img
                    src="/assets/icons/search-icon.svg"
                    alt="Search Icon"
                    class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
                <input
                    v-model="search"
                    type="text"
                    placeholder="Cari produk..."
                    class="w-full border border-[#5D5FEF] rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
                />
            </div>
            <Button
                @click="showCreateModal = true"
                text="Create Product"
                textColor="#5D5FEF"
                bgColor="#FFFFFF"
                hoverColor="#5D5FEF"
                hoverTextColor="#FFFFFF"
                fontSize="1rem"
                padding="0.5rem 1rem"
                borderRadius="0.5rem"
                border="1px solid #5D5FEF"
            />
        </div>
        <ListProducts
            class="mt-4"
            :products="filteredProducts"
            @edit="editProduct"
            @delete="deleteProduct"
        />
        <div
            v-if="showCreateModal"
            class="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-50"
        >
        <div class="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
                @click="closeModal"
                class="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
            &times;
            </button>
                <CreateProduct @created="onProductCreated" />
            </div>
        </div>

        <div
            v-if="showEditModal"
            class="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-50"
        >
            <div class="bg-white rounded-lg p-6 w-full max-w-md relative">
                <button
                    @click="showEditModal = false"
                    class="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-xl"
                >
                &times;
                </button>
                    <EditProduct
                    :show="showEditModal"
                    :product="selectedProduct"
                    @close="showEditModal = false"
                    @update="handleUpdate"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import ListProducts from '../components/Product/ListProducts.vue'
import CreateProduct from '../components/Product/CreateProduct.vue'
import EditProduct from '../components/Product/EditProduct.vue'

const products = ref([])
const search = ref('')
const showCreateModal = ref(false)

const fetchProducts = async () => {
    const res = await axios.get('/api/products')
    products.value = res.data
}

const filteredProducts = computed(() => {
    if (!search.value) return products.value
    return products.value.filter(product =>
        product.name.toLowerCase().includes(search.value.toLowerCase())
    )
})

const showEditModal = ref(false)
const selectedProduct = ref(null)

const editProduct = (product) => {
    selectedProduct.value = product
    showEditModal.value = true
}
const deleteProduct = async (id) => {
    await axios.delete(`/api/products/${id}`)
    await fetchProducts()
}

const onProductCreated = () => {
    fetchProducts()
    showCreateModal.value = false
}

const closeModal = () => {
    showCreateModal.value = false
}

const handleUpdate = () => {
    fetchProducts()
    showEditModal.value = false
}

onMounted(fetchProducts)
</script>

