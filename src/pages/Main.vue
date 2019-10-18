<template>
  <a-spin :spinning="!onLoad">
    <div class="mainWrap">
      <div class="mainLeftWrap"></div>
      <div class="mainCenterWrap"></div>
      <div class="mainRightWrap"></div>
      <a-modal title="页面配置" v-model="configModal" @ok="configModal = false">
        <pre>{{ JSON.stringify(config, null, 2) }}</pre>
      </a-modal>
    </div>
  </a-spin>
</template>

<script>
export default {
  name: "Main",
  components: {},
  data() {
    return {
      onLoad: false,
      viewFrame: null,
      edit: false,
      editKey: "",
      editProps: {},
      config: {},
      configModal: false
    };
  }
};
</script>

<style lang="less">
.mainWrap {
  display: flex;
  flex-direction: row;
  height: 100vh;

  .mainLeftWrap {
    flex: 0 0 350px;
    display: flex;
  }
  .mainCenterWrap {
    flex: 1;
    background-color: #eee;
    min-width: 500px;
    display: flex;
  }
  .mainRightWrap {
    flex: 0 0 350px;
    display: flex;
  }
}
</style>
