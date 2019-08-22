<template>
  <div>
    <div ref="jsoneditor" style="width: 80%; height: 90vh;"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "demo2",
  data() {
    return {};
  },
  methods: {
    getDataWithName() {
      let data = {
        name: "wfq",
        age: 22
      };
    }
  },
  mounted() {
    var container = this.$refs.jsoneditor;
    var options = {
      mode: "tree",
      modes: ["code", "form", "text", "tree", "view", "preview"], // allowed modes

      onError: function(err) {},
      onModeChange: function(newMode, oldMode) {
        console.log("Mode switched from", oldMode, "to", newMode);
      },
      onEditable: function(node) {
        return false;
      }
    };
    var editor = new JSONEditor(container, options);
    axios.get("https://api.github.com/users/wfqdroid/repos").then(res => {
      editor.set(res.data);
    });
    // maxios.get('json/jsoneditor.json').then(res => {
    //     console.error(res.data)
    // })
  }
};
</script>

<style scoped>
</style>