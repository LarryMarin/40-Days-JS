//1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.
{
    var name;//TDZ for name, age, cat start here
    console.log('My name is ', name);//name hasnt been initialzed so cannot be used here plus this line is in names TDZ
    console.log('My age is ', age);//age hasnt been initialzed so cannot be used here plus this line is in age TDZ
    var age = 24;//age TDZ ends here 
    console.log('My age is ', age);//age can be used here
    var cat;
    console.log('My cats name is ', cat);//cat hasnt been initialzed so cannot be used here plus this line is in cats TDZ
    name = 'Larry';//end of name TDZ
    cat = 'Bob';//end of cat TDZ
}

//2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

myDog();
console.log('My dogs name is ', dog);

var dog;
dog = 'Tim';

console.log(dog, ' is a good boy');


function myDog()
{
    console.log('My dog is a husky.');
}

//With variable hoisting in the GEC in the CP dog will be allocated memory and will be initialized as undefined. In the EP console.log() will print out but it wont print out dog since it hasnt been initialized.
//After that dog is initialized with the name Tim. So the console.log() after the initialization can use the variable dog with the value Tim properly.
//With function hoisting in the GEC during CP the function myDog() is initialized and has memory allocated. During EP it will execute the function myDog() properly since it was initialzed and allocated memory properly.