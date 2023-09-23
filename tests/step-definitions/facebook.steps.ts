import { Given, When, Then } from '@cucumber/cucumber'
import { facebook } from '../page-objects/facebook/facebook';

const fb = new facebook()


Given('Go to the url {string}', async function (url) {
    await fb.open(url)
});

When('login fb user', async function () {
    await fb.loginuser()
});

