const month = "feb"

switch (month) {
    case "jan":
        console.log("31 days");                
        break;
    case "feb":
        console.log("28 or 29 days");                
        break;
    case "mar":
        console.log("31 days");                
        break;// If we remove break then it will execute all statement except default
    case "april":
        console.log("30 days");                
        break;

    default:
        break;
}