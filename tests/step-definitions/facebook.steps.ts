import { Given, When, Then } from '@cucumber/cucumber'
import { facebook } from '../page-objects/facebook/facebook';

const fb = new facebook()


Given('Go to the url {string}', async function (url) {
    await fb.open(url)
});

When('login fb user', async function () {
    await fb.loginuser()
});

When('login fb user {string} and {string} and visit market place', async function (email, password) {
    await fb.loginUser(email, password)
    await fb.visitMarketPlaceListing()
  });

  Then('fill the form using {string} {string} {string} {string} {string} {string} {string} {string}', async function (picture,title,price,category,condition,description,availability,location) {
    await fb.saveNewListingwithDraft(picture,title,price,category,condition,description,availability,location)
  });

