<template>
    <!--Inicio da Nav-->
    <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-2">
        <div class="flex items-center flex-shrink-0 mr-6 text-slate-300">
          <div class="m-2 p-1">Leopard Food</div>
          <br />
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <img
            src="../img/perfil.jpg"
            alt="Logo"
            class="h-10 w-10 absolute top-1 right-0 rounded-2xl lg:mx-auto"/>
          <div class="bg-gray-800 rounded-xl flex items-center">
            <input
              type="text"
              placeholder="Pesquisar"
              class="bg-transparent text-gray-100 flex-grow px-4 py-2 focus:outline-green-400"/>
            <span class="inline-block text-gray-400 mx-2">
              <svg
                class="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9.293 9.293a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414z"/>
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </span>
          </div>
        </div>
      </nav>
      <br />
<!--Fim da nav-->

<!--Cards-->
<div class="flex items-center justify-center flex-wrap">
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-6 md:mr-8 m-2  w-1/4">
        <div>
            <router-link to="/Tabelas-produtos" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-6 md:mr-8 m-2 w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-6 md:mr-8 m-2  w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-6 md:mr-8 m-2  w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-6 md:mr-8 m-2  w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-6 md:mr-8 m-2  w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-6 md:mr-8 m-2  w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-6 md:mr-8 m-2  w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-6 md:mr-8 m-2  w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-12 md:mr-8 m-2  w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-12 md:mr-8 m-2 w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-12 md:mr-8 m-2 w-1/4">
        <div>
            <router-link to="#" @click="toggleAnimation">
              <img src="../img/Drinks.png" alt="" class="w-28 hover:animate-pulse transition duration-500">
            </router-link>
            <h2 class="md:text-xl md:text-center">Bebidas</h2>
        </div>
    </div>
</div> 


<!--Inicio do Footer-->
      <footer class="bg-gray-800 py-4 sm:py-4 p-6 fixed bottom-0 w-full  h-12 md:h-4">
        <div class="flex justify-start sm:justify-end items-center px-2 py-2 space-x-6 lg:space-x-8 h-7 md:h-0">
          <button class="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded sm:flex-grow-0 sm:flex-shrink-0 w-full sm:w-auto">
            Botão 1
          </button>
          <button class="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded sm:flex-grow-0 sm:flex-shrink-0 w-full sm:w-auto text-center">
            Botão 2
          </button>
          <button class="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded sm:flex-grow-0 sm:flex-shrink-0 w-full sm:w-auto">
            Botão 3
          </button>
        </div>
      </footer>
 <!--Fim do footer-->     
</template>
<script>
export default {
  data() {
    return {
      animate: false
    }
  },
  methods: {
    toggleAnimation() {
      this.animate = !this.animate
    }
  }
}
</script>
<style>
.animate {
  animation: pulse 1s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>





