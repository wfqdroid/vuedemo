<template>
  <div>
    <h1>This is Demo3 Page</h1>
    <el-input v-model="mValue"></el-input>
    <el-button @click="getValue">GET</el-button>
  </div>
</template>

<script>
import axiox from "axios";
export default {
  data() {
    return {
        mValue:''
    };
  },
  mounted() {
  },
  methods: {
      getValue(){
          window.alert(this.mValue)
      }
  }
};
</script>
