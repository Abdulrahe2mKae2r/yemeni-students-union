/**
 * Committee Page JavaScript for Yemeni Students' Union in Turkey - Erzurum Branch
 * Author: [Your Name]
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
  // Committee Modal Functionality
  const committeeModal = document.getElementById("committeeModal")
  const modalTitle = document.getElementById("modalTitle")
  const modalYear = document.getElementById("modalYear")
  const modalMembers = document.getElementById("modalMembers")
  const viewCommitteeBtns = document.querySelectorAll(".view-committee-btn")

  // Previous committees data
  const committeesData = {
    2022: {
      title: "اللجنة التنفيذية للدورة 2022-2023",
      members: [
        {
          name: "محمد علي الحبشي",
          position: "رئيس الاتحاد",
          image: "images/previous/president-2022.jpg",
          details: "طالب دكتوراه في الهندسة المدنية - جامعة أتاتورك",
        },
        {
          name: "أحمد سعيد باعباد",
          position: "الأمين العام",
          image: "images/previous/secretary-2022.jpg",
          details: "طالب ماجستير في العلوم السياسية - جامعة أتاتورك",
        },
        {
          name: "سالم عبدالله باحميد",
          position: "مسؤول المالية والأنشطة",
          image: "images/previous/finance-2022.jpg",
          details: "طالب ماجستير في إدارة الأعمال - جامعة أرضروم التقنية",
        },
        {
          name: "عبدالرحمن محمد الشيباني",
          position: "مسؤول الشؤون الأكاديمية",
          image: "images/previous/academic-2022.jpg",
          details: "طالب دكتوراه في الفيزياء - جامعة أتاتورك",
        },
        {
          name: "خالد ناصر العولقي",
          position: "مسؤول الإعلام",
          image: "images/previous/media-2022.jpg",
          details: "طالب بكالوريوس في الإعلام - جامعة أتاتورك",
        },
        {
          name: "فاطمة أحمد الشرعبي",
          position: "ممثلة الطالبات",
          image: "images/previous/female-rep-2022.jpg",
          details: "طالبة ماجستير في الطب - جامعة أتاتورك",
        },
      ],
    },
    2021: {
      title: "اللجنة التنفيذية للدورة 2021-2022",
      members: [
        {
          name: "عبدالله محمد الشيباني",
          position: "رئيس الاتحاد",
          image: "images/previous/president-2021.jpg",
          details: "طالب دكتوراه في الهندسة الكهربائية - جامعة أتاتورك",
        },
        {
          name: "خالد أحمد الصلاحي",
          position: "الأمين العام",
          image: "images/previous/secretary-2021.jpg",
          details: "طالب ماجستير في العلاقات الدولية - جامعة أتاتورك",
        },
        {
          name: "محمد سعيد باحميد",
          position: "مسؤول المالية والأنشطة",
          image: "images/previous/finance-2021.jpg",
          details: "طالب ماجستير في الاقتصاد - جامعة أرضروم التقنية",
        },
        {
          name: "علي محمد الحكيمي",
          position: "مسؤول الشؤون الأكاديمية",
          image: "images/previous/academic-2021.jpg",
          details: "طالب دكتوراه في الكيمياء - جامعة أتاتورك",
        },
        {
          name: "فهد ناصر العولقي",
          position: "مسؤول الإعلام",
          image: "images/previous/media-2021.jpg",
          details: "طالب بكالوريوس في الإعلام - جامعة أتاتورك",
        },
        {
          name: "سارة أحمد الشرعبي",
          position: "ممثلة الطالبات",
          image: "images/previous/female-rep-2021.jpg",
          details: "طالبة ماجستير في الطب - جامعة أتاتورك",
        },
      ],
    },
    2020: {
      title: "اللجنة التنفيذية للدورة 2020-2021",
      members: [
        {
          name: "علي محمد الحميري",
          position: "رئيس الاتحاد",
          image: "images/previous/president-2020.jpg",
          details: "طالب دكتوراه في الهندسة المعمارية - جامعة أتاتورك",
        },
        {
          name: "فهد سالم باوزير",
          position: "الأمين العام",
          image: "images/previous/secretary-2020.jpg",
          details: "طالب ماجستير في العلوم السياسية - جامعة أتاتورك",
        },
        {
          name: "خالد سعيد باحميد",
          position: "مسؤول المالية والأنشطة",
          image: "images/previous/finance-2020.jpg",
          details: "طالب ماجستير في إدارة الأعمال - جامعة أرضروم التقنية",
        },
        {
          name: "محمد عبدالله الحكيمي",
          position: "مسؤول الشؤون الأكاديمية",
          image: "images/previous/academic-2020.jpg",
          details: "طالب دكتوراه في الفيزياء - جامعة أتاتورك",
        },
        {
          name: "أحمد ناصر العولقي",
          position: "مسؤول الإعلام",
          image: "images/previous/media-2020.jpg",
          details: "طالب بكالوريوس في الإعلام - جامعة أتاتورك",
        },
        {
          name: "نورا أحمد الشرعبي",
          position: "ممثلة الطالبات",
          image: "images/previous/female-rep-2020.jpg",
          details: "طالبة ماجستير في الطب - جامعة أتاتورك",
        },
      ],
    },
    2019: {
      title: "اللجنة التنفيذية للدورة 2019-2020",
      members: [
        {
          name: "سالم عبدالله باعباد",
          position: "رئيس الاتحاد",
          image: "images/previous/president-2019.jpg",
          details: "طالب دكتوراه في الهندسة المدنية - جامعة أتاتورك",
        },
        {
          name: "محمد علي الشرعبي",
          position: "الأمين العام",
          image: "images/previous/secretary-2019.jpg",
          details: "طالب ماجستير في العلوم السياسية - جامعة أتاتورك",
        },
        {
          name: "أحمد سعيد باحميد",
          position: "مسؤول المالية والأنشطة",
          image: "images/previous/finance-2019.jpg",
          details: "طالب ماجستير في إدارة الأعمال - جامعة أرضروم التقنية",
        },
        {
          name: "عبدالرحمن محمد الحكيمي",
          position: "مسؤول الشؤون الأكاديمية",
          image: "images/previous/academic-2019.jpg",
          details: "طالب دكتوراه في الفيزياء - جامعة أتاتورك",
        },
        {
          name: "فهد ناصر العولقي",
          position: "مسؤول الإعلام",
          image: "images/previous/media-2019.jpg",
          details: "طالب بكالوريوس في الإعلام - جامعة أتاتورك",
        },
        {
          name: "سارة أحمد الشرعبي",
          position: "ممثلة الطالبات",
          image: "images/previous/female-rep-2019.jpg",
          details: "طالبة ماجستير في الطب - جامعة أتاتورك",
        },
      ],
    },
  }

  // Open committee modal when clicking on view button
  if (viewCommitteeBtns.length > 0) {
    viewCommitteeBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const year = this.getAttribute("data-year")
        const committeeData = committeesData[year]

        if (committeeData) {
          modalTitle.textContent = committeeData.title
          modalYear.textContent = year

          // Generate members HTML
          let membersHTML = ""
          committeeData.members.forEach((member) => {
            membersHTML += `
              <div class="modal-member">
                <div class="member-image">
                  <img src="${member.image}" alt="${member.name}">
                </div>
                <div class="member-info">
                  <h3>${member.name}</h3>
                  <div class="member-position">${member.position}</div>
                  <div class="member-details">
                    <p>${member.details}</p>
                  </div>
                </div>
              </div>
            `
          })

          modalMembers.innerHTML = membersHTML
          committeeModal.style.display = "block"
          document.body.style.overflow = "hidden"
        }
      })
    })
  }
})
