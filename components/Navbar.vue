<template>
  <nav id="nav" class="bg-transparent fixed h-36 w-full fixed py-5 px-14">
    <div class="w-full flex justify-between">
      <NuxtLink to="/about">
        <span class="block title">G.</span>
        <span class="block pt-4 label overflow-hidden">Me, myself & I </span>
      </NuxtLink>
      <NuxtLink to="/work">
        <span class="block title">Work</span>
        <span class="block pt-4 label overflow-hidden">Case Study</span>
      </NuxtLink>
      <NuxtLink to="/contact">
        <span class="block title">Contact me</span>
        <span class="block pt-4 label overflow-hidden">Let's talk</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
module.exports = {
  mounted() {
    this.animateNav()
  },

  methods: {
    animateNav() {
      let tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#main',
          pin: true,
          pinSpacing: false,
          end: 200,
          scrub: true
        }
      })
      tl
        .to('.label', {
          opacity: 0,
          y: -20,
          duration: 1
        })
        .to('.title', {
          y: -10,
          duration: 0.5,
          ease: 'Power1.easeInOut',
        })
    }
  }
}
</script>
