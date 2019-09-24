const passport = require('passport')
const router = require('express').Router()
const AzureAdOAuth2Strategy = require('passport-azure-ad-oauth2').Strategy
const {User} = require('../db/models')
const jwt = require('jsonwebtoken')
module.exports = router

if (!process.env.AZURE_CLIENT_ID || !process.env.AZURE_CLIENT_SECRET) {
  console.log('Azure client ID / secret not found. Skipping Azure OAuth.')
} else {
  const azureConfig = {
    clientID: process.env.AZURE_CLIENT_ID,
    clientSecret: process.env.AZURE_CLIENT_SECRET,
    callbackURL: process.env.AZURE_CALLBACK,
    resource: '00000002-0000-0000-c000-000000000000',
    tenant: 'plandigital.onmicrosoft.com'
  }

  const strategy = new AzureAdOAuth2Strategy(azureConfig, function(
    accessToken,
    refresh_token,
    params,
    profile,
    done
  ) {
    // currently we can't find a way to exchange access token by user info (see userProfile implementation), so
    // you will need a jwt-package like https://github.com/auth0/node-jsonwebtoken to decode id_token and get waad profile
    const waadProfile = profile || jwt.decode(params.id_token)
    console.log(waadProfile)

    // this is just an example: here you would provide a model *User* with the function *findOrCreate*
    User.findOrCreate({id: waadProfile.upn}, function(err, user) {
      done(err, user)
    })
  })

  passport.use(strategy)

  router.get('/auth/azureadoauth2', passport.authenticate('azure_ad_oauth2'))

  router.get(
    '/auth/azureadoauth2/callback',
    passport.authenticate('azure_ad_oauth2', {
      failureRedirect: '/login'
    }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/home')
    }
  )
}
