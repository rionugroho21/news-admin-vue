<template>
  <div id="app">
    <div>
      <app-aside></app-aside>
      <div id="right-panel" class="right-panel">
        <app-header></app-header>
        <app-breadcrumbs></app-breadcrumbs>
        <div class="content mt-3">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppAside from './component/Aside';
import AppHeader from './component/Header';
import AppBreadcrumbs from './component/Breadcrumbs';

export default {
  name: 'app',
  components: {
    AppAside,
    AppHeader,
    AppBreadcrumbs
  }
}
</script>

<style lang="scss">
#app > div{
  display: table;
  width: 100%;
  overflow: hidden;
}
</style>
