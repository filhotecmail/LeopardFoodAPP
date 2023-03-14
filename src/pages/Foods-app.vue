<template>
    <!--Inicio da Nav-->
    <nav
    class="fixed top-0 left-0 w-full z-50 flex items-center justify-between flex-wrap bg-gray-900 p-2 h-16">
    <div class="flex items-center flex-shrink-0 mr-6 text-slate-300">
      <div class="m-2 p-1">Leopard Food</div>
      <br/>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <img
        src="../img/perfil.jpg"
        alt="Logo"
        class="h-10 w-10 absolute top-1 right-0 rounded-2xl lg:mx-auto"/>
      <div class="bg-gray-800 flex items-center w-full">
        <input
          type="text"
          placeholder="Pesquisar"
          class="bg-solid text-black flex-grow px-4 py-2 focus:outline-blue-400 h-11 w-12 rounded border border-gray-800"/>
        <span class="inline-block text-black mx-2"></span>
        <span class="bg-gray-800 h-14 w-0"></span>
      </div>
    </div>
  </nav>
  <br />
<!--Fim da nav-->

<!--Cards-->
<div class="bg-gray-800 h-screen">
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
</div>


<!--Inicio do Footer-->
      <footer class="bg-gray-900 py-4 sm:py-4 p-6 fixed bottom-0 w-full  h-12 md:h-4">
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





