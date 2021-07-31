const RegisterURL = "https://localhost:44324/api/user/Register"
const LoginURL = "https://localhost:44324/api/player/Login"
const LoginWithEmailAndPass = "https://localhost:44324/api/user/Login"
const GetPlayersById = "https://localhost:44324/api/player"
const AddPlayerById = "https://localhost:44324/api/player/AddPlayer"
const UpdatePlayerById = "https://localhost:44324/api/player/UpdatePlayer"

export default class userHandler {

    static register(email, fullName, password, createdAt) {
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

    static login(email, password) {
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

    static loginWithEmailAndPass(email, password) {
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

    static async GetPlayersById(id) {
        console.log(`${GetPlayersById}/${id}`)
        const res = await fetch(`${GetPlayersById}/${id}`)
        const data = await res.json();
        console.log(data)
        if (data != null)
            return data
        return null
        //  fetch(`${GetPlayersById}/2022`)
    }


    static AddPlayerById(userId, fName, lName, shirtNumber, position, age, height) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${AddPlayerById}`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify({
                        userId,
                        fName,
                        lName,
                        shirtNumber,
                        position,
                        age,
                        height,
                    })
                })
                console.log(`${AddPlayerById}`, res);
                const data = await res.json();
                console.log('data=', data)
                resolve(data)
            }
            catch (error) {
                reject(error)
            }
        })
    }



    static UpdatePlayerById(playerId, fName, lName, shirtNumber, position, age, height) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${UpdatePlayerById}`, {
                    method: 'PUT', 
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify({
                        playerId,
                        fName,
                        lName,
                        shirtNumber,
                        position,
                        age,
                        height
                    })
                })
                console.log(`${UpdatePlayerById}`, res);
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