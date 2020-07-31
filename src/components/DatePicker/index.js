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
    const {selectedDate, checkInOut, handleDateChange, minDate} = this.props

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
              if (['2020/08/14', '2020/08/20'].includes(format(date, 'yyyy/MM/dd'))) {
                return (
                  <div id={'gggggggggggggggg'}>
                    {dayComponent}
                  </div>)
              }

              return dayComponent
            }}
          />
          <
            /ThemeProvider>
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
