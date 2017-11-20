// When size is submitted by the user, call makeGrid()
$('#button').click(function(evt) {
    makeGrid(evt);
});

function makeGrid(evt) {
    evt.preventDefault();

    // Clear old rows and columns
    $('#pixel_canvas').children().each(function() {
        this.remove();
    });

    // Get heigth and width values to create table
    let heigth = $('#input_height').val();
    let width = $('#input_width').val();

    // Create nested for to create rows and columns
    for (let i = 0; i<heigth; i++) {
        $('#pixel_canvas').append(`<tr id='row${i}'></tr>`);
        for (let j = 0; j<width; j++) {
            $(`#row${i}`).append('<td class="grid_column"></td>');
        }
    }

    // Create event delegation to all columns in grid
    $('#pixel_canvas').on('click', '.grid_column', function(evt) {
        let color = $('#colorPicker').val();
        $(evt.target).css('background', color);
    });
}
