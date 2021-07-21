<template>
  <a
    :href="link"
    class="
      w-full
      flex
      items-center
      justify-center
      p-3
      border border-transparent
      text-base
      font-medium
      rounded-md
    "
  >
    <fa :icon="[iconType, icon]" class="text-2xl" />
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
