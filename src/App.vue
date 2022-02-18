<template>
  <div id="app">
    <Page />
  </div>
</template>

<script>
import Page from "./views/Page.vue";

export default {
  name: 'app',
  components: {
    Page,
  },
};
</script>

<style>

/* || [browser-classes] || Classes were taken from BROWSER to hide the scroll bar. || (⛴) Codeship || NOTE || */

/*.el-table--scrollable-x .el-table__body-wrapper {*/
/*  overflow-x: hidden;*/
/*}*/

/* || [browser-classes] || ------------------------------------------------------ || (⚓) Codeship || NOTE || */

/*
.el-main {
  padding: 15px;
}*/

</style>
