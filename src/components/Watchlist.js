/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentData, setCountry } from '../redux/actions/countryActions'
import { Card, CardContent, CardActions, Typography, Button, CircularProgress } from '@mui/material'
import Carousel from 'react-material-ui-carousel';
import millify from "millify"


const Watchlist = ({
    uid,
    watchlist,
    currentData,
    listOfCountries,
    getCurrentData,
    setCountry,
    loadingCurrent
}) => {
    useEffect(() => {
        watchlist.forEach(country => getCurrentData(country))
    }, [watchlist]);

    if (!uid) {
        return (
            <Card className='watchlistCard'>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Log in to add countries to your watchlist and display them on the homepage
                    </Typography>
                </CardContent>
            </Card>
        )
    }

    if (watchlist === undefined || watchlist.length <= 0) {
        return (
            <Card className='watchlistCard'>
                <CardActions>
                    <CardContent>
                        <Button size="small" component={Link} to="/account">
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Watchlist is empty, you can add countries to watchlist by pressing this card.
                            </Typography>
                        </Button>
                    </CardContent>
                </CardActions>
            </Card>
        )
    }

    return (
        <div>
            {!listOfCountries || !watchlist ?
                <div></div> :
                <div>
                    <Carousel className='watchlist' stopAutoPlayOnHover={true} interval={5000} animation={"slide"} navButtonsAlwaysVisible={true}
                        navButtonsProps={{ style: { backgroundColor: "#6271a3", opacity: 0.2 } }}
                    >
                        {watchlist.map(wKey => {
                            return (
                                <Card
                                    key={wKey}
                                    className='watchlistCard'>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                            {listOfCountries[wKey]}
                                        </Typography>

                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom component={"span"}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Confirmed cases: </td>
                                                        <td className='textRight'>{loadingCurrent[wKey] ? <CircularProgress /> : !currentData[wKey] ? "" : millify(currentData[wKey].confirmed)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vaccinated: </td>
                                                        <td className='textRight'>{loadingCurrent[wKey] ? <CircularProgress /> : !currentData[wKey] ? "" : millify(currentData[wKey].vaccinated)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Deaths: </td>
                                                        <td className='textRight'>{loadingCurrent[wKey] ? <CircularProgress /> : !currentData[wKey] ? "" : millify(currentData[wKey].deaths)}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" component={Link} to="/details"
                                            onClick={() => setCountry(wKey)}
                                        >
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            )
                        })}
                    </Carousel>

                    <Link to="/account">Modify watchlist</Link>
                </div>
            }
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid,
        watchlist: state.watchlist.watchlist,
        currentData: state.country.currentData,
        listOfCountries: state.country.listOfCountries,
        loadingCurrent: state.country.loadingCurrent
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentData: (country) => dispatch(getCurrentData(country)),
        setCountry: (country) => dispatch(setCountry(country))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);