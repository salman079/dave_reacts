const redux = required('redux');
const sotre = redux.createStore;

console.clear();
console.log("salman");
const createPolicy = (name, amount) => {
    return(
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    );
};

