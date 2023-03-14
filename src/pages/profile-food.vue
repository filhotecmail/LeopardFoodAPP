<template>
  <!--Menu-->
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
  <!--End menu-->
  <!--Cards-->
<div class="bg-gray-800 h-screen">
  <div class="carousel-container mb-12">
    <div class="flex flex-col md:flex-row items-center justify-center flex-wrap">
      <div class="bg-gray-100 w-72 rounded-lg shadow-lg overflow-hidden mb-6 md:mr-8">
        <img class="w-full h-32" src="../img/food1.jpg" alt="Card image" />
        <div class="p-4">
          <h3 class="text-gray-900 font-bold text-xl mb-2">Card 1</h3>
          <p class="text-gray-700 text-base m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ante quis
            ipsum auctor bibendum eget sit amet neque.
          </p>
          <div class="carousel-controls">
            <button
              class="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded-full focus:outline-none"
              @click="prevSlide"
            >
              &larr;
            </button>
            <button
              class="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded-full focus:outline-none"
              @click="nextSlide"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 w-72 rounded-lg shadow-lg overflow-hidden mb-12 md:mr-8">
        <img class="w-full h-32" src="../img/food4.jpg" alt="Card image" />
        <div class="p-4">
          <h3 class="text-gray-900 font-bold text-xl mb-2">Card 1</h3>
          <p class="text-gray-700 text-base m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ante quis
            ipsum auctor bibendum eget sit amet neque.
          </p>
          <div class="carousel-controls">
            <button
              class="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded-full focus:outline-none"
              @click="prevSlide"
            >
              &larr;
            </button>
            <button
              class="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded-full focus:outline-none"
              @click="nextSlide"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 w-72 rounded-lg shadow-lg overflow-hidden mb-12 md:mr-8">
        <img class="w-full h-32" src="../img/Food3.jpg" alt="Card image" />
        <div class="p-4">
          <h3 class="text-gray-900 font-bold text-xl mb-2">Card 1</h3>
          <p class="text-gray-700 text-base m-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ante quis
            ipsum auctor bibendum eget sit amet neque.
          </p>
          <div class="carousel-controls">
            <button
              class="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full focus:outline-none"
              @click="prevSlide"
            >
              &larr;
            </button>
            <button
              class="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full focus:outline-none"
              @click="nextSlide">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <!--Footer-->
  <footer class="bg-gray-900 py-4 sm:py-4 p-6 fixed bottom-0 w-full h-">
    <div class="flex justify-start sm:justify-end items-center px-2 py-2 space-x-6 lg:space-x-8">
      <router-link
        to="/Foods-app"
        class="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded sm:flex-grow-0 sm:flex-shrink-0 w-full sm:w-auto">
        <button>Botão 1</button>
      </router-link>

      <button
        class="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded sm:flex-grow-0 sm:flex-shrink-0 w-full sm:w-auto text-center">
        Botão 2
      </button>
      <button
        class="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded sm:flex-grow-0 sm:flex-shrink-0 w-full sm:w-auto">
        Botão 3
      </button>
    </div>
  </footer>

  <!--End footer-->
</template>
<script>
export default {};
</script>

<style></style>
