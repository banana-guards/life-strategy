export default () => ({
  clientID: `${process.env.CLIENT_ID}`,
  clientSecret: `${process.env.CLIENT_SECRET}`,
  secretOrKey: `${process.env.SECRET_KEY}`,
  callbackURL: `${process.env.URL}/auth/google/callback`,
});
