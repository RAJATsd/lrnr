const Obj = {
    a : null,
    b:null,
    c:{
        d:null,
        e:null
    }
};


const newObj = {...Obj,['c']:{ ...Obj['c'] ,['e']:1}};
console.log(newObj);
