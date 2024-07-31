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

export const refreshToken = (receivedUrl, options, navigate) => {
    const URL = "https://studapi.teachmeskills.by/auth/jwt/refresh/";
    const token = localStorage.getItem("refreshToken");

    return fetch(URL, {
        method: "POST",
        body: JSON.stringify({ refresh: token }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then(async (response) => {
            if (response.status === 401) {
                localStorage.setItem("isAuth", false);

                if (navigate) {
                    navigate("/login");
                } else {
                    window.location.href = window.location.origin + "/login";
                }

                return null;
            }

            const token = await response.json();

            localStorage.setItem("accessToken", token.access);

            return fetch(receivedUrl, {
                ...options,
                headers: {
                    ...options.headers,
                    Authorization: `Bearer ${token.access}`,
                },
            }).then((res) => res.json());
        })
        .catch((e) => console.log(e));
};
