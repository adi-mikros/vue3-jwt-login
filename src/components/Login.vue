<template>
 <div class="container">
        <div class="row content">
            <div class="col-md-6">
                <img src="../assets/img.svg" alt="login" class="img-fluid">
            </div>
            <div class="col-md-6">
                <h3 class="signin-text mb-3">Masuk</h3>
                <form class="justify-content-center">
                    <div class="form-group">
                        <label for="usernama">Nama Pengguna</label>
                        <input type="text" name="usernama" class="form-control mb-3">
                    </div>
                    <div class="form-group">
                        <label for="pass">Kata Sandi</label>
                        <input type="text" name="pass" class="form-control mb-3">
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="ch" id="ch" class="form-check-input"> 
                        <label for="ch" class="form-check-label"> &nbsp;Ingat Saya</label>
                    </div> 
                    <button class="btn btn-class mt-3">Masuk</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style>
body {
    font-family: "Montserrat", sans-serif;
    /* background-color: #00ac96; */
}
.content{
    margin: 10%;
    background-color: #fff;
    padding: 4em 1em 4em 1em;
    box-shadow: 10px 10px 10px 0 rgba(0,0,0, 0.3);
}

.signin-text{
    font-style: normal;
    font-weight: 600!important;
}

.form-control{
    display:block;
    width:100%;
    font-size:1em;
    font-weight: 400;
    line-height: 1.5;
    border-color:#00ac96 !important;
    border-style: solid !important;
    border-width: 0 0 1px 0 !important;
    padding: 0px !important;
    color:#495057;
    height: auto;
    border-radius: 0;
    background-color: #fff;
    background-clip: padding-box;
}

.form-control:focus{
    color:#495057;
    background-color: #fff;
    border-color: #fff;
    outline: 0;
    border-width: 0 0 2px 0 !important;
    box-shadow: none;
}

.btn-class{
    border-color: #00ac96;
    color: #00ac96;
}

.btn-class:hover{
    background-color: #00ac96;
    color: #fff;
}
</style>