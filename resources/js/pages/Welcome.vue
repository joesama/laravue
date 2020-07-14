<template>
<div class="w-100 my-4">
    <div class="p-3">
    <h2 class="display-3">Laravel + Vue.js <small class="text-muted">Express Mode</small></h2>
    <p class="lead text-muted">Develop Laravel & Vue.js application in 24 hours</p>
    </div>
    <div class="d-flex flex-row bd-highlight">
        <div class="card w-25 p-3 mx-3">
            <div class="card-body">
                <h5 class="card-title">Registration</h5>
                <p class="card-text">User registeration process with Laravel & Vue.</p>
                <a  class="btn btn-primary rounded-pill" to="/registration">Register New User</a>
            </div>
        </div>
        <div class="card w-25 p-3 mx-3">
            <div class="card-body">
                <h5 class="card-title bold">Authentication</h5>
                <p class="card-text">Authentication process with Laravel & Vue.</p>
                <a  class="btn btn-primary rounded-pill" href="/authentication">Authenticate User</a>
            </div>
        </div>
        <div class="card w-25 p-3 mx-3">
            <div class="card-body">
                <h5 class="card-title">User Management</h5>
                <p class="card-text">User management with Laravel & Vue.</p>
                <a  class="btn btn-primary rounded-pill" to="/user">Manage Users</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
