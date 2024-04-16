import axios from "axios";

const api = axios
.get("https://api-manager-test.infog2.com.br.infog2.com.br/")
.then((res) => {
        console.log(res.data)
})
.catch((error) => {
        console.log(error);
});  

export default api



