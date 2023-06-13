function receivesAFunction (spy){
    spy();
}

function returnsANamedFunction(){
    return function namedFunction () {
        return(namedFunction);
    }

};

function returnsAnAnonymousFunction() {
 return() => anonymousFunction;
}