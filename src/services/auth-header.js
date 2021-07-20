export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken }; // spring boot backend
    //return { 'x-access-token': user.accessToken }; // nodejs backend
  } else {
    return {};
  }
}
