let notImportantIcon = "fa-regular fa-bookmark";
let importantIcon = "fa-solid fa-bookmark";
let isImportant = false;
let isVisible = true;
function  toggleImportant(){
    if(isImportant){
        isImportant = false;
        $("#formIcon").removeClass(importantIcon).addClass(notImportantIcon);
    }else{
        isImportant = true;
        $("#formIcon").removeClass(notImportantIcon).addClass(importantIcon);
    }
    
}


function toggleView(){
    if(isVisible){
        isVisible = false;
        // $("#form").hide();
        $("#form").slideUp();
    }
    else{
        isVisible = true;
        // $("#form").show();
        $("#form").slideDown();
    }
}

function saveTask(){
    let title = $("#txtTitle").val();
    let desc = $("#txtDescription").val();
    let category = $("#selCategory").val();
    let dueDate = $("#selDueDate").val();
    let priority = $("#selPriority").val();
    // constructor(isImportant, title, description, category, dueDate, priority){
    let task = new Task(isImportant,
                        title, 
                        desc, 
                        category, 
                        dueDate, 
                        priority);

    $.ajax({
        type: 'POST',
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(task),
        contentType: 'application/json',
        
        success: function(res){
            console.log(res);
            displayTask(task);
        },
        error: function(error){
            console.log(error);
        }
    })
                        
}

function displayTask(task){
    let icon =  task.isImportant 
                ? `<i class="important-task ${importantIcon}"></i>`
                : `<i class="regular-task ${notImportantIcon}"></i>`;
    let syntax = `
        <div class="task" style="border 2px solid;">
            <h3 style="text-align:center;">${task.title}</h3>
            <div class="info">
                <h6>${task.description}</h6>
                <h6>${task.category}</h6>
                <h6>${task.dueDate}</h6>
                <h6>${task.isImportant}</h6>
                <h6>${task.priority}</h6>
            </div>
        </div>
    `;

    $("#pending-task").append(syntax);
}

function loadTask(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success:  function(res){
            let data = JSON.parse(res);
            console.log(data);
            for(let task of data){
                displayTask(task);
            }
        },
        error: function(error){
            $("#pending-task").html("<h5 style='color:red;'>Unexpected error :(</h5>");
        }
    });
}

function init(){
    loadTask();
    $("#toggleView").click(toggleView);
    $("#formIcon").click(toggleImportant);
    $("#btnSave").click(saveTask);
}

window.onload = init;
