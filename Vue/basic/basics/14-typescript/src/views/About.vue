<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Header title="hello" age="23" :name="name"></Header>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Header from './Header.vue'

@Component({
  components: {
    Header
  }
})
export default class extends Vue {
  private name: string = 'bbb'
}
</script>
