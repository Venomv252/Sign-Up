import "./footer.css"
export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">© 2025 EduConnect. All rights reserved.</p>
        <div class="footer-links">
          <a class="footer-link" href="/privacy" data-discover="true">
            Privacy Policy
          </a>
          <a class="footer-link" href="/terms" data-discover="true">
            Terms of Service
          </a>
          <a class="footer-link" href="/contact" data-discover="true">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
