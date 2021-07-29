<template>
 <div class="container">
        <div class="row content">
            <div class="col-md-6">
                <img src="../assets/img.svg" alt="login" class="img-fluid">
            </div>
            <div class="col-md-6">
                <h3 class="signin-text mb-3">Daftar Sekarang!</h3>
                <form class="justify-content-center" @submit.prevent="kirimRegistrasi">
                    <div class="form-group">
                        <label for="usernama">Nama Pengguna</label>
                        <input type="text" name="usernama" v-model="usernama" class="form-control mb-3">
                    </div>
                     <div class="form-group">
                        <label for="usernama">Email</label>
                        <input type="email" name="usernama" v-model="email" class="form-control mb-3">
                    </div>
                    <div class="form-group">
                        <label for="pass">Kata Sandi</label>
                        <input type="text" name="pass" v-model="pass" class="form-control mb-3">
                    </div>
                   <div class="form-group">
                        <label for="pass">Isi Ulang Kata Sandi</label>
                        <input type="text" name="pass" v-model="passk" class="form-control mb-3">
                    </div>
                    <button class="btn btn-class mt-3">Registrasi</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Registrasi',
    data() {
        return{
            usernama: '',
            email: '',
            pass: '',
            passk: '',
        }
    },
    methods:{
        kirimRegistrasi(){
            const datae = {
                usernama: this.usernama,
                email: this.email,
                pass: this.pass,
                passk: this.passk,
            }
            console.log(datae);
        }
    }
}
</script>

<style>

</style>