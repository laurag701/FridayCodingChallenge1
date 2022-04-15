let message = "Hello";

if(message === message.toLowerCase()) {
    console.log('Please speak up! your message was in all lowercase');
}
else if(message === message.toUpperCase()) {
    console.log("PLEASE STOP YELLING!! your message was in all uppercase");
}
else {
    console.log("What a pleasant volume");
}