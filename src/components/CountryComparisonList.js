import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { getListOfCountries, addSelectedCountry, removeSelectedCountry, addWatchCountry, removeWatchCountry } from '../redux/actions/countryActions';
import { Input, Box, List, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const CountryComparisonToggle = ({
    countries,
    getListOfCountries,
    selectedCountries,
    addSelectedCountry,
    removeSelectedCountry,
    watchCountries,
    addWatchCountry,
    removeWatchCountry,
    
}) => {
    const [countryFilter, setCountryFilter] = useState("");

    useEffect(() => {
        if (countries)
            return;
        getListOfCountries()
    }, [])
    return (
        <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
            <Input  placeholder="Search for country..."
                    onChange={e => setCountryFilter(e.target.value)}
            />
            <div className="scrollBar">
                {!countries?
                    <List></List>:
                    <List>
                        {Object.keys(countries).map(cKey => countryFilter === ""?

                            <ListItemButton
                                selected={selectedCountries.some(scKey => scKey === cKey)}
                                onClick={() => selectedCountries.some(scKey => scKey === cKey)?removeSelectedCountry(cKey):addSelectedCountry(cKey)}
                            >
                                <ListItemText>{countries[cKey]}</ListItemText>

                                <ListItemButton sx={{ padding: '0', maxWidth: '24px' }}
                                                onClick={() => watchCountries.some(wcKey => wcKey === cKey)?removeWatchCountry(cKey):addWatchCountry(cKey)}>
                                    {watchCountries.some(wcKey => wcKey === cKey)?
                                        <StarIcon />:
                                        <StarBorderIcon />
                                    }
                                </ListItemButton>
                            </ListItemButton>:
                            
                            !(countries[cKey].toLowerCase().includes(countryFilter.toLowerCase()))?
                                <span></span>:
                                <ListItemButton
                                    selected={selectedCountries.some(scKey => scKey === cKey)}
                                    onClick={() => selectedCountries.some(scKey => scKey === cKey)?removeSelectedCountry(cKey):addSelectedCountry(cKey)}
                                >
                                    <ListItemText>{countries[cKey]}</ListItemText>

                                    <ListItemButton sx={{ padding: '0', maxWidth: '24px' }}
                                                    onClick={() => watchCountries.some(wcKey => wcKey === cKey)?removeWatchCountry(cKey):addWatchCountry(cKey)}>
                                        {watchCountries.some(wcKey => wcKey === cKey)?
                                            <StarIcon />:
                                            <StarBorderIcon />
                                        }
                                    </ListItemButton>
                                </ListItemButton>
                        )}
                    </List>
                }
            </div>
        </Box>
    )
}

const mapStateToProps = state => {
    return {
        countries: state.country.listOfCountries,
        selectedCountries: state.country.selectedCountries,
        watchCountries: state.country.watchCountries,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListOfCountries: () => dispatch(getListOfCountries()),
        addSelectedCountry: (country) => dispatch(addSelectedCountry(country)),
        removeSelectedCountry: (country) => dispatch(removeSelectedCountry(country)),
        addWatchCountry: (country) => dispatch(addWatchCountry(country)),
        removeWatchCountry: (country) => dispatch(removeWatchCountry(country)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryComparisonToggle)