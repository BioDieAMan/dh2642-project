/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentData, getListOfCountries } from '../redux/actions/countryActions'
import { Grid, Card, CardContent, CardActions, Typography, Button, CircularProgress } from '@mui/material'
import Carousel from 'react-material-ui-carousel';
import { height } from '@mui/system'
import millify from "millify"


const Watchlist = ({
    uid,
    watchlist,
    currentData,
    listOfCountries,
    getListOfCountries,
    getCurrentData,
    loadingCurrent
}) => {
    useEffect(() => {
        !listOfCountries && getListOfCountries();
        watchlist.forEach(country => getCurrentData(country))
    }, []);

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

    return (
        <div>
            {!listOfCountries || !watchlist ?
                <div></div> :
                loadingCurrent ? <CircularProgress /> :
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
                                                            <td>{currentData[wKey]?.confirmed}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Vaccinated: </td>
                                                            <td>{currentData[wKey]?.vaccinated}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Deaths: </td>
                                                            <td>{currentData[wKey]?.deaths}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                )
                            })}
                        </Carousel>

                        <Link to="/account">Modify watchlist</Link>
                    </div>


                // <div>
                //     {watchlist.map(country => (
                //         <div>
                //             {listOfCountries[country]}<br />
                //             {/* {loadingCurrent ? <CircularProgress /> : currentData[country].deaths} */}
                //         </div>
                //     ))}
                //     <Link to="/account">Modify watchlist</Link>
                // </div>
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
        getListOfCountries: () => dispatch(getListOfCountries()),
        getCurrentData: (country) => dispatch(getCurrentData(country))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);

