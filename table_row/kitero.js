const object = {}
if(object > 5){
    object.name = "nev"
}
else{
    object["name"] = "Jaffar"
}

console.log(object);
console.log(object["name"]);
if(object.age == undefined){}
if(object.age == null){}
if(object.age === null){}
object.age = null;
if(object.age){}
if(!object.age){}