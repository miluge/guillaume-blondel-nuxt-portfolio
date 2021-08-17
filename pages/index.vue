<template>
  <main id="main">
    <Hero />
    <div class="text-2xl zeubi h-[500px] overflow-hidden">
      <p class="work">Let's work together !</p>
    </div>
    <section id="portfolio" class="w-full">
      <div id="project1" class="flex">
        <div class="w-1/2 bg-white">
          <img class="scale-90" src="https://images.unsplash.com/photo-1610878785620-3ab2d3a2ae7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="">
        </div>
        <div class="flex flex-col w-1/2 bg-[#F93700]">
          <p class="max-w-[110px] text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, reprehenderit?</p>
          <p class="max-w-[110px] text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos dolor eaque eos facere, incidunt ipsum natus, nihil placeat porro praesentium quaerat quasi repellat, repudiandae sapiente sed temporibus vitae voluptatum.</p>
        </div>
      </div>
      <div id="project2" class="flex">
        <div class="flex flex-col w-1/2 bg-[#F93700]">
          <p class="max-w-[110px] text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, reprehenderit?</p>
          <p class="max-w-[110px] text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos dolor eaque eos facere, incidunt ipsum natus, nihil placeat porro praesentium quaerat quasi repellat, repudiandae sapiente sed temporibus vitae voluptatum.</p>
        </div>
        <div class="w-1/2 bg-white">
          <img class="scale-90" src="https://images.unsplash.com/photo-1610878785620-3ab2d3a2ae7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="">
        </div>
      </div>
    </section>
    <SocialLinks />
  </main>
</template>

<script>
export default {
    mounted() {
      this.animateText()
      this.animateFolio()
    },

    methods: {
      animateText() {
        this.$gsap.to('.work', {
          xPercent: 60,
          duration: 5,
          scrollTrigger: {
            trigger: '.zeubi',
            start: 100,
            scrub: true
          }
        })
      },

      animateFolio() {
        this.$gsap.to('img', { scale: 0.7,
          duration: 0.35,
          scrollTrigger: {
            trigger: '#project1',
            start: 425,
            end: 'center',
            scrub: true
          }
        })

        this.$gsap.to('img', { scale: 0.7,
          duration: 0.35,
          scrollTrigger: {
            trigger: '#project2',
            start: 125,
            end: 'center',
            scrub: true
          }
        })
      }
    }
  }
</script>

