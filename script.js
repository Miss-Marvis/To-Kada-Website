//SIDE BAR JAVASCRIPT
document.querySelector('.bar-header').addEventListener('click', function () {
	document.querySelector('.sidebar-container').classList.remove('active')
})

document.querySelector('.close').addEventListener('click', function () {
	document.querySelector('.sidebar-container').classList.add('active')
})
// JAVASCRIPT RENTAL FORM
document
	.querySelector('.rental-form')
	.addEventListener('submit', function (event) {
		event.preventDefault()
		const startDate = document.getElementById('start-date').value
		const endDate = document.getElementById('end-date').value
		const city = document.getElementById('city').value
		const category = document.getElementById('category').value

		console.log('Start Date:', startDate)
		console.log('End Date:', endDate)
		console.log('City:', city)
		console.log('Category:', category)
	})

// .......................chat  gpt...............
//JAVASCRIPT SLIDER
let currentIndex = 0
let imageIndex = 0

function showSlide(index) {
	const slides = document.querySelectorAll('.slide')
	const totalSlides = slides.length

	if (index >= totalSlides) {
		currentIndex = 0
	} else if (index < 0) {
		currentIndex = totalSlides - 1
	} else {
		currentIndex = index
	}

	const offset = -currentIndex * 100
	document.querySelector('.slides').style.transform = `translateX(${offset}%)`
}

function nextSlide() {
	// showImageSlide(currentIndex + 1)
	showSlide(currentIndex + 1)
}

setInterval(nextSlide, 8000) // Change slide every 8 seconds

document.addEventListener('DOMContentLoaded', () => {
	// setInterval(nextSlide, 2000)
	showSlide(currentIndex)
	// showImageSlide(currentIndex)
})

function showImageSlide(index) {
	console.log(index)
	const slides = document.querySelectorAll('.image-slide')
	const totalSlides = slides.length

	if (index >= totalSlides) {
		imageIndex = 0
	} else if (index < 0) {
		imageIndex = totalSlides - 1
	} else {
		imageIndex = index
	}

	const offset = -imageIndex * 100
	document.querySelector('.tokada').style.transform = `translateX(${offset}%)`
}

//See For Yourself Javascript Section
function nextImageSlide() {
	showImageSlide(imageIndex + 1)
}
// setInterval(nextImageSlide, 2000)
// FAQ SECTION

document.addEventListener('DOMContentLoaded', function () {
	const faqItems = document.querySelectorAll('.faq-item')

	faqItems.forEach((item) => {
		const question = item.querySelector('.faq-question')
		const icon = item.querySelector('.icon')

		question.addEventListener('click', () => {
			const answer = item.querySelector('.faq-answer')
			const isOpen = answer.style.display === 'block'

			faqItems.forEach((i) => {
				i.querySelector('.faq-answer').style.display = 'none'
				i.querySelector('.icon').classList.remove('rotate')
			})

			if (!isOpen) {
				answer.style.display = 'block'
				icon.classList.add('rotate')
			}
		})
	})
})
