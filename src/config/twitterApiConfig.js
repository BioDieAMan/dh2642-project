const TWITTER_API_KEY = "VvFirUSQLa73UZ8il3ezdOjXP";
const TWITTER_API_KEY_SECRET =
  "vuCu2vDwZ10NViFYmsupAxIKVd4i5pyINPyfROwfGrNjyJb7vs";
const TWITTER_API_BEARER_TOKEN =
  "AAAAAAAAAAAAAAAAAAAAALaOWAEAAAAAUL%2Bj4L24CQXNQbD3ROAsc0Z9kzY%3Dryy59yYIQX5VW2HpJjyIHNzQhUaNT3JIrB7NVomwbL7XUg4I09";

const twitterConfig = {
  header: {
    Authorization: TWITTER_API_BEARER_TOKEN,
  },
  Url: "https://api.twitter.com/2/tweets/search/recent?query=from:folkhalsomynd",
};

export default twitterConfig;
