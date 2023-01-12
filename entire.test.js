const correctToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

function testBadTokenRequest(url, token) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  }).then((response) => {
    expect(response.status).toEqual(403);
  });
}
function testCorrectTokenRequest(url, token) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  }).then((response) => {
    expect(response.status).toBe(200);
  });
}

test("Wrong token access", () => {
  return testBadTokenRequest(
    `https://api-test-jest.up.railway.app/test-post`,
    "wrongtoken"
  );
});
test("Correct token access", () => {
  return testCorrectTokenRequest(
    `https://api-test-jest.up.railway.app/test-post`,
    correctToken
  );
});

function testList(url, token) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      expect(data.length).toBeLessThanOrEqual(4);
      expect(data[data.length - 1]).toEqual(2008);
    });
}

test("Lenght list", () => {
  return testList(
    `https://api-test-jest.up.railway.app/test-post`,
    correctToken
  );
});
