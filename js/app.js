let letterA = document.getElementsByTagName(`td`).item(0);
let letterB = document.getElementsByTagName(`td`).item(1);
let letterC = document.getElementsByTagName(`td`).item(2);
let letterD = document.getElementsByTagName(`td`).item(3);

window.onload  = () => {
    letterA.addEventListener(`click`, () => {
        letterA.className = `rotater`;

        if(letterA.click() === true)
            letterA.className = `reseter`;

        if(letterB.className === `rotater`)
            letterB.className = `rev-rotater`;

        if(letterC.className === `rotater`)
            letterC.className = `rev-rotater`;

        if(letterD.className === `rotater`)
            letterD.className = `rev-rotater`;


    });

    letterB.addEventListener(`click`, () => {
        letterB.className = `rotater`;

        if(letterC.className === `rotater`)
            letterC.className = `rev-rotater`;

        if(letterD.className === `rotater`)
            letterD.className = `rev-rotater`;

        if(letterA.className === `rotater`)
            letterA.className = `rev-rotater`;


        if(letterB.className === `rev-rotater`)
            letterB.className = `reseter`;
    });

    letterC.addEventListener(`click`, () => {
        letterC.className = `rotater`;

        if(letterC.className === `rev-rotater`)
            letterC.className = `reseter`;

        if(letterB.className === `rotater`)
            letterB.className = `rev-rotater`;

        if(letterD.className === `rotater`)
            letterD.className = `rev-rotater`;

        if(letterA.className === `rotater`)
            letterA.className = `rev-rotater`;



    });

    letterD.addEventListener(`click`, () => {
        letterD.className = `rotater`;

        if(letterB.className === `rotater`)
            letterB.className = `rev-rotater`;

        if(letterC.className === `rotater`)
            letterC.className = `rev-rotater`;

        if(letterA.className === `rotater`)
            letterA.className = `rev-rotater`;

        if(letterD.className === `rev-rotater`)
            letterD.className = `reseter`;
    });
};
