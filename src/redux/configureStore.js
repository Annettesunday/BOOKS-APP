// use common JS require so we can dynamically import during build-time

if (process.env.NODE_ENV === "production") {
  module.exports = "./configureStore.prod.js";
} else {
  module.exports = "./configureStore.dev.js";
}
