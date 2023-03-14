<template>
  <!--Inicio Nav-->
  <nav
    class="fixed top-0 left-0 w-full z-50 flex items-center justify-between flex-wrap bg-gray-900 p-2 h-16"
  >
    <div class="flex items-center flex-shrink-0 mr-6 text-slate-300">
      <div class="m-2 p-1">Leopard Food</div>
   
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <img
        src="../img/perfil.jpg"
        alt="Logo"
        class="h-10 w-10 absolute top-1 right-0 rounded-2xl lg:mx-auto"
      />
      <div class="bg-gray-800 flex items-center w-full">
        <input
          type="text"
          placeholder="Pesquisar"
          class="bg-solid text-black flex-grow px-4 py-2 focus:outline-blue-400 h-11 w-12 rounded border border-gray-800"
        />
        <span class="inline-block text-black mx-2"></span>
        <span class="bg-gray-800 h-14 w-0"></span>
      </div>
    </div>
  </nav>

  <!--Fim da nav-->

  <div class="bg-gray-800 min-h-screen">
    <div class="grid grid-cols-1 gap-1 bg-gray-800 items-center justify-center flex-wrap absolute top-32 w-full">
    
      <!-- inicio do card -->
      <div
        class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-0 h-24">       
       <div>
        <div class="flex flex-col  top-4 px-80 rounded">
          <button class="bg-green-500 text-white py-1 px-4 rounded w-10 h-7">+</button>
        </div> 
        <div>
          <img src="../img/refri.png" alt="" class="w-16" />
        </div>

 
       </div>   
      </div> 
      <!-- Termino do card --> 

       <!-- inicio do card -->
      <div
        class="bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-0 h-24">
       
       <div>
        <div class="flex flex-col top-4 px-3 rounded">
          <button class="bg-green-500 text-white py-1 px-4 rounded w-10 h-7">+</button>
        </div>
        <div>
          <img src="../img/refri.png" alt="" class="w-16" />
        </div>
        
 
       </div>   
      </div> 
      <!-- Termino do card -->  
  
  
      <!-- inicio do card transparente-->
      <div class="bg-transparent rounded-lg shadow-lg overflow-hidden mb-0 h-10">
        <div></div>
        <div class="bg-transparent">
          <button class="bg-transparent">+</button>
        </div>
        <div class="bg-transparent">
          <span class=""></span>
        </div>
        <div class="">
          <button class="">-</button>
        </div>
      </div>
      <!-- Termino do card -->
    </div>
  </div>

  <!--Inicio do Footer-->
  <footer class="bg-gray-900 py-0 sm:py-4 p-0 fixed bottom-0 w-full h-15">
    <div
      class="flex justify-start sm:justify-end items-center px-2 py-2 space-x-4 lg:space-x-8 w-full"
    >
      <button
        class="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded sm:flex-grow-0 sm:flex-shrink-0 w-full sm:w-auto"
      >
        Botão 1
      </button>
      <button
        class="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded sm:flex-grow-0 sm:flex-shrink-0 w-full sm:w-auto text-center"
      >
        Botão 2
      </button>
      <button
        class="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded sm:flex-grow-0 sm:flex-shrink-0 w-full sm:w-auto"
      >
        Botão 3
      </button>
    </div>
  </footer>
  <!--Fim do footer-->
</template>
<script></script>
