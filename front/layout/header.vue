<template lang="html">
    <header class="container">

        <!-- logo wrapper -->
        <div class="logo-wrapper text-center">
          <h1>CRUD</h1>
        </div>

        <!-- nav -->
        <nav class="navbar navbar-expand-lg navbar-light">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item px-2">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/about">About</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/create">Créer un Projet</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/createClient">Créer un Salarié</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/createUser">Créer un Client<rojet/router-link>
                </li>
            </ul>
        </nav>

    </header>
</template>

<script>
export default {
}
</script>

<style lang="css">

.logo-wrapper img{
    max-width: 100px;
    padding: 40px 0;
}

.navbar a {
    text-transform: uppercase;
    color: black;
    font-weight: 500;
    font-size: 0.8rem;
    letter-spacing: 1px;
}

</style>
