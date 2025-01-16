<template>
      <div
    class="z-40 fixed items-center justify-center w-full h-screen flex flex-col"
  >
    <h1 class="text-center text-5xl font-bold mt--24">
      {{ header }}
    </h1>
    <h3 class="text-center text-xl font-regular">
        {{ subheader }}
    </h3>
    <RouterLink to="/about">
      <button
        type="button"
        class="bg-black text-white py-2 px-4 rounded-lg mt-4 text-center mx-auto"
      >
        {{ buttonText }}
      </button>
    </RouterLink>
  </div>
</template>
<script>

export default {
    name: 'Hero',
    props: {
        header: {
            type: String,
            required: true
        },
        subheader: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        }
    }
}

</script>