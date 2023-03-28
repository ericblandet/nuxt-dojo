<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>
<script setup>
  definePageMeta({
    layout: "products",
  });
  const { id } = useRoute().params;

  const uri = "https://fakestoreapi.com/products/" + id;

  // fetch the data. We re-fetch every time id changes.
  const { data: product } = await useFetch(uri, { key: id });

  if (!product.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found",
      fatal: true,
    });
  }
</script>
<style></style>
