$(document).ready(function(){


    function newListItem(){
    
        let input =  $('#newToDo').val();

        if(input){
            let doneButton = ('<button type=button class="doneButton">&#10003</button>');
            let deleteButton = ('<button type=button class="deleteButton" >x</button>');
        
            $("#myUL").append('<li>'+ input + doneButton + deleteButton +'</li>');             
            }
            else{
                alert("Give a name to the item");
            }

    }

        
    $("#addButton").on('click', () => {
                newListItem();           
                $("#newToDo").val('');
    }),

    $('ul').on('click', 'button.deleteButton', function () {
        $(this).parent().remove();
    }),

    $('ul').on('click', 'button.doneButton', function() {
        $(this).parent().css("text-decoration", "line-through");
        $(this).parent().css("color", "#ec524b");
    })
    

})



