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
      <div class="grid grid-cols-4 gap-6">
        <SocialButton
          v-if="$config.social.twitter.enabled"
          class="text-white bg-brand-twitter hover:bg-brand-twitter opacity-50"
          icon="twitter"
          :link="$config.social.twitter.url"
        />
        <SocialButton
          v-if="$config.social.facebook.enabled"
          class="
            text-white
            bg-brand-facebook
            hover:bg-brand-facebook hover:opacity-90
          "
          icon="facebook-f"
          :link="$config.social.facebook.url"
        />
        <SocialButton
          v-if="$config.social.instagram.enabled"
          class="
            text-white
            bg-brand-instagram
            hover:bg-brand-instagram hover:opacity-90
          "
          icon="instagram"
          :link="$config.social.instagram.url"
        />
        <SocialButton
          v-if="$config.social.calendly.enabled"
          class="
            text-white
            bg-brand-calendly
            hover:bg-brand-calendly hover:opacity-90
          "
          icon="calendar"
          icon-type="fas"
          :link="$config.social.calendly.url"
        />
      </div>
    </div>
  </div>
</template>
