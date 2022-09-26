class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <style>
            #text-opening {
                line-height: 2.0em; 
                font-size:18px
            }
            .accent {
                color:#FFC54D;
                font-weight: bold;
            }
            @media (min-width: 768px) { 
                #text-opening {
                    line-height: 2.0em; 
                    font-size:22px;
                }
             }
        </style>
        <div class="row">
            <div class="col-md-6 col-lg-6 col-12">
                <div id="about">
                    <h2 class="text-light">AYO LAWAN <span class="accent">COVID !</span>
                    </h2>
                    <p class="text-light" id="text-opening">
                        Ayo bersama kita lawan penyebaran virus <span class="accent">COVID-19</span> 
                        di Indonesia. Ayo laksanakan <span class="accent">Vaksinasi COVID-19</span>
                        secara lengkap untuk mendapatkan kekebalan.
                    </p>
                    <a href="#content" class="btn btn-primary">Temukan Lokasi Vaksin</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-6 col-12 d-none d-lg-block">
                <img src="../src/assets/undraw_doctors_hwty.png" class="w-100" alt="" srcset="">
            </div>
        </div>
        `;
  }
}
customElements.define("hero-section", HeroSection);
