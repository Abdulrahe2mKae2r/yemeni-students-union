/**
 * Main JavaScript file for Yemeni Students' Union in Turkey - Erzurum Branch
 * Author: [Your Name]
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: "ease",
    once: true,
    offset: 100,
  })

  // Header scroll effect
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")
  const closeMenu = document.querySelector(".close-menu")
  const body = document.body

  if (menuToggle && mobileMenu && closeMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active")
      body.style.overflow = "hidden"
    })

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      body.style.overflow = "auto"
    })
  }

  // Back to top button
  const backToTopBtn = document.querySelector(".back-to-top")

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("active")
      } else {
        backToTopBtn.classList.remove("active")
      }
    })

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // FAQ accordion (if exists on the page)
  const faqItems = document.querySelectorAll(".faq-item")

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
      const answer = item.querySelector(".faq-answer")
      const icon = item.querySelector(".faq-icon i")

      question.addEventListener("click", () => {
        // Close all other answers
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.querySelector(".faq-answer").style.maxHeight = null
            otherItem.querySelector(".faq-icon i").classList.remove("fa-minus")
            otherItem.querySelector(".faq-icon i").classList.add("fa-plus")
          }
        })

        // Toggle current answer
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null
          icon.classList.remove("fa-minus")
          icon.classList.add("fa-plus")
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px"
          icon.classList.remove("fa-plus")
          icon.classList.add("fa-minus")
        }
      })
    })
  }

  // Modal close functionality (generic for all modals)
  const modals = document.querySelectorAll(".modal-content")
  const closeModalBtns = document.querySelectorAll(".close-modal")

  if (closeModalBtns.length > 0) {
    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const modal = this.closest('[id$="Modal"]')
        if (modal) {
          modal.style.display = "none"
          document.body.style.overflow = "auto"

          // If there's a video in the modal, stop it
          const iframe = modal.querySelector("iframe")
          if (iframe) {
            const iframeSrc = iframe.src
            iframe.src = iframeSrc
          }
        }
      })
    })

    // Close modal when clicking outside of modal content
    window.addEventListener("click", (event) => {
      const modals = document.querySelectorAll('[id$="Modal"]')
      modals.forEach((modal) => {
        if (event.target === modal) {
          modal.style.display = "none"
          document.body.style.overflow = "auto"

          // If there's a video in the modal, stop it
          const iframe = modal.querySelector("iframe")
          if (iframe) {
            const iframeSrc = iframe.src
            iframe.src = iframeSrc
          }
        }
      })
    })
  }
})
