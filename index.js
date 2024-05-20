  let output = document.querySelector(".output")
    let number = 0;
    let sign = ''
    let screen = ''



    // numbers

    document.querySelector('.one').addEventListener('click', (event) => {
        number = 1
        screen += number
        exceedLimit()
        output.textContent = screen

    })

    document.querySelector('.two').addEventListener('click', (event) => {
        number = 2
        screen += number;
        exceedLimit()
        output.textContent = screen
    })

    document.querySelector('.three').addEventListener('click', (event) => {
        number = 3
        screen += number;
        exceedLimit()
        output.textContent = screen
    })

    document.querySelector('.four').addEventListener('click', (event) => {
        number = 4
        screen += number;
        exceedLimit()
        output.textContent = screen
    })

    document.querySelector('.five').addEventListener('click', (event) => {
        number = 5
        screen += number;
        exceedLimit()
        output.textContent = screen
    })

    document.querySelector('.six').addEventListener('click', (event) => {
        number = 6
        screen += number
        exceedLimit()
        output.textContent = screen
    })

    document.querySelector('.seven').addEventListener('click', (event) => {
        number = 7
        screen += number
        exceedLimit()
        output.textContent = screen
    })

    document.querySelector('.eight').addEventListener('click', (event) => {
        number = 8
        screen += number;
        exceedLimit()
        output.textContent = screen
    })

    document.querySelector('.nine').addEventListener('click', (event) => {
        number = 9
        screen += number
        exceedLimit()
        output.textContent = screen
    })

    document.querySelector('.zero').addEventListener('click', (event) => {
        number = 0
        screen += number
        exceedLimit()
        output.textContent = screen
    })


    // signs 

    document.querySelector('.add').addEventListener('click', (event) => {

        sign = '+'
        screen += sign;
        exceedLimit()
        output.textContent = screen
    })


    document.querySelector('.subtract').addEventListener('click', (event) => {
        sign = '-'
        screen += sign;
        exceedLimit()
        output.textContent = screen
    })


    document.querySelector('.multiply').addEventListener('click', (event) => {
        sign = '*'
        screen += sign;
        exceedLimit()
        output.textContent = screen
    })


    document.querySelector('.divide').addEventListener('click', (event) => {
        sign = '/'
        screen += sign;
        exceedLimit()
        output.textContent = screen
    })


    document.querySelector('.equal-to').addEventListener('click', (event) => {
        screen = eval(screen)
        exceedLimit()

        output.textContent = screen;
    })

    document.querySelector('.clear').addEventListener('click', (event) => {
        screen = "";

        output.textContent = 0;
    })

    // limit function

    function exceedLimit() {
        if (screen.length === 12) {
            alert('you cant exceed this limit')
            screen = screen.slice(0, -1)
        }
        return screen
    }

    window.addEventListener('keydown', (event) => {
        console.log(event.key);

        if (event.key === '1') {

            number = 1
            screen += number
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '2') {
            number = 2
            screen += number
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '3') {
            number = 3
            screen += number
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '4') {
            number = 4
            screen += number
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '5') {
            number = 5
            screen += number
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '6') {
            number = 6
            screen += number
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '7') {
            number = 7
            screen += number
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '8') {
            number = 8
            screen += number
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '9') {
            number = 9
            screen += number
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '0') {
            number = 0
            screen += number
            exceedLimit()
            output.textContent = screen
        }

        else if (event.key === '+') {
            sign = '+'
            screen += sign;
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '*') {
            sign = '*'
            screen += sign;
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '-') {
            sign = '-'
            screen += sign;
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === '/') {
            sign = '/'
            screen += sign;
            exceedLimit()
            output.textContent = screen
        }
        else if (event.key === 'Enter' || event.key === '=') {
            screen = eval(screen)
            output.textContent = screen
        }

        else if (event.key === 'c') {

            screen = ''
            output.innerHTML = '<div>0</div>';
            output.style.color = 'green'

        }
        else if (event.key === 'Backspace') {
            screen = screen.slice(0, -1)
            output.textContent = screen
        }
    })





    // function one() {
    //     calculation++;
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }
    // function two() {
    //     calculation += 2;
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }
    // function three() {
    //     calculation += 3;
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }
    // function four() {
    //     calculation += 4;
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }
    // function five() {
    //     calculation += 5;
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }
    // function six() {
    //     calculation += 6;
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }
    // function seven() {
    //     calculation += 7;
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }
    // function eight() {
    //     calculation += 8;
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }
    // function nine() {
    //     calculation += 9;
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }
    // function zero() {
    //     calculation += 0;
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }

    // function add() {
    //     calculation += " + ";
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }
    // function subtract() {
    //     calculation -= " - ";
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }

    // function equal() {
    //     calculation = eval(calculation)
    //     console.log(calculation);
    //     output.innerHTML = calculation
    // }





    let digits1 = 5;
    let digits2 = 55;


    let add = ''


    add = '+'
    // let gess = digits1
    // gess += add;
    // gess += digits2

    // gess = eval(gess)

    // console.log(gess);


    let result2 = Number(digits1) + add + Number(digits2);

    result2 = Number(result2)
    console.log(result2);

    // let result = eval(Number(digits1) + sign + Number(digits2))
    // console.log('result222', result2);
    let result = eval(digits1 + sign + digits2)
    console.log('result', result)
    // output.textContent = result