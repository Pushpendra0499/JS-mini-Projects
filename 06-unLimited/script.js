// ganerate a random color

const randomColor =function(){
    const hex ="012345678ABCDEF";
    let color ='0';
    for (let i = 0;i < 6;i++) {
        color +=hex[Math.floor(Math.random() * 16)];
    }
    return color

};
//console.log(randomColor());
    

/// last Timming 5:00:00 API request and v8 engine