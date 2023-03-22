<template lang="">
  <div>
    <h1>MunicipeList</h1>
    <MunicipeList :municipeList="municipeList"></MunicipeList>
  </div>
</template>

<script>
import api_instance from '../main'
import MunicipeList from '../components/MunicipeList.vue'

export default {
  components: {
    MunicipeList
  },

  data () {
      return {
        municipeList: []
      }
    },

    methods: {
      loadMunicipies () {
        api_instance.get('/municipies').then(response => {
          return this.municipeList = response.data
        })
      }
    },

    mounted () {
      this.loadMunicipies()
    }
}
</script>

<style lang="">
  
</style>