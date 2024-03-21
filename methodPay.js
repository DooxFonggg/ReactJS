function getPaymentMethod(name) {
    if (name = "Paypal") {
        return <li className = {
            "payment-method" + "option-" + name
        } > name < /li>
    }
    if (name = "Card") {
        return <li className = {
            "payment-method" + "option-" + name
        } > name < /li>
    }
}

// sample usage (do not modify)
console.log(getPaymentMethod("Card"));
console.log(getPaymentMethod("Paypal"));