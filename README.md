

  <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <p class="mb-0 small text-muted">
                    Developed with <i class="bi bi-code-square text-danger"></i> by 
                    <a href="https://codesaif.in" 
                       target="_blank" 
                       class="text-decoration-none text-primary hover-text-success">
                        codesaif.in
                    </a>
                </p>
            </div>
        </div>
    </div>
<!-- Footer -->
<footer class="custom-footer pt-4">
    <!-- CDN Links -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <div class="container">
        <div class="row g-4">
            <!-- About Section -->
            <div class="col-lg-3 col-md-6">
                <h5 class="footer-heading mb-3">About Us</h5>
                <p class="footer-text small">Your company description goes here. Provide brief information about your business.</p>
                <div class="social-icons">
                    <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                </div>
            </div>

            <!-- Enhanced Quick Links -->
            <div class="col-lg-3 col-md-6">
                <h5 class="footer-heading mb-3">Quick Links</h5>
                <ul class="list-unstyled">
                   
             <li class="mb-2">
                        <a href="#" class="footer-link">
                            <span class="link-text  bi bi-arrow-right-short link-icon">home</span>
                         
                        </a>
                    </li>
                     
                    <li class="mb-2">
                        <a href="#" class="footer-link">
                            <span class="link-text  bi bi-arrow-right-short link-icon">about</span>
                         
                        </a>
                    </li>
                  
                  <li class="mb-2">
                        <a href="#" class="footer-link">
                            <span class="link-text  bi bi-arrow-right-short link-icon">contact</span>
                         
                        </a>
                    </li>
                    <!-- Repeat for other links -->
                </ul>
            </div>

            <!-- Contact Info -->
            <div class="col-lg-3 col-md-6">
                <h5 class="footer-heading mb-3">Contact</h5>
                <ul class="list-unstyled footer-text small">
                    <li class="mb-2">
                        <i class="bi bi-geo-alt-fill me-2"></i>
                        123 Street, City, Country
                    </li>
                    <li class="mb-2">
                        <i class="bi bi-telephone-fill me-2"></i>
                        +1 234 567 890
                    </li>
                    <li class="mb-2">
                        <i class="bi bi-envelope-fill me-2"></i>
                        info@example.com
                    </li>
                </ul>
            </div>

            <!-- Newsletter with Animation -->
            <div class="col-lg-3 col-md-6">
                <h5 class="footer-heading mb-3">Newsletter</h5>
                <form class="newsletter-form">
                    <div class="input-group mb-3">
                        <input type="email" class="form-control form-control-sm" placeholder="Enter email">
                        <button class="btn btn-primary btn-sm" type="button">
                            <i class="bi bi-send-fill"></i>
                        </button>
                    </div>
                </form>
                <div class="scroll-top text-end">
                    <button class="btn-scroll-top">
                        <i class="bi bi-arrow-up-circle-fill"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-copyright text-center  py-3 mt-4 border-top">
            <small class="footer-text">
              © 2023 Your Brand. All rights reserved. <p>privacy | Terms </P>
              
            </small>
        </div>
    </div>



    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <style>
        :root {
            --light-blue: #e3f2fd;
            --primary-blue: #2196F3;
        }

        .custom-footer {
            background: linear-gradient(145deg, var(--light-blue), #ffffff);
            font-size: 0.9rem;
        }

        .footer-heading {
            color: var(--primary-blue) !important;
            font-size: 1.1rem;
            border-bottom: 2px solid var(--primary-blue);
            display: inline-block;
            padding-bottom: 0.3rem;
        }

        .footer-link {
            color: #455a64 !important;
            text-decoration: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.3rem 0;
            transition: all 0.3s ease;
        }

        .footer-link:hover {
            color: var(--primary-blue) !important;
            transform: translateX(5px);
        }

        
      

        .footer-link:hover .link-icon {
            opacity: 1;
            margin-left: 8px;
        }

        .social-link {
            color: #607d8b !important;
            margin-right: 1rem;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            color: var(--primary-blue) !important;
            transform: translateY(-3px);
        }

        .btn-scroll-top {
            border: none;
            background: none;
            color: var(--primary-blue);
            font-size: 1.5rem;
            transition: all 0.3s ease;
        }

        .btn-scroll-top:hover {
            transform: scale(1.1);
        }

        .newsletter-form .form-control:focus {
            border-color: var(--primary-blue);
            box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
        }
    </style>
    <script>
        // Smooth scroll to top
        document.querySelector('.btn-scroll-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Add animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            document.querySelectorAll('.footer-link').forEach((element) => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.5s ease';
                observer.observe(element);
            });
        });
    </script>
</footer>



   .hover-text-success {
        transition: all 0.3s ease;
    }
    .hover-text-success:hover {
        color: #28a745!important;
        transform: translateY(-1px);
    }