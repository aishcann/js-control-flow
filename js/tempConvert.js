function tempConvert(temp) {
    
    let temperature = temp
    let conversion = "k"
    let convertedTemp

    if (conversion === "c") {
        convertedTemp = (temperature - 32) * (5/9)
        console.log(`${temperature} degrees Fahrenheit is ${convertedTemp}`)
    }
    if (conversion === "k") {
      convertedTemp = (temperature - 32) * (5 / 9) + 273.15
      console.log(`${temperature} degrees Fahrenheit is ${convertedTemp}`);
    }
}

tempConvert(75)