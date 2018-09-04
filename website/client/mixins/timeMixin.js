export default {
  methods: {
    timeOfDayArr: function () {
      let timeMinutes = 0 // Start at 12 am
      let timeHours = 0 // Start at 12 am
      let timesArr = []
      while (timeHours != 24) {
        while (timeMinutes != 60) {
          let timeText = null
          let prefix = timeHours > 11 ? " PM" : " AM"
          let timeMinutesStr = timeMinutes.toString().padStart(2, '0')          
          if (timeHours == 0) {
            timeText = "12:"+ timeMinutesStr + prefix
          } else if (timeHours > 12) {
            let timeHoursStr = (timeHours - 12).toString().padStart(2, '0')
            timeText = timeHoursStr + ":" + timeMinutesStr + prefix
          } else {
            let timeHoursStr = timeHours.toString().padStart(2, '0')
            timeText = timeHoursStr + ":" + timeMinutesStr + prefix
          }
          const timeObj = {
            time: timeText, value: timeHours.toString().padStart(2, '0') + ":" + timeMinutesStr
          }
          timesArr.push(timeObj)
          timeMinutes += 15
        }
        timeHours += 1
        timeMinutes = 0
      }
      return timesArr.reverse()
    },

    timeDurations: function () {
      let timeMinutes = 15
      let timeHours = 0
      let timesArr = []
      while (timeHours != 24) {
        while (timeMinutes != 60) {
          const hourStr = timeHours === 1? ' hour ' : ' hours '
          const timeText = timeHours + hourStr + timeMinutes + " minutes"
          const timeValue = timeHours.toString().padStart(2, '0') + ':' + timeMinutes.toString().padStart(2, '0')
          const timeObj = {
            time: timeText,
            value: timeValue
          }
          timesArr.push(timeObj)
        timeMinutes += 15          
        }
        timeHours += 1
        timeMinutes = 0
      }
      return timesArr
    }
  }
}