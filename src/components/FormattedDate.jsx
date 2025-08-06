import React from 'react';

const dateStyle = {
    fontFamily: "KyivType Titling",
    fontWeight: 500,
    fontSize: 24,
    color: "#C8C8C8"
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

const getLastDigit = (day) => day.toString().slice(-1);

const getDaySuffix = (digit) => {
        switch (digit) {
            case "1":
                return "st";
            case "2":
                return "nd";
            case "3":
                return "rd";
            default:
                return "th";
        }

    }

const formattedDayOfMonth = (day) => {
        const exceptions  = [11, 12, 13];
        
        if (exceptions.includes(day)) {
            return `${day}th`
        }

        const lastDigit = getLastDigit(day)
        const suffix = getDaySuffix(lastDigit)

        return `${day}${suffix}`
    }


const FormattedDate = () => {
    const date = new Date();
    const formattedDayName = days[date.getDay()]
    const formattedMonthName = months[date.getMonth()]
    const dayOfMonth = date.getDate();
    const formattedDay = formattedDayOfMonth(dayOfMonth);

    return (
        <div style={dateStyle}>
            <span>{`${formattedDayName} ${formattedMonthName} ${formattedDay}`}</span>
        </div>
    );
};

export default FormattedDate;