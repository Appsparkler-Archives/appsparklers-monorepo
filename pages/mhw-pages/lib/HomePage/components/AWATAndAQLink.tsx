function getLastThursdayDate(): Date {
	const today = new Date();
	const dayOfWeek = today.getDay();

	if (dayOfWeek === 4) {
		// 4 represents Thursday in JavaScript's Date object
		return today;
	}

	const daysToSubtract = (dayOfWeek - 4 + 7) % 7;

	if (daysToSubtract < 0) {
		throw new Error(
			"Days to subtract is negative. This is a bug and should not happen.",
		);
	}

	const lastThursday = new Date(today);
	lastThursday.setDate(today.getDate() - daysToSubtract);

	if (lastThursday === null) {
		throw new Error(
			"Last Thursday's date is invalid. This is a bug and should not happen.",
		);
	}

	return lastThursday;
}

const offsetISOTime = (date: Date): Date => {
	const offset = date.getTimezoneOffset();
	return new Date(date.getTime() - offset * 60 * 1000);
};

const getDateInISOFormat = (date: Date) =>
	date.toISOString().split("T")[0].split("-").reverse().join("-");

const latestThursday = getDateInISOFormat(offsetISOTime(getLastThursdayDate()));

export const AWATAndAQLink = () => {
	return (
		<a
			href={`https://heartfulness.org/magazine/a-word-a-thought-a-question/${latestThursday}`}
			target="_blank"
			className="btn btn-primary w-full rounded-none h-auto p-2" rel="noreferrer"
		>
			Read A Word, A Thought And A Question
		</a>
	);
};
