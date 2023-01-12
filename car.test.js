function testCar(url) {
  return fetch(url)
    .then((response) => {
      // recuperer les données de l'api
      return response.json();
    })
    .then((data) => {
      // tester les données
      expect(data).toHaveProperty("brand");
      expect(data.brand).toMatch("Ford");
      expect(data).toHaveProperty("model");
      expect(data.model).toEqual("Mustang");
      expect(data).toHaveProperty("year");
      expect(data.year).toBe(1969);
    });
}
test("Status : Request fullfiled", () => {
  return testCar("https://api-test-jest.up.railway.app/test-get");
});
