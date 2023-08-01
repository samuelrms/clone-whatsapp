import { dateFormat, locale, timeFormat } from "@/constants/localeDate";

export const calculateTime = (inputDateStr: string): string => {
    const inputDate = new Date(inputDateStr);
    const currentDate = new Date();

    if (
        inputDate.getUTCDate() === currentDate.getUTCDate() &&
        inputDate.getUTCMonth() === currentDate.getUTCMonth() &&
        inputDate.getUTCFullYear() === currentDate.getUTCFullYear()
    ) {
        const amPmTime = inputDate.toLocaleTimeString(locale, timeFormat);
        return amPmTime;
    } else if (
        inputDate.getUTCDate() === currentDate.getUTCDate() - 1 &&
        inputDate.getUTCMonth() === currentDate.getUTCMonth() &&
        inputDate.getUTCFullYear() === currentDate.getUTCFullYear()
    ) {
        return "Yesterday";
    } else if (
        Math.floor((currentDate.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24)) > 1 &&
        Math.floor((currentDate.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24)) <= 7
    ) {
        const timeDifference = Math.floor((currentDate.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24));
        const targetDate = new Date();

        targetDate.setDate(currentDate.getDate() - timeDifference);

        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const targetDay = daysOfWeek[targetDate.getDay()];
        return targetDay;
    } else {
        const formattedDate = inputDate.toLocaleDateString(locale, dateFormat);
        return formattedDate;
    }
};
