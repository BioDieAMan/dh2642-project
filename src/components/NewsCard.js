import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GlobalNewsFeed = ({ data, loading, getGlobalCovidNews }) => {
  useEffect(() => {
    getGlobalCovidNews();
  }, []);

  const articledata = data.map(article);

  function NewsCard({ articledata }) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image
          src={article.image.thumbnail.contentUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" a href={article.url}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
};
export default NewsCard;
