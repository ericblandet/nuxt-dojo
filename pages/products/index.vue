<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: "products",
  });

  // beware this code w-ill be fired from the server (for the first rendering and then from the client)
  const { data: products } = await useFetch(
    "https://fakestoreapi.com/products"
  );
</script>
<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }
</style>
