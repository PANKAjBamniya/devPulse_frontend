const getDefaultTime = () => {
    const now = new Date()

    let hour = now.getHours()
    let minute = now.getMinutes()

    // Round to next 15 min slot
    if (minute < 15) minute = "15"
    else if (minute < 30) minute = "30"
    else if (minute < 45) minute = "45"
    else {
        minute = "00"
        hour += 1
    }

    let period = hour >= 12 ? "PM" : "AM"
    hour = hour % 12 || 12

    return {
        hour: String(hour).padStart(2, "0"),
        minute: minute,
        period,
    }
}
