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
$(document).ready(function(){
    $( "#but").click(function(){
$( '#div-1' ).prepend( $('#div-2 input') );
$( '#div-2' ).prepend( $('#div-1 input') );
    });
});
 