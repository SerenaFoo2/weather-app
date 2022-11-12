import React from 'react'

function dateBuilder (props) {
    
    const dateInput = (todayDate) => {
        let months = [
          "January",
          "Febuary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
    
        let days = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];
    
        
        let day = days[todayDate.getDay()];
        let date = todayDate.getDate();
        let month = months[todayDate.getMonth()];
        let year = todayDate.getFullYear();
    
        return (`${day} ${date} ${month} ${year}`
        )
      };

      return (
        // <div className="location">
        //         {props.weather.name}, {props.weather.sys.country}
        //       </div>
        <div> {dateInput(new Date())}</div>
      )
}

export default dateBuilder;