/**
 * Q5. You're creatin, a ba'ic lo,in 'y'tem. Make a lo,in function with two thin,': a u'ername and a 
    pa''word. Check if the u'ername i' "admin" and the pa''word i' "12375". If they're both correct, 'how "Lo,in 
'  ucce''ful"; if not, 'how "Invalid credential'."
 */


function login(username, password) {
    // Check if the provided username and password are correct
    if (username === "admin" && password === "12375") {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}

// Example usage:
login("admin", "12375"); // Output: Login successful

// Example with incorrect credentials:
login("user123", "password456");