/**
 * Gallery Page JavaScript for Yemeni Students' Union in Turkey - Erzurum Branch
 * Author: [Your Name]
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
  // Gallery Filter Functionality
  const filterBtns = document.querySelectorAll(".filter-btn")
  const galleryItems = document.querySelectorAll(".gallery-item")

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => {
          btn.classList.remove("active")
        })

        // Add active class to clicked button
        this.classList.add("active")

        const filter = this.getAttribute("data-filter")

        // Filter gallery items
        galleryItems.forEach((item) => {
          const category = item.getAttribute("data-category")

          if (filter === "all" || category === filter) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
      })
    })
  }

  // Load More Functionality
  const loadMoreBtn = document.getElementById("loadMoreBtn")
  let currentItems = 6

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      const activeFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter")
      let visibleItems = 0

      galleryItems.forEach((item, index) => {
        const category = item.getAttribute("data-category")

        if (activeFilter === "all" || category === activeFilter) {
          visibleItems++

          if (visibleItems <= currentItems + 3) {
            item.style.display = "block"
          }
        }
      })

      currentItems += 3

      // Hide load more button if all items are visible
      if (currentItems >= galleryItems.length) {
        loadMoreBtn.style.display = "none"
      }
    })
  }

  // Gallery Modal Functionality
  const galleryModal = document.getElementById("galleryModal")
  const modalImage = document.getElementById("modalImage")
  const modalTitle = document.getElementById("modalTitle")
  const modalDate = document.getElementById("modalDate")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  const galleryImages = document.querySelectorAll(".gallery-image")

  let currentImageIndex = 0

  if (galleryImages.length > 0) {
    galleryImages.forEach((image, index) => {
      image.addEventListener("click", () => {
        const img = image.querySelector("img")
        const title = image.closest(".gallery-item").querySelector(".gallery-info h3").textContent
        const date = image.closest(".gallery-item").querySelector(".gallery-info p").textContent

        modalImage.src = img.src
        modalTitle.textContent = title
        modalDate.textContent = date
        currentImageIndex = index

        galleryModal.style.display = "block"
        document.body.style.overflow = "hidden"
      })
    })
  }

  // Previous and Next buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
      updateModalImage()
    })

    nextBtn.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length
      updateModalImage()
    })
  }

  function updateModalImage() {
    const img = galleryImages[currentImageIndex].querySelector("img")
    const title = galleryImages[currentImageIndex]
      .closest(".gallery-item")
      .querySelector(".gallery-info h3").textContent
    const date = galleryImages[currentImageIndex].closest(".gallery-item").querySelector(".gallery-info p").textContent

    modalImage.src = img.src
    modalTitle.textContent = title
    modalDate.textContent = date
  }

  // Video Modal Functionality
  const videoModal = document.getElementById("videoModal")
  const modalVideo = document.getElementById("modalVideo")
  const videoThumbnails = document.querySelectorAll(".play-button")

  // Video data
  const videosData = {
    1: "https://www.youtube.com/embed/VIDEO_ID_1",
    2: "https://www.youtube.com/embed/VIDEO_ID_2",
    3: "https://www.youtube.com/embed/VIDEO_ID_3",
  }

  if (videoThumbnails.length > 0) {
    videoThumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        modalVideo.src = videosData[index + 1]
        videoModal.style.display = "block"
        document.body.style.overflow = "hidden"
      })
    })
  }
})
