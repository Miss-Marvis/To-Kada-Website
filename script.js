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

let currentIndex = 0

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
	showSlide(currentIndex + 1)
}

setInterval(nextSlide, 10000) // Change slide every 10 seconds

document.addEventListener('DOMContentLoaded', () => {
	showSlide(currentIndex)
})

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
