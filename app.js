const cuerpo= document.querySelector('body')



const nose= async (personaje = 1) => {

const response= await fetch(`https://rickandmortyapi.com/api/character/${personaje}`)

const data = await response.json()

const {id, name, image ,status,species,gender, location } = data

console.log(data)
console.log(id)
console.log(status)
console.log(gender)
console.log(location)


let contenedor= document.getElementById('contenedor')
let contenedor3= document.getElementById('contenedor3')


contenedor.innerHTML = `
<div class='contenedor2'>
<h2 class='text'> ${name} </h2>
<p class= 'numero'> ${id} </p>
<img src=' ${image}'>
<p class='type'> ${status} ${gender} ${species}</p>

</div>

`

contenedor3.innerHTML =`
<div class= 'contenedor4'>
<p class 'lugar'> ${location.name} </p>

</div>

`


//<input id='perso' type='text' name='personaje'>

}

nose()

let boton=document.createElement('button')

let entrarpersonaje= document.getElementById('rip')

cuerpo.append(boton)

boton.textContent= 'Buscar'

boton.addEventListener('click',()=> {

/*if (entrarpersonaje.value !== '') {

nose(entrarpersonaje.value);
entrarpersonaje.style.display= 'none';
}

else {'entra el numero'}*/



nose(entrarpersonaje.value)

}



) 

//desde itiel itachi dev

// Desde emil dev


//esto es un comentario de la supremaca de mordekaiser