<?php

namespace App\Http\Controllers\web\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{

    public function getJs()
    {
        return array(
            'js-1' => asset('assets/js/controllers/auth/login.js'),
        );
    }

    public function login()
    {
        $put['js'] = $this->getJs();
        return view('Auth.login',$put);
    }

    public function register()
    {
        $put['js'] = $this->getJs();
        return view('Auth.register',$put);
    }
}
