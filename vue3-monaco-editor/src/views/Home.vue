<template>
  <div class="about-content">
    <div id="monacoEditorId" style="height: 300px; width:100%"></div>
  </div>
</template>

<script>
  import * as monaco from 'monaco-editor'
  let model

  export default {
    name: 'About',
    components: {
    },
    setup () {

    },
    mounted () {
      model = monaco.editor.create(document.getElementById('monacoEditorId'), {
        language: "sql",
        fontSize: 16,
        theme: "vs-dark",
        automaticLayout: true,
        accessibilityHelpUrl: "https://next.yearning.io",
      })
      console.log(111, model)
    },
    onUnmounted () {
      model.dispose()
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about-content {
    color: #7265e6;
  }
</style>