<template>
  <div id="app">
    <headerbar/>
    <router-view/>
  </div>
</template>

<script>
import { Headerbar } from '@/views/layout/components'

export default{
  name: 'App',
  components: {
    Headerbar
  }
}
</script>
