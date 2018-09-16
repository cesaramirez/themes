<template>
  <div class="h-full">
    <header class="bg-green">
      <nav class="flex justify-between items-center container mx-auto pt-8 pb-32">
        <div class="text-white text-3xl">
          <img src="@/assets/logo.svg" alt="Logo image" class="h-12">
        </div>
        <a href="#"
           class="px-6 h-10 flex items-center rounded-full bg-green-dark hover:bg-green-darker hover:shadow text-base text-white no-underline">
           Lorem Ipsum
        </a>
      </nav>
    </header>
    <section class="h-auto bg-green pb-12">
      <div class="container mx-auto flex">
        <div class="w-1/2">
          <h1 class="font-bold text-5xl text-white mb-8">Lorem ipsum dolor sit amet consectetur</h1>
          <p class="text-white leading-loose tracking-normal text-lg">Praesent mollis, massa in auctor molestie, magna lorem semper mauris, a venenatis turpis purus vel metus. Etiam sed iaculis libero, at euismod massa. Fusce in venenatis ligula.</p>
        </div>
        <div class="ml-auto">
          <img src="@/assets/hero-image.svg" alt="Product image" class="h-80">
        </div>
      </div>
    </section>
    <section class="h-auto bg-grey-lighter py-12"></section>
  </div>
</template>

<script>
export default {};
</script>
