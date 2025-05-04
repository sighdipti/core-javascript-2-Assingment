/*
You are workin, on an e-commerce platform. Write a JavaScript program that take' the payment 
method ("credit", "debit", or "paypal") a' input and use a switch statement to determine and print the 
proce''in, fee a''ociated with each payment method. For example, "credit" may have a proce''in, fee of 
2%, "debit" 1.5%, and "paypal" 3%.

*/

function calculateProcessingFee(paymentMethod) {
    let processingFee;

    switch (paymentMethod.toLowerCase()) {
        case "credit":
            processingFee = 2;
            break;
        case "debit":
            processingFee = 1.5;
            break;
        case "paypal":
            processingFee = 3;
            break;
        default:
            console.log("Invalid payment method");
            return;
    }

    console.log(`Processing fee for ${paymentMethod} payment is  ${processingFee}%`);
}

const paymentMethod = prompt ("Enter payment method (credit, debit, or paypal):");

calculateProcessingFee('credit');
calculateProcessingFee('debit');
calculateProcessingFee('paypal');
calculateProcessingFee('cash');