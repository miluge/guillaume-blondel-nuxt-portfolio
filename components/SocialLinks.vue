<template>
  <div class="flex justify-center space-x-10 py-12">
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
