<template>
  <div class="about">
    <h1>This is an about page</h1>
    <transition 
      name="bounce"
      enter-active-class="animate__animated animate__pulse"
      leave-active-class="animate__animated animate__headShake"
    >
      <div 
        v-if="show"
      >hello</div>
    </transition>
    <button @click="show = !show">show</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style lang="stylus" scoped>
// .fade-enter, .fade-leave-to
//   opacity 0

// .fade-enter-active, .fade-leave-active
//   transition opacity 1s ease-ins

// .bounce-enter-active
//   animation bounce-in 1s ease-in

// .bounce-leave-active
//   animation bounce-in 1s ease-in reverse

// @keyframes bounce-in {
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(1.5);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
</style>
