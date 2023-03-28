<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis
      accusantium enim aliquid similique quae fuga eaque maxime esse quas
      corporis placeat hic asperiores natus, delectus adipisci molestias dolorem
      provident?
    </p>
    <pre>{{ data }}</pre>
  </div>
</template>
<script setup>
  // const { data } = await useFetch("/api/ninja?name=eric", {
  //   method: "post",
  //   body: { age: 36 },
  // });
  const { data } = await useFetch("/api/currency/CHF");
</script>
<style></style>
