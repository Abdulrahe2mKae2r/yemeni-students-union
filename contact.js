/**
 * Contact Page JavaScript for Yemeni Students' Union in Turkey - Erzurum Branch
 * Author: [Your Name]
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")
  const successModal = document.getElementById("successModal")
  const closeSuccessBtn = document.getElementById("closeSuccessBtn")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const formDataObj = {}
      formData.forEach((value, key) => {
        formDataObj[key] = value
      })

      // Simulate form submission (in a real application, you would send this data to a server)
      console.log("Form Data:", formDataObj)

      // Show success message
      if (successModal) {
        successModal.style.display = "block"
        document.body.style.overflow = "hidden"
      }

      // Reset form
      this.reset()
    })
  }

  // Close success modal
  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener("click", () => {
      successModal.style.display = "none"
      document.body.style.overflow = "auto"
    })
  }
})
