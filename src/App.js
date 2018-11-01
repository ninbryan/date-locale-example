/* eslint-disable */
import Component from '@reactions/component'
import ReactJson from 'react-json-view'
import { Columns, Column } from 'react-flex-columns'
import './App.css'

const handleDateChange = (setState) => ({ target: { value } }) => setState({ date: value })

function App() {
  return (
    <div className="App">
      <h1>Date Locale String</h1>

      <Component
        initialState={{ date: '2012-05-07' }}
        render={({ state, setState }) => (
          <Columns>
            <Column flex>
              <div>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  value={state.date}
                  onChange={handleDateChange(setState)}
                />
              </div>
            </Column>

            <Column flex>
              <ReactJson src={state} />
            </Column>
          </Columns>
        )}
      />
    </div>
  )
}

export default App
