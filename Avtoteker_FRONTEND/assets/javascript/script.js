let LastData =  '#result'
let same = 'container-fluid mt-2'
let active = ' active'


$('.Searchbtn').on('click',function(){
    $(LastData).attr('class',same);
    LastData = $(this).data('value')
    $(LastData).attr('class',same + ' active')
    
})