$(document).ready(function() {

    //Add note before a specific note
    const addNoteBefore = () => {
        let allNotes = $("#displayBoard p");
        let noteNum = parseInt($("#createNoteNum").val());
        let noteContent = $("#noteText").val();

        let lastLine = allNotes.eq(noteNum - 1);

        let finalNote = $(`<p class="note">${noteContent}</p>`)
        finalNote.css({"background-color": "#f0e68c"})

        if ( allNotes.length == 0 || noteNum > allNotes.length) {
            $(finalNote).appendTo("#displayBoard");
        }

        else {
            lastLine.before(finalNote);
        }
    };

    $("#addNoteBeforeButton").click(addNoteBefore);



    //Add note after a specific note
    const addNoteAfter = () => {
        let allNotes = $("#displayBoard p");
        let noteNum = parseInt($("#createNoteNum").val());
        let noteContent = $("#noteText").val();

        let lastLine = allNotes.eq(noteNum - 1);

        let finalNote = $(`<p class="note">${noteContent}</p>`)
        finalNote.css({"background-color": "#f0e68c"})

        if (allNotes.length == 0) {
            $(finalNote).append("#displayBoard");

        } 
        
        else {
            lastLine.after(finalNote);
        }
    };

    $("#addNoteAfterButton").click(addNoteAfter);
    



    //Temporarily remove a note
    let storedNote;
    const tempDelete = () => {
        let noteNum = parseInt($("#deleteNoteNum").val() - 1);
        let selectedNote = $("#displayBoard p:eq(" + noteNum + ")");
        storedNote = selectedNote.detach();
    };

    $("#tempDeleteButton").click(tempDelete);


    //Restore the last temporarily deleted note
    const restoreNote = () => {
        $(storedNote).appendTo("#displayBoard");
    };

    $("#restoreButton").click(restoreNote);


    //Remove a note completly
    const permDelete = () => {
        let noteNum = parseInt($("#deleteNoteNum").val() - 1);
        let selectedNote = $("#displayBoard p:eq(" + noteNum + ")");
        selectedNote.remove();
    };

    $("#permDeleteButton").click(permDelete);


    //Clear the entire board
    const clearBoard = () => {
        $("#displayBoard").empty();
    };

    $("#clearAll").click(clearBoard);


    //Add class to a note
    const addImportantClass = () => {
        let noteNum = parseInt($("#styleNoteNum").val() - 1);
        let selectedNote = $("#displayBoard p:eq(" + noteNum + ")");
        selectedNote.addClass("important");
    };
    
    $("#markNote").click(addImportantClass);


    
    //Remove a class from a note
    const removeImportantClass = () => {
        let noteNum = parseInt($("#styleNoteNum").val() - 1);
        let selectedNote = $("#displayBoard p:eq(" + noteNum + ")");
        selectedNote.removeClass("important")
    }

    $("#unMarkNote").click(removeImportantClass);
    


    //Activate pulse animation for notes
    const pulseAnimation = () => {
        $(".note")
        .fadeTo(200, 0.8)
        .fadeTo(200, 0.5)
        .fadeTo(200, 0.3)
        .fadeTo(200, 0.5)
        .fadeTo(200, 0.8)
        .fadeTo(200, 1);
    };

    $("#animate").click(pulseAnimation);


});