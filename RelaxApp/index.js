
const container = document.querySelector('.container')

const text = document.querySelector('#text')

const totalTime = 7500
const breathTime= (totalTime/5) *2
const holdTime = totalTime /5

breathAanimaion()

function breathAanimaion(){

	text.innerHTML = 'Respira Profundo!'
	container.className = 'container grow'

	setTimeout(() => {

		text.innerText = 'Mantenlo'

			setTimeout(() => {
				text.innerText = 'Exhala!'
				container.className = 'container shrink'
			},holdTime)
	}, breathTime)

}

setInterval(breathAanimaion,totalTime)