'use strict';

const { USERS_TABLE } = process.env

module.exports.handler = async (event) => {
  // Do whatever you want here, but this must return an Object of type MyProfile

  const username = event.identity.username
  
  const response = {
    id: "id",
    name: "name",
    screenName: "ScreenName",
    imageUrl: "ImageUrl",
    backgroundImageUrl: "BackgroundImage URL",
    createdAt: "12345",
    activeStacks: ["stack1"]
  }

  return response;
};
