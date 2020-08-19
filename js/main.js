/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    $('.baloonLink').click(function(event){
        
        thisJQuery = $(this);
        dataId = thisJQuery.attr('data-id');
        cssSelector = '.baloon[data-id="' + dataId + '"]';
        topCoordinate = event.pageY;
        leftCoordinate = event.pageX;
        
        alert(thisJQuery);
        alert(dataId);
        alert(cssSelector);
        alert(topCoordinate);
        alert(leftCoordinate);
        
        baloon = $(cssSelector);
        baloon.css('top', topCoordinate);
        baloon.css('left', leftCoordinate)
//        baloon.show();
        baloon.fadeIn();
    });
});