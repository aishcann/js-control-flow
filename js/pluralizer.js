function pluralizer(animal, number) {
    let thing = animal
    let count = number

    if (count === 1) {
        console.log(count + " " + thing)
    } else {
        console.log(count + " " + thing + "s")
    }
}

pluralizer("lion", 3)