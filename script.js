var options = {
    buttons: {
        confirm: {
            text: 'Okie',
            className: 'blue',
            action: function(e) {
                $('#custom-response').html('You clicked the "Okie" button! You said: "' + e.input + '"');
                console.log(e);
                Apprise('close');
            }
        },
    },
    input: true,
};


function addNew() {
    prompt('Please add a brief description of the new animal.');
    Apprise('Please add a brief description of the new animal.', options);
};