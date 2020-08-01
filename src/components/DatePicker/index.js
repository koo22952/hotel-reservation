import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { DatePicker } from '@material-ui/pickers'
import './index.scss'
import { startOfTomorrow, addDays, format } from 'date-fns'

const theme = createMuiTheme({
  palette: {
    primary: {main: '#b4b2b2'}
  }
})

class Picker extends React.Component {

  render () {
    // checkInOut true：In；false：Out
    const {
      selectedDate, // 選擇的日期 (開始結束)
      checkInOut,   // true：In；false：Out
      handleDateChange, // fn
      minDate, // 結束日期最小可選擇日期，不會小於開始日期
      bookedDate = '' // 被預約的日期
    } = this.props

    return (
      <div id="date-picker">
        <ThemeProvider theme={theme}>
          <DatePicker
            id={checkInOut ? 'in' : 'out'}
            disableToolbar
            inputVariant="outlined"
            variant="inline"
            value={selectedDate}
            onChange={(val) => handleDateChange(val, checkInOut)}
            format="yyyy/MM/dd"
            autoOk
            animateYearScrolling
            maxDate={addDays(new Date(), 90)}
            minDate={checkInOut ? startOfTomorrow() : minDate ? minDate : startOfTomorrow()}
            renderDay={(date, selectedDate, dayInCurrentMonth, dayComponent) => {
              if (bookedDate.includes(format(date, 'yyyy/MM/dd'))) {
                return (
                  <div style={{textDecoration: 'line-through', textDecorationColor: 'rgba(0, 0, 0, 0.38)'}}>
                    {dayComponent}
                  </div>)
              }

              return dayComponent
            }}
            shouldDisableDate={(date) => bookedDate.includes(format(date, 'yyyy/MM/dd'))}
          />
        </ThemeProvider>
        {
          checkInOut ? (
            <label id={selectedDate ? 'isValue' : 'checkInOut'} htmlFor="in">
              <i className="material-icons">event_available</i>
              Check in
            </label>
          ) : (
            <label id={selectedDate ? 'isValue' : 'checkInOut'} htmlFor="out">
              <i className="material-icons">event_busy</i>
              Check out
            </label>
          )
        }
      </div>
    )
  }
}

export default Picker
