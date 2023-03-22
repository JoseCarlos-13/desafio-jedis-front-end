<template>
  <el-row>
    <el-col>
      <h1>MunicipeFormScreen</h1>
      <MunicipeForm :municipe="municipe"
                    :createMunicipe="createMunicipe"></MunicipeForm>
    </el-col>
  </el-row>
</template>

<script>
import api_instance from '../main'
import MunicipeForm from '../components/MunicipeForm.vue'

export default {
  components: {
    MunicipeForm
  },

  data () {
    return {
      municipe: {
        full_name: '',
        cpf: '',
        cns: '',
        email: '',
        photo: '',
        address_attributes: {
          cep: '',
          public_place: '',
          complement: '',
          city: '',
          uf: '',
          ibge_code: '',
          neighborhood: ''
        }
      }
    }
  },

  methods: {
    createMunicipe () {
      api_instance.post('/municipies', { municipe: this.municipe }, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }).then(() => this.$router.push('/'))
      },
  }
}
</script>

<style lang="">
    
</style>