document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }


const tabControls = document.querySelector('.tab__nav')

tabControls.addEventListener('click', toggleTab)

function toggleTab (e){

	const tabControl = e.target.closest('.tab__item')
	
	if (!tabControl) return
	e.preventDefault()
	if(tabControl.classList.contains('tab__item--active')) return

	e.preventDefault()

	const tabContentID = tabControl.getAttribute('href')
	document.querySelector('.tab__info-show').classList.remove('tab__info-show')
	document.querySelector(tabContentID).classList.add('tab__info-show')

	document.querySelector('.tab__item--active').classList.remove('tab__item--active')
	tabControl.classList.add('tab__item--active')
}


const modalCall = document.querySelector('.modal__call')
const modalButtonCall = document.querySelector('.header__button')

modalButtonCall.addEventListener('click', openModal)
modalCall.addEventListener('click', closeModal)

function openModal(e) {
		e.preventDefault()
		document.body.classList.toggle('body--opened-modal-call')
}

function closeModal(e) {
		e.preventDefault()

		const target = e.target

		if (target.closest('.modal__cancel-call') || target.classList.contains('modal__call')) {
				document.body.classList.remove('body--opened-modal-call')
		}

}


const modalContact = document.querySelector('.modal__contact')
const modalButtonContact = document.querySelector('.button__comfort')
const modalButtonContact2 = document.querySelector('.button__application')

modalButtonContact.addEventListener('click', openModalСontact)
modalButtonContact2.addEventListener('click', openModalСontact)
modalContact.addEventListener('click', closeModalСontact)

function openModalСontact(e) {
		e.preventDefault()
		document.body.classList.toggle('body--opened-modal-contact')
}

function closeModalСontact(e) {
		e.preventDefault()

		const target = e.target

		if (target.closest('.modal__cancel-contact') || target.classList.contains('modal__contact')) {
				document.body.classList.remove('body--opened-modal-contact')
		}

}

const header = document.querySelector('.header__top')
window.onscroll = function() {
	if (window.scrollY>300){
		header.style.position = "fixed"
		header.style.background = "rgb(217, 250, 221)"
	} else {
		header.style.background = "rgba(0, 0, 0, 0)"
		header.style.position = "relative"
	}
}

const swiper = new Swiper('.portfolio__slider', {

	spaceBetween: 15,
	// width: "auto",
	slidesPerView: 3.5,

  // Navigation arrows
  navigation: {
    nextEl: '.portfolio__next',
    prevEl: '.portfolio__prev',
  },

	breakpoints:{
		0: {
			slidesPerView: 1,
			centeredSlides: true,
		},
		499: {
			slidesPerView: 1.5,
			centeredSlides: false,
			spaceBetween: 30,
		},
		870: {
			slidesPerView: 3,
			centeredSlides: false,
		},
		1100: {
			slidesPerView: 3.5,
			centeredSlides: false,
		},
	},

});

const swiper2 = new Swiper('.clients__slider', {

	spaceBetween: 40,
	slidesPerView: 2.2,
  // Navigation arrows
  navigation: {
    nextEl: '.clients__next',
    prevEl: '.clients__prev',
  },

	breakpoints:{
		0: {
			slidesPerView: 1.3,
			centeredSlides: true,
		},
		430: {
			slidesPerView: 1.5,
			centeredSlides: false,
			spaceBetween: 40,
		},
		470: {
			slidesPerView: 1.8,
			centeredSlides: false,
			spaceBetween: 40,
		},
	}
});