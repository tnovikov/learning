/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//$(document).ready(function(){
//    $('#but').click(function(event){
//alert('lef');
//    });
//});
$(document).ready(function () {
    $('input[type="button"]').click(function () {
        
        firstInput = $('#div-2 input');
        secondInput = $('#div-1 input');
        
        $('#div-1').prepend(firstInput);
        
        $('#div-2').prepend(secondInput);
    });
});
 