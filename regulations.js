/**
 * Regulations Page JavaScript for Yemeni Students' Union in Turkey - Erzurum Branch
 * Author: [Your Name]
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
  // FAQ Accordion Functionality
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
})
