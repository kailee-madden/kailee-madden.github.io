/**
 * Utility: Get element by ID
 */
const getElement = (id) => document.getElementById(id);

/**
 * Utility: Create a grid link element with icon and text
 */
const createGridLink = (title, url, iconName) => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  
  const icon = document.createElement('i');
  icon.className = 'grid-item-icon';
  icon.setAttribute('data-lucide', iconName);
  
  const text = document.createElement('div');
  text.className = 'grid-item-text';
  text.innerHTML = `<span>${title}</span>`;
  
  link.appendChild(icon);
  link.appendChild(text);
  return link;
};

/**
 * Populate a grid container with items
 */
const populateGrid = (containerId, items, createItemFn) => {
  const container = getElement(containerId);
  container.innerHTML = '';
  items.forEach(item => container.appendChild(createItemFn(item)));
};

/**
 * Load and populate page with data from data.json
 */
const loadData = async () => {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error(`Failed to load data.json: ${response.statusText}`);
    
    const data = await response.json();
    
    // Profile
    getElement('profile-image').src = data.profile.image;
    getElement('profile-image').alt = data.profile.imageAlt;
    getElement('profile-name').textContent = data.profile.name;
    getElement('profile-title').textContent = data.profile.title;
    getElement('resume-btn').href = data.contact.resume;
    
    // Summary
    getElement('summary').textContent = data.summary;
    
    // Education
    const educationList = getElement('education-list');
    educationList.innerHTML = '';
    data.education.forEach(edu => {
      educationList.innerHTML += `<li><strong>${edu.degree}</strong><span class="school">${edu.school}</span></li>`;
    });
    
    // Projects & Writing
    populateGrid('projects-grid', data.projects, project => 
      createGridLink(project.title, project.url, project.icon)
    );
    populateGrid('writing-grid', data.writing, item => 
      createGridLink(item.title, item.url, item.icon)
    );
    
    // Contact
    getElement('contact-email').href = `mailto:${data.contact.email}`;
    getElement('contact-github').href = data.contact.github;
    getElement('contact-linkedin').href = data.contact.linkedin;
    
    // Render icons
    window.lucide?.createIcons();
  } catch (error) {
    console.error('Error loading data:', error);
    document.body.innerHTML = `
      <div style="max-width: 600px; margin: 100px auto; padding: 20px; text-align: center;">
        <h1>⚠️ Error Loading Page</h1>
        <p>Failed to load data.json: ${error.message}</p>
        <p>Please check that the file exists and is properly formatted.</p>
      </div>
    `;
  }
};

/**
 * Setup dark mode toggle
 */
const setupThemeToggle = () => {
  const themeToggle = getElement('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  const updateTheme = (theme) => {
    document.body.setAttribute('data-theme', theme);
  };
  
  updateTheme(currentTheme);
  
  themeToggle.addEventListener('click', () => {
    const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
  });
};

/**
 * Initialize page on DOM load
 */
document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  loadData();
});

