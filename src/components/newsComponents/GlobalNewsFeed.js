import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getGlobalCovidNews } from '../../redux/actions/covidNewsActions';
import { Typography, Card, CardActions, CardActionArea, CardContent, CardMedia, Button } from "@mui/material";

const GlobalNewsFeed = ({
    data,
    loading,
    getGlobalCovidNews
}) => {
    useEffect(() => {
        getGlobalCovidNews()
    }, [])

    return (
        <div>
            <Typography variant="h6" align="left" color="textPrimary" gutterBottom>Covid News</Typography>

            {loading?
            <div>Loading</div>:
            !data?
                <div>No data</div>:
                data.map(article =>
                    <Card className="newsCard">
                        <CardActionArea>
                                <CardMedia
                                    className="newsImage"
                                    component="img"
                                    height="100"
                                    image={article.image?
                                        article.image.thumbnail.contentUrl:
                                        "https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF"
                                    }
                                />
                        
                            <CardContent className="newsContent">
                                <Typography className="newsTitle" gutterBottom variant="h6" component="div">{article.name}</Typography>
                                <Typography className="newsDescription" variant="body2" color="text.secondary">{article.description}</Typography>
                                <Typography className="newsProvider" variant="body2" color="text.secondary">{article.provider[0].name}</Typography>
                                <Typography className="newsDate" variant="body2" color="text.secondary">{article.datePublished.slice(0, 10)}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.covidNews.globalCovidNews,
        loading: state.covidNews.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getGlobalCovidNews: () => dispatch(getGlobalCovidNews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalNewsFeed)
