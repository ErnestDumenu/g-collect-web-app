import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "signin", { email, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(
        // username, email, password
        first_name,
        last_name,
        dob,
        sex,
        email,
        contact,
        // location,
        password) {
        return axios.post(API_URL + "signup", {
            first_name,
            last_name,
            dob,
            sex,
            email,
            contact,
            // location,
            password
        });
    }
}

export default new AuthService();