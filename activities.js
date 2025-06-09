/**
 * Activities Page JavaScript for Yemeni Students' Union in Turkey - Erzurum Branch
 * Author: [Your Name]
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
  // Activities Filter Functionality
  const filterBtns = document.querySelectorAll(".filter-btn")
  const timeBtns = document.querySelectorAll(".time-btn")
  const activityCards = document.querySelectorAll(".activity-card")

  // Filter by category
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
        const activeTimeFilter = document.querySelector(".time-btn.active").getAttribute("data-time")

        // Filter activities
        activityCards.forEach((card) => {
          const category = card.getAttribute("data-category")
          const time = card.getAttribute("data-time")

          if ((filter === "all" || category === filter) && (activeTimeFilter === "all" || time === activeTimeFilter)) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  }

  // Filter by time
  if (timeBtns.length > 0) {
    timeBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        timeBtns.forEach((btn) => {
          btn.classList.remove("active")
        })

        // Add active class to clicked button
        this.classList.add("active")

        const filter = this.getAttribute("data-time")
        const activeCategoryFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter")

        // Filter activities
        activityCards.forEach((card) => {
          const category = card.getAttribute("data-category")
          const time = card.getAttribute("data-time")

          if (
            (filter === "all" || time === filter) &&
            (activeCategoryFilter === "all" || category === activeCategoryFilter)
          ) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  }

  // Activity Calendar Functionality
  const calendarDays = document.getElementById("calendarDays")
  const currentMonthElement = document.getElementById("currentMonth")
  const prevMonthBtn = document.getElementById("prevMonth")
  const nextMonthBtn = document.getElementById("nextMonth")

  // Calendar data
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ]

  // Events data
  const events = [
    {
      date: "2023-07-20",
      title: "معرض التراث اليمني",
      category: "cultural",
    },
    {
      date: "2023-08-15",
      title: "ندوة علمية حول التخصصات الطبية",
      category: "academic",
    },
    {
      date: "2023-09-10",
      title: "بطولة الشطرنج",
      category: "sports",
    },
    {
      date: "2023-09-25",
      title: "رحلة ترفيهية إلى بحيرة تورتوم",
      category: "social",
    },
  ]

  const currentDate = new Date()
  let currentMonth = currentDate.getMonth()
  let currentYear = currentDate.getFullYear()

  // Generate calendar
  function generateCalendar(month, year) {
    // Clear previous calendar
    if (calendarDays) {
      calendarDays.innerHTML = ""

      // Update current month display
      currentMonthElement.textContent = `${months[month]} ${year}`

      // Get first day of month and number of days in month
      const firstDay = new Date(year, month, 1).getDay()
      const daysInMonth = new Date(year, month + 1, 0).getDate()

      // Adjust for Sunday as first day (0) to Saturday as last day (6)
      const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1

      // Create calendar days
      for (let i = 0; i < adjustedFirstDay; i++) {
        const emptyDay = document.createElement("div")
        emptyDay.classList.add("calendar-day")
        calendarDays.appendChild(emptyDay)
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div")
        dayElement.classList.add("calendar-day")

        const dayNumber = document.createElement("div")
        dayNumber.classList.add("day-number")
        dayNumber.textContent = day

        dayElement.appendChild(dayNumber)

        // Check if there are events on this day
        const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
        const dayEvents = events.filter((event) => event.date === dateString)

        if (dayEvents.length > 0) {
          dayElement.classList.add("has-event")

          // Add event indicators
          const eventIndicators = document.createElement("div")
          eventIndicators.classList.add("event-indicators")

          dayEvents.forEach((event) => {
            const eventDot = document.createElement("span")
            eventDot.classList.add("event-dot", event.category)
            eventIndicators.appendChild(eventDot)
          })

          dayElement.appendChild(eventIndicators)

          // Add click event to show event details
          dayElement.addEventListener("click", () => {
            alert(`أحداث ${day} ${months[month]} ${year}:\n${dayEvents.map((event) => event.title).join("\n")}`)
          })
        }

        calendarDays.appendChild(dayElement)
      }
    }
  }

  // Initialize calendar
  if (calendarDays) {
    generateCalendar(currentMonth, currentYear)

    // Previous month button
    if (prevMonthBtn) {
      prevMonthBtn.addEventListener("click", () => {
        currentMonth--
        if (currentMonth < 0) {
          currentMonth = 11
          currentYear--
        }
        generateCalendar(currentMonth, currentYear)
      })
    }

    // Next month button
    if (nextMonthBtn) {
      nextMonthBtn.addEventListener("click", () => {
        currentMonth++
        if (currentMonth > 11) {
          currentMonth = 0
          currentYear++
        }
        generateCalendar(currentMonth, currentYear)
      })
    }
  }

  // Activity Modal Functionality
  const activityModal = document.getElementById("activityModal")
  const modalTitle = document.getElementById("modalTitle")
  const modalImage = document.getElementById("modalImage")
  const modalCategory = document.getElementById("modalCategory")
  const modalDate = document.getElementById("modalDate")
  const modalTime = document.getElementById("modalTime")
  const modalLocation = document.getElementById("modalLocation")
  const modalDescription = document.getElementById("modalDescription")
  const modalGallery = document.getElementById("modalGallery")
  const viewActivityBtns = document.querySelectorAll(".view-activity-btn")
  const closeModalBtn = document.getElementById("closeModalBtn")

  // Activities data
  const activitiesData = {
    1: {
      title: "أمسية ثقافية يمنية",
      image: "images/activity1.jpg",
      category: "cultural",
      categoryText: "ثقافي",
      date: "15 مايو 2023",
      time: "6:00 مساءً - 9:00 مساءً",
      location: "قاعة المؤتمرات - جامعة أتاتورك",
      description: `أقام اتحاد الطلبة اليمنيين في أرضروم أمسية ثقافية يمنية بحضور عدد كبير من الطلاب اليمنيين والأتراك وطلاب من جنسيات مختلفة.

      تضمنت الأمسية فقرات متنوعة منها:
      - عرض للأزياء التقليدية اليمنية
      - فقرات شعرية باللغتين العربية والتركية
      - عرض موسيقي للفنون اليمنية التقليدية
      - معرض للصور والمقتنيات التراثية اليمنية
      - تقديم أشهر المأكولات اليمنية للحضور

      وقد لاقت الأمسية استحساناً كبيراً من الحضور، وتم تغطيتها من قبل عدد من وسائل الإعلام المحلية.`,
      gallery: [
        "images/activity1-gallery1.jpg",
        "images/activity1-gallery2.jpg",
        "images/activity1-gallery3.jpg",
        "images/activity1-gallery4.jpg",
      ],
    },
    2: {
      title: "ورشة عمل حول مهارات البحث العلمي",
      image: "images/activity2.jpg",
      category: "academic",
      categoryText: "أكاديمي",
      date: "20 أبريل 2023",
      time: "10:00 صباحاً - 2:00 مساءً",
      location: "مكتبة جامعة أتاتورك المركزية",
      description: `نظم اتحاد الطلبة اليمنيين في أرضروم ورشة عمل حول مهارات البحث العلمي بالتعاون مع كلية الدراسات العليا في جامعة أتاتورك.

      تناولت الورشة المحاور التالية:
      - أساسيات البحث العلمي وخطواته
      - كيفية اختيار موضوع البحث وصياغة الإشكالية
      - مناهج البحث العلمي وأدواته
      - كيفية كتابة الأبحاث الأكاديمية
      - توثيق المراجع والاقتباسات
      - النشر العلمي في المجلات المحكمة

      قدم الورشة نخبة من أساتذة الجامعة المتخصصين، وحضرها أكثر من 50 طالباً وطالبة من مختلف التخصصات.`,
      gallery: ["images/activity2-gallery1.jpg", "images/activity2-gallery2.jpg", "images/activity2-gallery3.jpg"],
    },
    // Add more activities data as needed
  }

  // Open activity modal when clicking on view button
  if (viewActivityBtns.length > 0) {
    viewActivityBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const activityId = this.getAttribute("data-id")
        const activityData = activitiesData[activityId]

        if (activityData) {
          modalTitle.textContent = activityData.title
          modalImage.src = activityData.image
          modalImage.alt = activityData.title
          modalCategory.textContent = activityData.categoryText
          modalCategory.className = `modal-category ${activityData.category}`
          modalDate.textContent = activityData.date
          modalTime.textContent = activityData.time
          modalLocation.textContent = activityData.location
          modalDescription.innerHTML = activityData.description.replace(/\n/g, "<br>")

          // Generate gallery HTML
          let galleryHTML = ""
          activityData.gallery.forEach((image) => {
            galleryHTML += `
              <div class="gallery-image">
                <img src="${image}" alt="${activityData.title}">
              </div>
            `
          })

          modalGallery.innerHTML = galleryHTML
          activityModal.style.display = "block"
          document.body.style.overflow = "hidden"
        }
      })
    })
  }

  // Close modal when clicking on close button
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      activityModal.style.display = "none"
      document.body.style.overflow = "auto"
    })
  }
})
