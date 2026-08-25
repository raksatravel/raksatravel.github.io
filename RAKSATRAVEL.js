/* =========================================================
   ⚙️ RAKSA TRAVEL
   JavaScript utama + Custom Passenger Dropdown
   ========================================================= */


/* =========================================================
   KONFIGURASI RAKSA TRAVEL
   ========================================================= */

const AGENT_CONFIG = {
  name: "RAKSA TRAVEL",
  title: "Travel Agent Tiket Pesawat & Kapal",
  tagline: "100% Amanah, Pelayanan Ramah, Harga Termurah — untuk setiap langkah perjalanan Anda.",
  experience: "10+ Tahun",

  whatsapp: "6282153043601",
  whatsappDisplay: "0821-5304-3601",
  email: "santisalmi1005@gmail.com",
  instagram: "@raksatraveljayapura",
  facebook: "https://www.facebook.com/share/1D4YpqqqUg/",
  facebookDisplay: "@RaksaTravel",
  address: "JL. TERMINAL LAMA EXPO WAENA, KEC HERAM JAYAPURA",
  hours: "Setiap hari, 08.00 – 21.00 WIT",

  clients: 1000,
  rating: 4.9
};


/* =========================================================
   WHATSAPP
   ========================================================= */

const waUrl = (message) =>
  `https://wa.me/${AGENT_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

const openWhatsApp = (message) => {
  window.open(
    waUrl(message),
    "_blank",
    "noopener,noreferrer"
  );
};


/* =========================================================
   BIND CONFIG KE HALAMAN
   ========================================================= */

function applyConfig() {

  document.querySelectorAll("[data-cfg]").forEach((el) => {

    const key = el.dataset.cfg;

    if (
      Object.prototype.hasOwnProperty.call(
        AGENT_CONFIG,
        key
      )
    ) {
      el.textContent = AGENT_CONFIG[key];
    }

  });


  document.querySelectorAll("[data-cfg-href]").forEach((el) => {

    const key = el.dataset.cfgHref;

    let href = "#";


    /* WhatsApp */
    if (key === "whatsapp") {

      const service = el.dataset.service;

      const message = service
        ? `Halo ${AGENT_CONFIG.name}, saya ingin bertanya tentang ${service}. Bisa dibantu?`
        : `Halo ${AGENT_CONFIG.name}, saya ingin bertanya tentang tiket pesawat/kapal.`;

      href = waUrl(message);

      el.target = "_blank";
      el.rel = "noopener noreferrer";

    }


    /* Email */
    if (key === "email") {

      href = `mailto:${AGENT_CONFIG.email}`;

    }


    /* Instagram */
    if (key === "instagram") {

      href =
        `https://instagram.com/${AGENT_CONFIG.instagram.replace("@", "")}`;

      el.target = "_blank";
      el.rel = "noopener noreferrer";

    }


    /* Facebook */
    if (key === "facebook") {

      href = AGENT_CONFIG.facebook;

      el.target = "_blank";
      el.rel = "noopener noreferrer";

    }


    /* Google Maps */
    if (key === "address") {

      href =
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          AGENT_CONFIG.address
        )}`;

      el.target = "_blank";
      el.rel = "noopener noreferrer";

    }


    el.href = href;

  });

}


/* =========================================================
   KARTU DESTINASI
   ========================================================= */

function setupDestinationLinks() {

  document
    .querySelectorAll("[data-dest-msg]")
    .forEach((card) => {

      const destination =
        card.dataset.destMsg;

      card.href = waUrl(
        `Halo ${AGENT_CONFIG.name}, saya tertarik dengan tiket ke ${destination}. Bisa dibantu cek jadwal dan harganya?`
      );

      card.target = "_blank";
      card.rel = "noopener noreferrer";

    });

}


/* =========================================================
   FORM CEK TIKET CEPAT
   ========================================================= */

function setupForms() {

  const quickDate =
    document.getElementById("quickDate");


  /* Tidak boleh memilih tanggal sebelum hari ini */
  if (quickDate) {

    quickDate.min =
      new Date().toISOString().split("T")[0];

  }


  /* Form cek tiket */
  document
    .getElementById("quickQuoteForm")
    ?.addEventListener("submit", (event) => {

      event.preventDefault();


      const form =
        event.currentTarget;


      const tripType =
        new FormData(form).get("quickTrip") ||
        "tiket";


      const from =
        document
          .getElementById("quickFrom")
          .value
          .trim();


      const to =
        document
          .getElementById("quickTo")
          .value
          .trim();


      const date =
        document
          .getElementById("quickDate")
          .value;


      const passengers =
        document
          .getElementById("quickPassengers")
          .value;


      const formattedDate = date
        ? new Intl.DateTimeFormat(
            "id-ID",
            {
              dateStyle: "long"
            }
          ).format(
            new Date(`${date}T00:00:00`)
          )
        : "-";


      openWhatsApp(
        `Halo ${AGENT_CONFIG.name}, saya ingin cek ${tripType.toLowerCase()}.\n\n` +
        `Rute: ${from} → ${to}\n` +
        `Tanggal: ${formattedDate}\n` +
        `Penumpang: ${passengers}\n\n` +
        `Bisa dibantu cek jadwal dan harganya?`
      );

    });


  /* Form kontak */
  document
    .getElementById("contactForm")
    ?.addEventListener("submit", (event) => {

      event.preventDefault();


      const name =
        document
          .getElementById("formName")
          .value
          .trim();


      const phone =
        document
          .getElementById("formPhone")
          .value
          .trim();


      const destination =
        document
          .getElementById("formDest")
          .value
          .trim();


      const note =
        document
          .getElementById("formMsg")
          .value
          .trim();


      const message = [

        `Halo ${AGENT_CONFIG.name}, perkenalkan saya ${name}.`,

        `Nomor WhatsApp: ${phone}.`,

        destination &&
          `Tujuan perjalanan: ${destination}.`,

        note &&
          `Pesan: ${note}`,

        "Bisa dibantu?"

      ]
        .filter(Boolean)
        .join("\n");


      openWhatsApp(message);

    });

}


/* =========================================================
   STATISTIK
   ========================================================= */

function setupStatCounters() {

  const statClients =
    document.getElementById("statClients");


  const statRating =
    document.getElementById("statRating");


  const heroCard =
    document.querySelector(".hero-card");


  if (
    !heroCard ||
    (!statClients && !statRating)
  ) {
    return;
  }


  const animate =
    (
      el,
      target,
      decimals,
      suffix
    ) => {

      let current = 0;

      const step =
        target / 40;


      const tick = () => {

        current =
          Math.min(
            current + step,
            target
          );


        el.textContent =
          current.toFixed(decimals) +
          (suffix || "");


        if (current < target) {

          requestAnimationFrame(tick);

        }

      };


      tick();

    };


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          if (statClients) {

            animate(
              statClients,
              AGENT_CONFIG.clients,
              0,
              "+"
            );

          }


          if (statRating) {

            animate(
              statRating,
              AGENT_CONFIG.rating,
              1,
              "/5"
            );

          }


          observer.disconnect();

        });

      },
      {
        threshold: 0.4
      }
    );


  observer.observe(heroCard);

}


/* =========================================================
   NAVIGASI HEADER + MENU MOBILE
   ========================================================= */

function setupNavigation() {

  const header =
    document.getElementById("siteHeader");


  const menuButton =
    document.getElementById("menuToggle");


  const nav =
    document.getElementById("mainNav");


  const updateHeader = () => {

    if (!header) {
      return;
    }


    header.classList.toggle(
      "is-scrolled",
      window.scrollY > 12
    );

  };


  updateHeader();


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );


  menuButton?.addEventListener(
    "click",
    () => {

      if (!nav) {
        return;
      }


      const isOpen =
        nav.classList.toggle("is-open");


      menuButton.classList.toggle(
        "is-open",
        isOpen
      );


      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Tutup menu"
          : "Buka menu"
      );


      document.body.classList.toggle(
        "menu-open",
        isOpen
      );

    }
  );


  nav?.querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "is-open"
          );


          menuButton?.classList.remove(
            "is-open"
          );


          menuButton?.setAttribute(
            "aria-expanded",
            "false"
          );


          document.body.classList.remove(
            "menu-open"
          );

        }
      );

    });

}


/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

function setupTheme() {

  const toggle =
    document.getElementById(
      "themeToggle"
    );


  const root =
    document.documentElement;


  if (!toggle) {
    return;
  }


  if (
    localStorage.getItem(
      "raksa-theme"
    ) === "dark"
  ) {

    root.classList.add(
      "dark-mode"
    );

  }


  const updateLabel = () => {

    const isDark =
      root.classList.contains(
        "dark-mode"
      );


    toggle.textContent =
      isDark
        ? "☀️"
        : "🌙";


    toggle.setAttribute(
      "aria-label",
      isDark
        ? "Aktifkan tema terang"
        : "Aktifkan tema gelap"
    );


    toggle.title =
      isDark
        ? "Aktifkan tema terang"
        : "Aktifkan tema gelap";

  };


  updateLabel();


  toggle.addEventListener(
    "click",
    () => {

      root.classList.toggle(
        "dark-mode"
      );


      localStorage.setItem(
        "raksa-theme",
        root.classList.contains(
          "dark-mode"
        )
          ? "dark"
          : "light"
      );


      updateLabel();

    }
  );

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function setupReveal() {

  const elements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    !(
      "IntersectionObserver"
      in window
    ) ||
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    elements.forEach((el) => {

      el.classList.add(
        "is-visible"
      );

    });

    return;

  }


  const observer =
    new IntersectionObserver(
      (
        entries,
        currentObserver
      ) => {

        entries.forEach((entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "is-visible"
            );


            currentObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  elements.forEach((el) => {

    observer.observe(el);

  });

}


/* =========================================================
   FAQ ACCORDION
   ========================================================= */

function setupFaq() {

  document
    .querySelectorAll(
      ".faq-list details"
    )
    .forEach((item) => {

      item.addEventListener(
        "toggle",
        () => {

          if (!item.open) {
            return;
          }


          document
            .querySelectorAll(
              ".faq-list details"
            )
            .forEach((other) => {

              if (other !== item) {

                other.open = false;

              }

            });

        }
      );

    });

}


/* =========================================================
   CUSTOM DROPDOWN PENUMPANG
   ========================================================= */

function setupPassengerDropdown() {

  const dropdown =
    document.getElementById(
      "passengerDropdown"
    );


  const trigger =
    document.getElementById(
      "passengerTrigger"
    );


  const menu =
    document.getElementById(
      "passengerMenu"
    );


  const valueDisplay =
    document.getElementById(
      "passengerValue"
    );


  const hiddenInput =
    document.getElementById(
      "quickPassengers"
    );


  if (
    !dropdown ||
    !trigger ||
    !menu ||
    !valueDisplay ||
    !hiddenInput
  ) {
    return;
  }


  /* -----------------------------------------
     BUKA / TUTUP DROPDOWN
  ----------------------------------------- */

  trigger.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();


      const isOpen =
        dropdown.classList.toggle(
          "is-open"
        );


      trigger.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    }
  );


  /* -----------------------------------------
     PILIHAN PENUMPANG
  ----------------------------------------- */

  menu
    .querySelectorAll(
      ".passenger-option"
    )
    .forEach((option) => {

      option.addEventListener(
        "click",
        () => {

          const selectedValue =
            option.dataset.value;


          if (!selectedValue) {
            return;
          }


          /* Tampilkan pilihan */
          valueDisplay.textContent =
            selectedValue;


          /* Simpan ke input hidden */
          hiddenInput.value =
            selectedValue;


          /* Hapus selected dari semua */
          menu
            .querySelectorAll(
              ".passenger-option"
            )
            .forEach((item) => {

              item.classList.remove(
                "is-selected"
              );


              item.setAttribute(
                "aria-selected",
                "false"
              );

            });


          /* Tandai pilihan aktif */
          option.classList.add(
            "is-selected"
          );


          option.setAttribute(
            "aria-selected",
            "true"
          );


          /* Tutup dropdown */
          dropdown.classList.remove(
            "is-open"
          );


          trigger.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });


  /* -----------------------------------------
     KLIK DI LUAR DROPDOWN
  ----------------------------------------- */

  document.addEventListener(
    "click",
    (event) => {

      if (
        !dropdown.contains(
          event.target
        )
      ) {

        dropdown.classList.remove(
          "is-open"
        );


        trigger.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );


  /* -----------------------------------------
     KEYBOARD
  ----------------------------------------- */

  trigger.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        trigger.click();

      }


      if (
        event.key === "Escape"
      ) {

        dropdown.classList.remove(
          "is-open"
        );


        trigger.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );

}


/* =========================================================
   JALANKAN SEMUA FITUR
   ========================================================= */

applyConfig();

setupDestinationLinks();

setupForms();

setupStatCounters();

setupNavigation();

setupTheme();

setupReveal();

setupFaq();

setupPassengerDropdown();


/* =========================================================
   TAHUN FOOTER
   ========================================================= */

const yearEl =
  document.getElementById(
    "currentYear"
  );


if (yearEl) {

  yearEl.textContent =
    new Date().getFullYear();

}
