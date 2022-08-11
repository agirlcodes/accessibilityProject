$(document).ready(function(){
    const db_url = 'https://accessibilityproject.herokuapp.com/getData'
    $.getJSON(`${db_url}`, function(data){
        console.log(data)
    })
})