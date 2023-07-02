import axios from "axios";

export const login = async (username, password, setNavigate) => {
  const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
    username, password
  })
  console.log(data);
  if(data.success) {
    console.log(data.data.user.role)
    if(data.data.user.role === "coordinator") setNavigate("/cd-dashboard")
    else if(data.data.user.role === "mentor") setNavigate("/mentor-dashboard")
    else if(data.data.user.role === "mentee") setNavigate("/mentee-dashboard")
  }
  return false;
}