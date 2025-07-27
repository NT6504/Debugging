function createFunctionList() {
    let functions = [];
    // Using 'let' ensures 'i' is block-scoped to each iteration
    for (let i = 0; i < 5; i++) {
        functions.push(function () {
            console.log("Index:", i);
        });
    }
    return functions;
}

const functionList = createFunctionList();

console.log();
functionList[0]();    
functionList[1]();    
functionList[2]();   
functionList[3]();    
functionList[4]();    


