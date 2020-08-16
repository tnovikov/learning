/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function myfunction(){
    //  #testbtn
    $('#testbtn').click(function(){
        $('body .k').load('/part.html p a');
        
        $('body .k').mouseenter(function(){
            $('body .k').load('/part_1.html');
            
            $('body .k').mouseleave(function(){
                $('body .k').load('/part_2.html');
            });
        });
    });
    
    
}

$(document).ready(myfunction);