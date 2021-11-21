/*function to change table properties.
params(value): the received value by pressing the button
*/
function changeTable(value) {
    const table = document.getElementById('tableForChange');
    const buttons = document.querySelectorAll('[type="button"]');
    switch (value) {
        case 'style 1':
            table.style.fontFamily = 'Arial';
            table.style.fontSize = '25px';
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "#ADCA94";
            }
            break;
        case 'style 2':
            table.style.fontFamily = "Lucida Sans Unicode", "Lucida Grande";
            table.style.fontSize = '14px';
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "#b194ca";
            }
            break;
        case 'style 3':
            table.style.fontFamily = "Cursive";
            table.style.fontSize = '18px';
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "#685b73";
            }
            break;
        case '200px':
            table.style.height = '200px';
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.width = "100px";
                buttons[i].style.lineHeight = "4";
            }
            break;
        case '300px':
            table.style.height = '300px';
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.width = "170px";
                buttons[i].style.lineHeight = "6";
            }
            break;
        case '100px':
            table.style.height = '100px';
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.width = "100px";
                buttons[i].style.lineHeight = "3";
            }
            break;
        case 'solid':
            table.style.border = 'solid';
            break;
        case 'dotted':
            table.style.border = 'dotted';
            break;
        case 'ridge':
            table.style.border = 'ridge';
            break;
        default:
            alert("Нет таких значений");
    }
}