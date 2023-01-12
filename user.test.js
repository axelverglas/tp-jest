function testUser(url) {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      expect(data.id).toBeGreaterThan(100);
      expect(data.firstName).not.toBeNull();
      expect(data.lastName).not.toBeNull();
    });
}
test("Not reserved ID's and valid username", () => {
  for (let i = 0; i < 20; i++) {
    return testUser("https://api-test-jest.up.railway.app/test-user");
  }
});

function testUserEmail(url) {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (!data.email.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/)) {
        console.log(data.email);
      }
      if (
        !data.email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        console.log(data.email);
      }
    });
}
test("Correct email format", () => {
  for (let i = 0; i < 20; i++) {
    return testUserEmail("https://api-test-jest.up.railway.app/test-user");
  }
});

function testUserRegisteredAt(url) {
  const date = new Date("2020-01-01");
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      expect(data.registeredAt.split("T")[0]).toMatch(/\d{4}-\d{2}-\d{2}/);
      expect(data.registeredAt.split("T")[0]).toBe > date;
    });
}
test("Correct registration date", () => {
  for (let i = 0; i < 20; i++) {
    return testUserRegisteredAt(
      "https://api-test-jest.up.railway.app/test-user"
    );
  }
});
