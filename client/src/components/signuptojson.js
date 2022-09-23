import Signup from "./components/signup";
'use strict';

jQuery.noConflict();
jQuery(document).ready(function($) {
    $('.myForm').formToJson('result-json')
});