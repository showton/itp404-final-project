export default function(server) {
  server.loadFixtures("companies");
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList("review", 10);
}
