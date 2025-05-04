/*
. You are building a weather application. Write a JavaScript program that takes the current temperature 
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the 
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".
*/

function TemperatureCondition(temperature) {
    const weatherCondition = temperature > 30 ? "Hot" : "Moderate";
    console.log(`The weather condition is: ${weatherCondition}`);
}

// Example usage:
TemperatureCondition(25);  //  Moderate"
TemperatureCondition(35);  //  Hot"


let temperature  = 15;  //Temperature hot

temperature >=30?console.log('Hot'): console.log('The weather is : RoomTemperature')



function WeatherCondition(temperature){
    if (temperature > 30) {
        console.log('The weather condition is : Hot')
    }else{
        console.log('The weather conditiom is : Moderate')
    }
}

WeatherCondition(40);  // Moderate // hot
WeatherCondition(5);  //Hot // moderate