// ── Shared Navbar + Footer injection ──────────────────────────────────────
const PAGES = [
  { href: '/internships/', label: 'Internships' },
  { href: '/resume/',      label: 'AI Resume'   },
  { href: '/applications/',label: 'My Applications' },
  { href: '/assessments/', label: 'Assessments' },
  { href: '/courses/',     label: 'Courses'     },
];

function getUser() {
  try { return JSON.parse(sessionStorage.getItem('ih_user') || 'null'); } catch { return null; }
}
function setUser(u) { sessionStorage.setItem('ih_user', JSON.stringify(u)); }
function logout() { sessionStorage.removeItem('ih_user'); window.location.href = '/login/'; }

function renderNavbar() {
  const user = getUser();
  const current = location.pathname;

  const links = PAGES.map(p =>
    `<li><a href="${p.href}" class="${current.startsWith(p.href) ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  const authSection = user
    ? `<div class="navbar__user">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        <span>${user.email.split('@')[0]}</span>
      </div>
      <button class="btn-logout" onclick="logout()" title="Logout">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
      </button>`
    : `<a href="login.html" class="btn-ghost">Login</a>
       <a href="register.html" class="btn btn-primary">Register</a>`;

  document.getElementById('navbar').innerHTML = `
    <nav class="navbar">
      <div class="navbar__inner">
        <div style="display:flex;align-items:center;gap:32px">
          <a href="index.html" class="navbar__logo">
            <div class="navbar__logo-icon">I</div>
            InternHub
          </a>
          <ul class="navbar__links">${links}</ul>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <div class="navbar__search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Search..." />
          </div>
          <div class="navbar__actions">${authSection}</div>
        </div>
      </div>
    </nav>`;
}

function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__grid">
          <div>
            <div class="footer__logo">
              <div class="footer__logo-icon">I</div>
              <span class="footer__logo-name">InternHub</span>
            </div>
            <p class="footer__desc">India's #1 internship and training platform with 40,000+ internships in every domain.</p>
          </div>
          <div class="footer__col">
            <h4>By Place</h4>
            <ul>
              <li><a href="#">Internship in Delhi</a></li>
              <li><a href="#">Internship in Bangalore</a></li>
              <li><a href="#">Internship in Mumbai</a></li>
              <li><a href="#">Internship in Hyderabad</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>By Stream</h4>
            <ul>
              <li><a href="#">Computer Science</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Finance</a></li>
              <li><a href="#">Design</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>About</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">We're hiring</a></li>
              <li><a href="#">Hire interns</a></li>
              <li><a href="#">Team Diary</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <p>© Copyright 2026 InternHub</p>
          <div class="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
});
