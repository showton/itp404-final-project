export default function(server) {
  server.loadFixtures("companies, lawyers");
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList("review", 10);
}
