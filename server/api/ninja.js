export default defineEventHandler(async (event) => {
  // handle query params
  //   const { name } = getQuery(event);

  // handle post data
  //   const { age } = await readBody(event);

  //   return {
  //     message: `Hello, ${name}, you are ${age} years old !`,
  //   };

  //api call with private key
  const apiKey = "QTwL7thOpWMFanF8eOgrWBPZfISxhCryw9Ec6DFc";
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${apiKey}`
  );

  return { data };
});
