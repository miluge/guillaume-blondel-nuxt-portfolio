<template>
  <div>
    <Hero />
    <div class="text-2xl">
      <span class="overflow-hidden work">Let's work together !</span>
    </div>
    <section id="work">
      <div class="flex">
        <div></div>
        <div></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    mounted() {
      this.animateNav()
    },

    methods: {
      animateNav() {
        let tl = this.$gsap.timeline({
          scrollTrigger: {
            trigger: '.hero',
            pin: true,
            end: 'bottom',
            scrub: true
          }
        })
        tl.to('.title', {
            y: -10,
            duration: 0.5,
            ease: 'Power1.easeInOut',
          })
        .to('.label', {
          opacity: 0,
        })
      }
    }
  }
</script>

