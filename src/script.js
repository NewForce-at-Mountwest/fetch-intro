let allTheFoods = "";
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    // .then(function(foodResponse){
    //     return foodResponse.json()
    // })
    .then(parsedFoods => {
        console.log(parsedFoods);
        parsedFoods.forEach(singleFood => {
            console.log(singleFood);
        })
        // for(let i = 0; i < parsedFoods.length; i++){
        //     console.log("This is a food", parsedFoods[i]);
        // }
    })
    // .then(function(foodsThatMakeSense){
    //     console.log(foodsThatMakeSense);
    // })

    function returnSum(num1, num2){
        return num1 + num2;
    }

    const returnSumWithFatArrow = (num1, num2) => num1 + num2;

  console.log("Hello, world");
 

  