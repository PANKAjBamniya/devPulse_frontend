export const getNextPostDate = (schedule) => {
    if (!schedule || !schedule.time) return null

    const now = new Date()
    const next = new Date()

    let hour = parseInt(schedule.time.hour)
    if (schedule.time.period === "PM" && hour !== 12) hour += 12
    if (schedule.time.period === "AM" && hour === 12) hour = 0

    next.setHours(hour)
    next.setMinutes(parseInt(schedule.time.minute))
    next.setSeconds(0)

    if (next <= now) {
        next.setDate(next.getDate() + 1)
    }

    return next
}

export const getCountdown = (date) => {
    if (!date) return "--:--:--"

    const diff = date - new Date()
    if (diff <= 0) return "00:00:00"

    const h = String(Math.floor(diff / 3600000)).padStart(2, "0")
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0")
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0")

    return `${h}:${m}:${s}`
}
