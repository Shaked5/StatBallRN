const RegisterURL = "https://localhost:44324/api/user/Register"
const LoginURL = "https://localhost:44324/api/player/Login"
const LoginWithEmailAndPass = "https://localhost:44324/api/user/Login"

export default class user {

    static register(email, fullName, password, createdAt) {
        console.log(email + " " + fullName + " " + password + " " + createdAt)
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${RegisterURL}`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify({
                        email,
                        fullName,
                        password,
                        createdAt
                    })
                })
                console.log(`${RegisterURL}`, res);
                const data = await res.json();
                console.log('data=', data)
                resolve(data)
            }
            catch (error) {
                reject(error)
            }
        })
    }

    static login(email,password)
    {
        console.log(email + " " + password);
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${LoginURL}`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    })
                })
                console.log(`${LoginURL}`, res);
                const data = await res.json();
                console.log('data=', data)
                resolve(data)
            }
            catch (error) {
                reject(error)
            }
        })
    }

    static loginWithEmailAndPass(email,password)
    {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${LoginWithEmailAndPass}`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    })
                })
                console.log(`${LoginWithEmailAndPass}`, res);
                const data = await res.json();
                console.log('data=', data)
                resolve(data)
            }
            catch (error) {
                reject(error)
            }
        })
    }
}

