import axios from "axios";
import jwt_decode from "jwt-decode";




axios.defaults.baseURL = process.env.REACT_APP_API_URL;
console.log('process.env.API_URL', process.env.REACT_APP_API_URL)
setAuthorizationBearer();

function saveAccessToken(authResult) {
  console.log('authResult',authResult)
  localStorage.setItem("access_token", authResult.accessToken);
  console.log(localStorage)
  setAuthorizationBearer();
}

function setAuthorizationBearer() {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
}

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      return (window.location.href = "/register");
    }
    return Promise.reject(error);
  }
);

export default {
  getLoginUser: () => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      return jwt_decode(accessToken);
    }
    return null;
  },

  logout: () => {
    localStorage.setItem("access_token", "");
  },

  register: async (name,email, password) => {
    console.log("==========",name)
    const res = await axios.post("http://localhost:5000/register", {name, email, password });//addUser+register(create jwt)
    
    saveAccessToken(res.data);
  },

  login: async (name, password) => {
    const res = await axios.post("http://localhost:5000/login", {name, password });//check jwt 
    console.log(res.data)
    saveAccessToken(res.data);
    
  },

  // getPublic: async () => {
  //   const res = await axios.get("/public");
  //   return res.data;
  // },

  // getPrivate: async () => {
  //   const res = await axios.get("/private");
  //   return res.data;
  // },
  postUrl: async (originalUrl, uniqueName) => {
    console.log('1',originalUrl)
    console.log('2',uniqueName)

    const res = await axios.post("http://localhost:5000/link",{ originalUrl , uniqueName });
    return res.data;
  },

  addTarget: async (uniqueName , name ,targetValue)=>{
    const res = await axios.post("http://localhost:5000/link/"+uniqueName+"/target",{ name , targetValue });
    return res.data;
  },


  getLinks: async ()=>{
    const accessToken = localStorage.getItem("access_token");
    const decoded = jwt_decode(accessToken);
    let id = decoded.userId;
    let res = await axios.get("http://localhost:5000/user/"+id);
    res = res.data;
    let links = [];
    for (let i=0;i< res.links.length; i++){
      links .push( await (await axios.get("http://localhost:5000/link/"+res.links[i].id)).data);
    console.log('links',links);
    }
    return links;
  },

  delete: async (id)=>{
    let del = await axios.delete("http://localhost:5000/link/"+id);
    console.log('del',del)
    return del;
  }
};
