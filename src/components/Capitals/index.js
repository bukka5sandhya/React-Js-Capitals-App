import './index.css'
import {Component} from 'react'

const countryList =[
    {
        id:'NEW DELHI',
        capitalDisplayText:'New Delhi',
        country:'India',

    },
    {
        id:'LONDON',
        capitalDisplayText:'London',
        country:'United Kingdom',
    },
    {
        id:'PARIS',
        capitalDisplayText:'Paris',
        country:'France',
    },
    {
        id:'KATMANDU',
        capitalDisplayText:'Kathmandu',
        country:'Nepal',
    },
    {
         id: 'HELSINKI',
        capitalDisplayText: 'Helsinki',
        country: 'Finland',

    }
]

class Capitals extends Component{
    state={activeCapitalId: countryList[0].id}

    onClickCapital = event => {
        this.setState({activeCapitalId: event.target.value})
    }

    getCountry = () => {
        const {activeCapitalId} = this.state

        const activeCountryAndCapital = countryList.find(
            eachCapital => eachCapital.id === activeCapitalId,
        )
        return activeCountryAndCapital.country
    }
    render(){
        const {activeCapitalId} = this.state
        const country =  this.getCountry(activeCapitalId)
        return(
            <div className="bg-container">
                <div className="inner-card">
                    <h1 className="heading">Countries and Capitals</h1>
                    <div className="questions-container">
                        <select
                        className="capitals-select-box"
                        onChange={this.onClickCapital}
                        value={activeCapitalId}
                        >
                            {countryList.map(eachCapital => (
                                <option key={eachCapital.id}
                                value={eachCapital.id}
                                className="option"
                                >
                                    {eachCapital.capitalDisplayText}
                                </option>
                            ))}
                        </select>
                        <p className="question">is capital of which Country?</p>
                    </div>
                    <p className="country">{country}</p>
                </div>
            </div>
        )
    }

}
export default Capitals