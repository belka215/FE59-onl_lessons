export const fetchUserInfo = (navigate) => {
    const URL = "https://studapi.teachmeskills.by/auth/users/me/";
    const token = localStorage.getItem("accessToken");
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return fetch(URL, options)
        .then((response) => {
            if (response.status === 401) {
                return refreshToken(URL, options, navigate);
            }

            return response.json();
        })
        .catch((e) => console.log(e));
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
                    navigate("/sign-in");
                } else {
                    window.location.href = window.location.origin + "/sign-in";
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