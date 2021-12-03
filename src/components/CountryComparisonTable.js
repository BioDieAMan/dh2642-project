import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getCurrentData } from '../redux/actions/countryActions';

const CountryComparisonTable = ({
    selectedCountries,
    listOfCountries,
    loadingCurrent,
    currentData,
    
}) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                </tr>
                {selectedCountries.map(scKey => 
                    <tr>
                        <td>{listOfCountries[scKey]}</td>
                        <td>{loadingCurrent ?
                            <p>loading...</p>:
                            currentData[scKey] ? 
                                currentData[scKey].confirmed:
                                <p>No data!</p>}
                        </td>
                        <td>{loadingCurrent ?
                            <p>loading...</p>:
                            currentData[scKey] ? 
                                currentData[scKey].deaths:
                                <p>No data!</p>}
                        </td>
                    </tr>
                )}

            </table>


            {/* // <div className="countryContainer">{Object.keys(countries).map(cKey =>
            //     <div className={selectedCountries.some(scKey => scKey === cKey) ? "selectedCountryItem":"countryItem"}>
            //         {watchCountries.some(wcKey => wcKey === cKey)?
            //             <span className="countryStar" onClick={() => removeWatchCountry(cKey)}>&#9733; </span>:
            //             <span className="countryStar" onClick={() => addWatchCountry(cKey)}>&#9734; </span>
            //         }

            //         {selectedCountries.some(scKey => scKey === cKey)?
            //             <span className="countryText" key={countries[cKey]} value={cKey} onClick={() => removeSelectedCountry(cKey)}>{countries[cKey]}</span>:
            //             <span className="countryText" key={countries[cKey]} value={cKey} onClick={() => addSelectedCountry(cKey)}>{countries[cKey]}</span>
            //         }
            //     </div>
            //     )}
            // </div> */}

        </div >
    )
}

const mapStateToProps = state => {
    return {
        selectedCountries: state.country.selectedCountries,
        listOfCountries: state.country.listOfCountries,
        currentData: state.country.currentData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryComparisonTable)