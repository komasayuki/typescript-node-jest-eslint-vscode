/* eslint-disable @typescript-eslint/no-unused-vars */
// interface vs type alias

// single vs double
const singleQuotesString = 'singleQuotes';  // correct
const doubleQuotesString = "doubleQuotes";  // incorrect

// No semicolon at EOL
console.log('no semi-colon')  // incorrect


// var vs let vs const
var variableVar = undefined;            // incorrect
let variableLet = undefined;            // correct
const variableConst = undefined;        // correct


// Upper camel case
class className {                       // incorrect, ClassName is correct
    variable: number;
    constructor() {
        this.variable = 0;
    }
}

interface propsA {                      // incorrect, PropsA is correct
    first: string,
    second: number,
    third: boolean
}

type propsB = {                         // incorrect, PropsB is correct
    first: string,
    second: number,
    third: boolean
}


// Camel case
const first_second_third = 'fourth';    // incorrect
const fifthSixth = 'seventh';           // correct
const _eighthNinth = 'tenth';           // correct
const eleventhTwelfth_ = 'thirteenth';  // correct
const FOURTEEN = 'FIFTEEN';             // incorrect

const first_function = (): boolean => {          // incorrect
    return false;
};
const secondFunction = (): boolean => {          // correct
    return false;
};


// comma-dangle (always multiline)
const commaDangle1 = { a: 'a', b: 'b', c: 'c' };  // correct
const commaDangle2 = {
    a: 'a',
    b: 'b',
    c: 'c'                              // incorrect
};


// Braces of if/for/do/while statement
if (variableVar !== undefined)          // incorrect
    console.log('not undefined');
else {                                  // correct
    console.log('undefined');
}


// Ternary operator
variableVar !== undefined ? console.log('not undefined') : console.log('undefined');


// eqeqeq
if (variableVar == 'eqeqeq1') {         // warning
    console.log('eqeqeq1');
}
else if (variableVar === 'eqeqeq2') {   // correct
    console.log('eqeqeq2');
}


// function style
function notArrowFunction(): void {      // incorrect
    console.log('not arrow function');
};

const foo = function (): void {         // correct
    console.log('not arrow function');
};

const arrowFunction = (): void => {     // correct
    console.log('arrow function');
};


// type any of argument and return value
const undefinedTypeFunction = (arg) => {    // warning
    console.log('undefined type function', arg);
};

const anyTypeFunction = (arg: any) => {    // warning
    console.log('undefined type function', arg);
};

const undefinedReturnTypeFunction = (arg: any) => {    // warning
    console.log('undefined type function', arg);
    return false;
};
