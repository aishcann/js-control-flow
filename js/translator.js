function translator(code) {
    let language = code

    if (language === 'es') {
        console.log('Hola Mundo')
    }
    if (language === 'en') {
        console.log('Hello World')
    }
    if (language === 'fr') {
        console.log("Bonjour le monde");
    }
}

translator('en')