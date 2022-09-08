function age(x) {

    let age = x

    if (age < 1) {
        console.log("infant")
    }
    if (1 <= age && age < 5 ) {
        console.log("toddler")
    }
    if (5 <= age && age <= 10) {
      console.log("child");
    }
    if (11 <= age && age <= 12) {
      console.log("preteen");
    }
    if (13 <= age && age <= 18) {
      console.log("teen");
    }
    if (19 <= age && age < 21) {
      console.log("young adult");
    }
}

age(20)