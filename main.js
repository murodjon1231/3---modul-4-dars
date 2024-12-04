async function UserData() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    return data.results[0]
}

async function updateUser() {
    const user = await UserData()
    document.getElementById('user-Name').innerText = `${user.name.first} ${user.name.last}`
    document.getElementById('user-Phone').innerText = `Phone: ${user.phone}`
    document.getElementById('user-Location').innerText = `Manzil: ${user.location.city}, ${user.location.country}`
    document.getElementById('user-Age').innerText = `Yosh: ${user.dob.age}`
    document.getElementById('user-Email').innerText = `Email: ${user.email}`
    document.getElementById('user-Image').src = user.picture.large
}


document.getElementById('btn').addEventListener('click', updateUser)