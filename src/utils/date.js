/**
 * Format time to HH:MM
 *
 * @param string
 * @returns {string}
 */
export const formatTime = (string) => {
    const parsed = Date.parse(string)
    const date = new Date(parsed)
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    return `${hours}:${minutes}`
}
