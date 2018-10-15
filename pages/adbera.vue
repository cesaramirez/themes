<template>
  <div class="h-full">
    <header class="bg-green">
      <nav class="flex justify-between items-center container mx-auto pt-8 pb-32">
        <div class="text-white text-3xl">
          <img 
            src="@/assets/logo.svg" 
            alt="Logo image" 
            class="h-12">
        </div>
        <nuxt-link 
          to="/"
          class="px-6 h-10 flex items-center rounded-full bg-green-dark hover:bg-green-darker hover:shadow text-base text-white no-underline">
          Back to Home
        </nuxt-link>
      </nav>
    </header>
    <section class="h-auto bg-green pb-12">
      <div class="container mx-auto flex flex-col xl:flex-row">
        <div class="w-full xl:w-1/2 text-center xl:text-left mb-6 xl:mb-0">
          <h1 class="font-bold text-5xl text-white mb-8">Lorem ipsum dolor sit amet consectetur</h1>
          <p class="text-white leading-loose tracking-normal text-lg">Praesent mollis, massa in auctor molestie, magna lorem semper mauris, a venenatis turpis purus vel metus. Etiam sed iaculis libero, at euismod massa. Fusce in venenatis ligula.</p>
        </div>
        <div class="xl:ml-auto">
          <img 
            src="@/assets/hero-image.svg" 
            alt="Product image" 
            class="xl:h-80">
        </div>
      </div>
    </section>
    <section class="h-auto bg-grey-lighter py-12">
      <div class="flex flex-col justify-center items-center mb-16">
        <h2 class="mb-6 text-3xl">Lorem ipsum dolor</h2>
        <p class="text-xl md:w-2/3 xl:w-1/2 text-center leading-normal tracking-wide text-grey-darker">Praesent mollis, massa in auctor molestie, magna lorem semper mauris, a venenatis turpis purus vel metus.</p>
      </div>
      <div class="flex flex-col xl:flex-row justify-center items-center">
        <div class="bg-white md:w-2/3 xl:w-1/5 h-auto rounded-lg shadow-lg flex xl:flex-col items-center justify-center mx-4 py-10 hover:shadow-md mb-8 xl:mb-0">
          <img 
            src="@/assets/feature-grid-1.svg" 
            alt="" 
            class="h-32 xl:h-48 xl:mb-8 ml-8 xl:ml-0">
          <div class="text-left xl:text-center px-6 w-2/3">
            <h4 class="mb-4 text-2xl font-medium">Lorem Ipsum</h4>
            <p class="leading-normal">In maximus libero sed leo vulputate pretium. In sit amet nisi ligula</p>
          </div>
        </div>
        <div class="bg-white md:w-2/3 xl:w-1/5 h-auto rounded-lg shadow-lg flex xl:flex-col items-center justify-center mx-4 py-10 hover:shadow-md mb-8 xl:mb-0">
          <img 
            src="@/assets/feature-grid-2.svg" 
            alt="" 
            class="h-32 xl:h-48 xl:mb-8 ml-8 xl:ml-0">
          <div class="text-left xl:text-center px-6 w-2/3">
            <h4 class="mb-4 text-2xl font-medium">Lorem Ipsum</h4>
            <p class="leading-normal">In maximus libero sed leo vulputate pretium. In sit amet nisi ligula</p>
          </div>
        </div>
        <div class="bg-white md:w-2/3 xl:w-1/5 h-auto rounded-lg shadow-lg flex xl:flex-col items-center justify-center mx-4 py-10 hover:shadow-md mb-8 xl:mb-0">
          <img 
            src="@/assets/feature-grid-3.svg" 
            alt="" 
            class="h-32 xl:h-48 xl:mb-8 ml-8 xl:ml-0">
          <div class="text-left xl:text-center px-6 w-2/3">
            <h4 class="mb-4 text-2xl font-medium">Lorem Ipsum</h4>
            <p class="leading-normal">In maximus libero sed leo vulputate pretium. In sit amet nisi ligula</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>
