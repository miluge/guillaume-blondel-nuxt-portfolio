<template>
  <div class="hero h-[98vh] w-full flex flex-col px-32">
    <div class="flex flex-grow items-center justify-center h-full">
      <h1 class="text-5xl">Guillaume Blondel</h1>
    </div>
    <div class="flex h-32 w-full justify-between">
      <NuxtLink to="#">
        Github
      </NuxtLink>
      <NuxtLink to="#">
        Linkedin
      </NuxtLink>
      <NuxtLink to="#">
        Dribble
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
}
</script>

