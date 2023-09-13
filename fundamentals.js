const aCar = {
    owner : 'Joe Bloggs',
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc : 1.8
    },
    registration : { year: 201, county: "WD", number: 1058}
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
console.log( "It is a " 
            + aCar.colour.exterior + " car, " 
            + aCar.mileage + " mileage, with " 
            + aCar.colour.interior.texture + " interior.")