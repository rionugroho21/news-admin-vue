<template>
    <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">
            <div class="navbar-header">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <router-link to="/" class="navbar-brand"><img src="../assets/img/logo.png" alt="Logo" /></router-link>
                <router-link to="/" class="navbar-brand hidden"><img src="../assets/img/logo2.png" alt="Logo" /></router-link>
            </div>
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/"><i class="menu-icon fa fa-dashboard"></i>Dashboard </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'Aside'
}
</script>

<style>
</style>