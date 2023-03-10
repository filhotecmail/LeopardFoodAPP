<template>
  <!--Login-->
  <div class="flex justify-center items-center h-screen">
    <div class="mx-auto w-full max-w-md">
      <div class="bg-red-600 shadow-md rounded-lg px-15 py-8 h-64 aspect-w-1 aspect-h-1 border-b-red-600 flex flex-col justify-center items-center m-4" style="background-color: #CB2546"> 
        <div>
          <h2 class="text-2xl font-bold mb-4 text-white">Leopard App Food</h2>
          <router-link to="/Home-food " class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-8">
            <button>Login</button>
          </router-link>
      </div>
      </div>
    </div>
  </div>
  <!--Fim do login-->
  </template>
<script>
export default {

}
</script>

<style scoped>
  .max-w-md {
    max-width: 28rem; /* Define a largura máxima do card */
  }
</style>