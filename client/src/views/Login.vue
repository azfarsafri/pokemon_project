<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-6">
                <h1 class="mb-4">Login</h1>
                <form @submit.prevent="login">
                    <div class="mb-3">
                    <label for="exampleInputName1" class="form-label"
                        >Name</label
                    >
                    <input
                        type="name"
                        class="form-control"
                        aria-describedby="nameHelp"
                        id="exampleInputName1"
                        v-model="name"
                    />
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"
                        >Password</label
                    >
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        v-model="password"
                    />
                    </div>
                    <button type="submit" class="btn nav-color" value="Login">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    name: "Login",
    data() {
        return {
            name: "",
            password: ""
        }
    },
    methods: {
        ...mapActions(["toLogin"]),
        async login(){
            try {
                await this.toLogin({
                    name: this.name,
                    password: this.password
                })
                this.$router.push({name: "Home"})
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style>

</style>