/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    $('span.baloonLink').click(function(event){

        thisJQuery = $(this);
        alert(thisJQuery);
        dataId = thisJQuery.attr('data-asd');
        alert(dataId); // first / second
        cssSelector = 'div.baloon[data-asd="' + dataId + '"]';
        alert(cssSelector);
        
//        baloon = $('div.baloon[data-asd="first"]');
//        baloon = $('div.baloon[data-asd="second"]');
        baloon = $(cssSelector);
        
        topCoordinate = event.pageY;
        alert(topCoordinate);
        leftCoordinate = event.pageX;
        alert(leftCoordinate);
        
        baloon.css('top', topCoordinate);
        baloon.css('left', leftCoordinate);
        baloon.show();
        baloon.fadeIn();
    });
});