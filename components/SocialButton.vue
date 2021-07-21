<template>
  <a
    :href="link"
    class="
      w-full
      flex
      items-center
      justify-center
      px-2
      py-2
      border border-transparent
      text-base
      font-medium
      rounded-md
    "
  >
    <fa :icon="[iconType, icon]" class="w-5 h-5 text-lg" />
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    iconType: {
      type: String,
      default: 'fab',
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
