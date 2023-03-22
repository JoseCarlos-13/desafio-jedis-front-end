<template lang="">
  <el-row>
    <el-col>
      <el-form id='municipe-form'>
        <el-row class="form-row">
          <el-form-item label="Full name">
            <input class="input" :v-model="municipe.full_name" placeholder="Please input" />
          </el-form-item>
          <el-form-item label="Email">
            <input class="input" :v-model="municipe.email" placeholder="Please input" />
          </el-form-item>
        </el-row>

        <el-row class="form-row">
          <el-form-item label="CPF">
            <input class="input" :v-model="municipe.cpf" placeholder="Please input" />
          </el-form-item>
          <el-form-item label="CNS">
            <input class="input" :v-model="municipe.cns" placeholder="Please input" />
          </el-form-item>
          <el-form-item>
            <input type='file' :v-model="municipe.photo" />
          </el-form-item>
        </el-row>

        <el-row class="form-row">
          <el-form-item label="CEP">
            <input class="input" :v-model="municipe.address_attributes.cep" placeholder="Please input" />
          </el-form-item>
          <el-form-item label="Public place">
            <input class="input" :v-model="municipe.address_attributes.public_place" placeholder="Please input" />
          </el-form-item>
        </el-row>

        <el-row class="form-row">
          <el-form-item label="Complement">
            <input class="input" :v-model="municipe.address_attributes.complement" placeholder="Please input" />
          </el-form-item>
          <el-form-item label="City">
            <input class="input" :v-model="municipe.address_attributes.city" placeholder="Please input" />
          </el-form-item>
        </el-row>

        <el-row class="form-row">
          <el-form-item label="Uf">
            <input class="input" :v-model="municipe.address_attributes.uf" placeholder="Please input" />
          </el-form-item>
          <el-form-item label="IBGE code">
            <input class="input" :v-model="municipe.address_attributes.ibge_code" placeholder="Please input" />
          </el-form-item>
          <el-form-item label="Neighborhood">
            <input class="input" :v-model="municipe.address_attributes.neighborhood" placeholder="Please input" />
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item>
            <el-button @click="createMunicipe()">Send</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ['municipe', 'createMunicipe']
}
</script>

<style lang="css">

#municipe-form {
  display: flex;
  width: 600px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid black;
  padding: 50px;
  margin: 0 auto;
}

.input {
    width: 200px !important;
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }

  .form-row {
    display: flex;
    justify-content: center;
  }
</style>