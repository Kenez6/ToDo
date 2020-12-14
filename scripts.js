var counter = 1

function newListItem(){
    var newListItem = $("#newToDo").val();
    var DONEbuttonID = 'DONEbutton'+counter;
    var DELbuttonID = 'DELbutton'+counter;
    var listItemID = 'li'+counter
    var doneButton = ('<button type=button class="doneButton" id='+DONEbuttonID+'>&#10003</button>');
    var deleteButton = ('<button type=button class= "deleteButton" id='+DELbuttonID+'>X</button>');
    $("#myUL").append('<li id='+listItemID+'>'+ newListItem + doneButton + deleteButton +'</li>');
    $('#'+DELbuttonID).on('click', () => {
        $('#'+listItemID).remove();
    });
    $('#'+DONEbuttonID).on('click', () => {
        $('#'+listItemID).css("text-decoration", "line-through")
        $('#'+listItemID).css("color", "#ec524b")
    });
    
    return counter = counter +1;
}

$("#addButton").on('click', () => {
    newListItem();
    document.getElementById("newToDo").value = "";
});




