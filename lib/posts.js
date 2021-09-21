import GhostContentAPI from "@tryghost/content-api";

// create api instance
const api = new GhostContentAPI({
  url: 'http://ec2-18-223-16-125.us-east-2.compute.amazonaws.com',
  key: '9b2f749b2d9deed37ff61282eb',
  version: 'v3'
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}//lksdjfddwwww