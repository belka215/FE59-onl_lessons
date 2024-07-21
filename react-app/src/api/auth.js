export const fetchToken = (values) => {
    const URL = "https://studapi.teachmeskills.by/auth/jwt/create/";

    return fetch(URL, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.access && response.refresh) {
                localStorage.setItem("accessToken", response.access);
                localStorage.setItem("refreshToken", response.refresh);
                localStorage.setItem("isAuth", true);
            }
        })
        .catch((e) => {
            localStorage.setItem("isAuth", false);
        });
};
