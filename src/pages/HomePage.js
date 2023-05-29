import Banner from "../components/Banner";
import Header from "../components/Header";
import { posts } from "../dataFake";

const HomePage = () => {
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <section id="hero" class="d-flex align-items-center">
    <div class="container ">
      <h1>Kelly Adams</h1>
      <h2>I'm a professional illustrator from San Francisco</h2>
      <a href="/about" class="btn-about">About Me</a>
    </div>
  </section><!-- End Hero -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Kelly</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End  Footer -->

  
        </div>
    `;
};

export default HomePage;
