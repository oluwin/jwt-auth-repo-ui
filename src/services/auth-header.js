export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token }; // spring boot backend
    //return { 'x-access-token': user.accessToken }; // nodejs backend
  } else {
    return {};
  }
}
