document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi AOS
  AOS.init();

  // Daftar Proyek (Hanya Tampilan)
  let projects = [
    {
      id: 1,
      title: "Website UMKM",
      description: "Mendesain website dan mobile untuk UMKM sebagai media bisnis dengan memanfatkan Figma",
    },
    {
      id: 2,
      title: "Zombie In Hospital",
      description: "Memanfaatkan aplkasi Greenfoot untuk mengembangkan game sederhana.",
    },
    {
      id: 3,
      title: "Rekam Medis",
      description: "Membuat rekam medis sederhana dengan menggunkan Java dan memanfaatkan MySQL untuk menyimpan database.",
    },
  ];

  const projectList = document.getElementById("project-list");

  function renderProjects() {
    projectList.innerHTML = "";
    projects.forEach((project) => {
      const projectEl = document.createElement("div");
      projectEl.className = "col-md-4 mb-4";
      projectEl.innerHTML = `
        <div class="card" data-aos="fade-up">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
          </div>
        </div>
      `;
      projectList.appendChild(projectEl);
    });
  }

  // Render proyek saat halaman dimuat
  renderProjects();

  // Pengiriman formulir kontak
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Di sini Anda biasanya akan mengirim data formulir ke server
    console.log("Formulir dikirim:", { name, email, message });

    Swal.fire({
      title: "Terima kasih!",
      text: "Pesan Anda telah berhasil dikirim.",
      icon: "success",
      confirmButtonText: "OK",
    });

    contactForm.reset();
  });

  // Smooth scrolling untuk link navigasi
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Efek scroll navbar
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.querySelector(".navbar").classList.add("navbar-scrolled");
    } else {
      document.querySelector(".navbar").classList.remove("navbar-scrolled");
    }
  });
});

