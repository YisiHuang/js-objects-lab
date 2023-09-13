const aCar = {
    owner : 'Joe Bloggs',
    previous_owners: [
      { name: "Pat Smith", address: "1 Main Street"},
      { name: "Sheila Dwyer", address: " 2 High Street"}
    ],
    adress : '3 Walkers Lane',
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc : 1.8
    },
    registration : { year: 201, county: "WD", number: 1058},
    features : ['Parking assist', 'Alarm', 'Tow-bar']
};
console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log(
  "Reg. = " +
    aCar.registration.year + "-" +
    aCar.registration.county + "-" +
    aCar.registration.number
);

aCar.mileage = 10000
aCar.colour = {
  exterior: "red",
  interior: { texture: "leather", shade: "cream"}
}
console.log( 
            "It is a " 
            + aCar.colour.exterior + " car, " 
            + aCar.mileage + " mileage, with " 
            + aCar.colour.interior.texture + " interior."
)

console.log(
  "First owner: " +
  aCar.previous_owners[0].name + ' - ' 
  + aCar.previous_owners[0].address
)

for (let i = 0 ; i < aCar.features.length ; i += 1){
  console.log(aCar.previous_owners[i].name);
}

for (let p in aCar.type){
  console.log(p.toUpperCase() + ' = ' + aCar.type[p]);
}