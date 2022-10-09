let Login = {
    module: () => {
        return "login";
    },

    moduleAPI: (param) => {
        return "api" + Login.module();
    },

    loginAPI: () => {
        return url.base_url("api/login");
    },

    registerAPI: () => {
        return url.base_url("api/register");
    },

    login: () => {
        window.location.href = url.base_url("login");
    },

    register: () => {
        window.location.href = url.base_url("register");
    },

    dataRegister: () => {
        return {
            "email": document.getElementById("useremail").value,
            "name": document.getElementById("username").value,
            "password": document.getElementById("password-input").value,
        };
    },

    dataLogin: () => {
        return {
            "name": document.getElementById("username").value,
            "password": document.getElementById("password-input").value,
        };
    },

    submitRegister: async (elm, e) => {
        console.log(Login.registerAPI());
        e.preventDefault();
        let params = Login.dataRegister();
        
        const data = await ajax.sendJSON('POST',Login.registerAPI(),params);
        if(data.status){
            Login.login()
        }else{
            console.log(data.message);
        }
        
    },

    submitLogin : async (elm, e) => {
        console.log(Login.loginAPI());
        e.preventDefault();
        let params = Login.dataLogin();
        
        const data = await ajax.sendJSON('POST',Login.loginAPI(),params);
        if(data){
            console.log(data);
        }else{
            console.log('error');
        }
        // if(data.status){
        //     Login.login()
        // }else{
        //     console.log(data.message);
        // }
        
    },
};
