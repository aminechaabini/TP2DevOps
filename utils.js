export function getFormattedDate(date) {
    if (!(date instanceof Date)) {
        throw new Error("Invalid date");
    }
    return date.toLocaleDateString(); 
}

export function getFormattedTime(date) {
    if (!(date instanceof Date)) {
        throw new Error("Invalid date");
    }
    return date.toLocaleTimeString();  
}

