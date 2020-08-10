/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function myfunction(){
    //  #testbtn
    $('#testbtn').click(function(){
        $('body h1').load('/part.html p a');
        
//        $('body h1').mouseenter(function(){
//            $('body h1').load('/part_1.html p');
//            
//            $('body h1').mouseleave(function(){
//                $('body h1').load('/part_2.html p');
//            });
//        });
    });
    
    
}

$(document).ready(myfunction);