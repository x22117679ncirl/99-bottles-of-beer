/* Mario Petrizzelli
99 Bottles of Beer HTML & JS
19 11 2022
*/

function sing() {
    var bootles = 99;
    var msg = "";

    while (bootles >= 0) {
        if (bootles == 0) {
            msg = "</br> No more bottles of beer on the wall, no more bottles of beer </br> Go to the store and buy some more, 99 bottles of beer on the wall </br>";
            document.getElementById("main").innerHTML += msg
        } else if (bootles == 1) {
            msg = "</br>" + bootles + " bottle of beer on the wall, " + bootles
                + " bottle of beer </br>Take one down and pass it around, no more bottles of beer on the wall </br>";
            document.getElementById("main").innerHTML += msg
        } else if (bootles > 1) {
            msg = "</br>" + bootles + " bottles of beer on the wall, " + bootles
                + " bottles of beer </br>Take one down and pass it around, " + (bootles - 1)
                + " bottles of beer on the wall </br>";
            document.getElementById("main").innerHTML += msg
        }
        bootles--;
    }
}
