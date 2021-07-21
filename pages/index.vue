<template>
  <div>
    <h1
      class="
        text-4xl
        tracking-tight
        font-extrabold
        text-center
        sm:text-5xl
        md:text-6xl
        lg:text-5xl
        xl:text-6xl
      "
    >
      <span class="block xl:inline dark:text-white">{{
        $config.landing.title
      }}</span>
      <!-- space -->
      <span class="block text-indigo-600 xl:inline">{{
        $config.landing.title2
      }}</span>
    </h1>
    <p
      class="
        mt-3
        max-w-md
        mx-auto
        text-lg text-gray-500
        dark:text-gray-200
        sm:text-xl
        md:mt-5 md:max-w-3xl
      "
    >
      {{ $config.landing.subtitle }}
    </p>
    <div class="mt-10 sm:flex justify-center">
      <div class="rounded-md shadow">
        <a
          href="#"
          class="
            w-full
            flex
            items-center
            justify-center
            px-8
            py-3
            border border-transparent
            text-base
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            md:py-4 md:text-lg md:px-10
          "
        >
          Get started
        </a>
      </div>
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <a
          href="#"
          class="
            w-full
            flex
            items-center
            justify-center
            px-8
            py-3
            border border-transparent
            text-base
            font-medium
            rounded-md
            text-indigo-600
            bg-white
            hover:bg-gray-50
            md:py-4 md:text-lg md:px-10
          "
        >
          Live demo
        </a>
      </div>
    </div>
  </div>
</template>
