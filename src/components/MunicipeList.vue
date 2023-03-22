<template lang="">
  <el-row>
    <el-col>
      <table>
        <thead>
          <tr>
            <th v-for="tableLabel in tableLabels" :key="tableLabel.id">
              {{ tableLabel }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="municipe in municipeList" :key="municipe.id">
            <th>{{ municipe.name }}</th>
            <th><img :src="municipe.photo" width=100 alt=""></th>
            <th>{{ municipe.cpf }}</th>
            <th>{{ municipe.cns }}</th>
            <th>{{ municipe.email }}</th>
            <th>{{ municipe.status }}</th>
            <th>
              <el-row class="action-buttons">
                <el-col>
                  <el-button type="primary" size="small">Edit</el-button>
                  <el-button size="small">Remove</el-button>
                </el-col>
              </el-row>
            </th>
          </tr>
        </tbody>
      </table>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    props: ['municipeList'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="css">
</style>