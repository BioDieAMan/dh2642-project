import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLocalCovidNews } from "../../redux/actions/covidNewsActions";
import {
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
  Container,
} from "@mui/material";

const LocalNewsFeed = ({
  data,
  loading,
  getLocalCovidNews,
  currentCountry,
}) => {
  useEffect(() => {
    currentCountry && getLocalCovidNews();
  }, [currentCountry]);

  return (
    <Container>
      <Container>
        <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
          Covid News
        </Typography>
      </Container>

      {loading ? (
        <CircularProgress />
      ) : !data ? (
        <Container>No data</Container>
      ) : (
        data.map((article) => (
          <a href={article.url} rel="noreferrer" target="_blank">
            <Card className="newsCard">
              <CardActionArea>
                <CardMedia
                  className="newsImage"
                  component="img"
                  height="100"
                  image={
                    article.image
                      ? article.image.thumbnail.contentUrl
                      : "https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF"
                  }
                />

                <CardContent className="newsContent">
                  <Typography
                    className="newsTitle"
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {article.name}
                  </Typography>
                  <Typography
                    className="newsDescription"
                    variant="body2"
                    color="text.secondary"
                  >
                    {article.description}
                  </Typography>
                  <Typography
                    className="newsProvider"
                    variant="body2"
                    color="text.secondary"
                  >
                    {article.provider[0].name}
                  </Typography>
                  <Typography
                    className="newsDate"
                    variant="body2"
                    color="text.secondary"
                  >
                    {article.datePublished.slice(0, 10)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        ))
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.covidNews.localCovidNews,
    loading: state.covidNews.loading,
    currentCountry: state.country.currentCountry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLocalCovidNews: () => dispatch(getLocalCovidNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalNewsFeed);
