<template>
<div class="w-100 my-4">
    <div class="p-3">
        <h2 class="display-3">Laravel + Vue.js <small class="text-muted">Express Mode</small></h2>
        <p class="lead text-muted">Develop Laravel & Vue.js application in 24 hours</p>
    </div>
    <div class="px-3 mb-3" v-if="this.$route.path != '/'">
        <div class="card text-muted">
            <div class="w-100 p-2">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <div class="d-flex flex-row bd-highlight p-3 mx-auto">
        <div class="card w-auto mr-3">
            <div class="card-body">
                <h5 class="card-title">User Registration</h5>
                <p class="card-text">User registeration process with Laravel & Vue.</p>
                <router-link to="/register" class="btn btn-primary rounded-pill">Register New User</router-link>
            </div>
        </div>
        <div class="card w-auto mr-3">
            <div class="card-body">
                <h5 class="card-title bold">User Authentication</h5>
                <p class="card-text">Authentication process with Laravel & Vue.</p>
                <router-link to="/login"   class="btn btn-primary rounded-pill" >Authenticate User</router-link>
            </div>
        </div>
        <div class="card w-auto">
            <div class="card-body">
                <h5 class="card-title">User Listing</h5>
                <p class="card-text">User listing with Laravel & Vue.</p>
                <router-link to="/user"  class="btn btn-primary rounded-pill">Users Listing</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data: function () {
            return {
            }
        },
        mounted() {
        },
        computed: {
            currentRoute: function() {
                return window.location.pathname
            }
        }
    }
</script>
