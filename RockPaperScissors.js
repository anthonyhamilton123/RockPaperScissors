function computerPlay(){
    arr = ['Rock','Paper','Scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

console.log(computerPlay())