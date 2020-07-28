import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { DatePicker } from '@material-ui/pickers'
import './index.scss'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#b4b2b2' },
  },
})

class Picker extends React.Component {
  render() {
    // checkInOut true：In；false：Out
    const { selectedDate, checkInOut, handleDateChange } = this.props

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
          />
        </ThemeProvider>
        {checkInOut ? (
          <label id={selectedDate ? 'isValue' : 'checkInOut'} htmlFor="in">
            <i className="material-icons">event_available</i>
            Check in
          </label>
        ) : (
          <label id={selectedDate ? 'isValue' : 'checkInOut'} htmlFor="out">
            <i className="material-icons">event_busy</i>
            Check out
          </label>
        )}
      </div>
    )
  }
}

export default Picker
