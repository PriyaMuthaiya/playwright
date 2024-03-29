/* 
1) Javascript File Name: 01_learn.js
 
    Objective: Learn Primitive Data Types
 
    Create the following variables using var and check their typeOf
 
    a) firstName
    b) companyName
    c) mobileNumber
    d) isAutomation
    e) hasPlaywright (do not assign)
 
    print and confirm the values and data types

 */
/*
    let firstName="priya"
    console.log(typeof firstName)

    let companyName="Testleaf"
    console.log(typeof companyName)

    let mobileno=98778768768768
    console.log(typeof mobileno)

    let isAutomation=true
        console.log(typeof isAutomation)

    let hasPlaywright
    console.log(hasPlaywright);

    /* 
    Use same Javascript File Name: 01_learn.js
 
    Objective: Learn var vs let vs const and understand variable scoping
 
    Declare a const name as browserName (global)
    Assign value as "Chrome"
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works
 
    - function how to write and how to call
    - basic if condition and block variable
    - let vs var
    */




    const browsername='chrome'
    function getBrowserVersion(browserVersion){

        if(browsername=='chrome'){
            let browserVersion=1.2
        }
     console.log(browserVersion)
    }

    console.log(getBrowserVersion())
