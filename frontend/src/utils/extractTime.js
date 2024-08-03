export function extractTime(dateString) {
	const date = new Date(dateString);
	let hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
    const merediem = hours<12 || hours == 24;
    hours = hours % 12 || 12;
	return `${hours}:${minutes} ${merediem? "AM" :"PM"}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}