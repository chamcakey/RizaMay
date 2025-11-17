// Personal Dashboard JavaScript - Fun & Interactive
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeAnimations();
    initializeScrollEffects();
    initializeFormHandling();
    initializeMobileMenu();
    initializeProfileImageUpload();
    
    // Add loading animation
    addLoadingAnimation();
    
    // Initialize particle effects
    createParticleEffect();
});

// Navigation System
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link and target section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // Close mobile menu if open
            closeMobileMenu();
            
            // Add smooth scroll effect
            smoothScrollToSection(targetSection);
        });
    });
    
    // Handle scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Smooth scroll to section
function smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile Menu
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (navMenu && hamburger) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// Animations and Effects
function initializeAnimations() {
    // Add stagger animation to elements
    addStaggerAnimation();
    
    // Add hover effects
    addHoverEffects();
    
    // Add typing effect to hero title
    addTypingEffect();
    
    // Add floating animation to shapes
    addFloatingAnimations();
}

// Stagger animation for elements
function addStaggerAnimation() {
    const animatedElements = document.querySelectorAll('.project-card, .contact-card, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Hover effects
function addHoverEffects() {
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Contact cards hover effect
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(2deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
}

// Typing effect for hero title
function addTypingEffect() {
    const titleElement = document.querySelector('.title-name');
    if (!titleElement) return;
    
    const originalText = titleElement.textContent;
    titleElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            titleElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            // Add cursor blink effect
            addCursorBlink(titleElement);
        }
    };
    
    // Start typing after a delay
    setTimeout(typeWriter, 1000);
}

// Add cursor blink effect
function addCursorBlink(element) {
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.animation = 'blink 1s infinite';
    element.appendChild(cursor);
    
    // Add CSS for cursor blink
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Floating animations
function addFloatingAnimations() {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 0.5}s`;
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Form handling
function initializeFormHandling() {
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }
}

// Handle form submission
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #4ecdc4, #44a08d)' : 'linear-gradient(135deg, #ff6b6b, #ee5a52)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add notification content styles
    const style = document.createElement('style');
    style.textContent = `
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .notification-content i {
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Loading animation
function addLoadingAnimation() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
}

// Particle effect
function createParticleEffect() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    document.body.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        animation: float-particle ${duration}s linear infinite;
        opacity: 0.6;
    `;
    
    container.appendChild(particle);
    
    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.6;
            }
            90% {
                opacity: 0.6;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Document download functionality
function downloadDocument(type) {
    const fileNames = {
        'cv': 'Charlim_Oronia_CV.pdf',
        'resume': 'Charlim_Oronia_Resume.pdf'
    };
    
    showNotification(`Preparing ${fileNames[type]} download...`, 'info');
    
    // Simulate download
    setTimeout(() => {
        showNotification(`${fileNames[type]} would be downloaded here!`, 'success');
    }, 1500);
}

// Add ripple effect to buttons
function addRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
        const button = e.target.classList.contains('btn') ? e.target : e.target.closest('.btn');
        addRippleEffect(button, e);
    }
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const currentSection = document.querySelector('.section.active');
        const sections = Array.from(document.querySelectorAll('.section'));
        const currentIndex = sections.indexOf(currentSection);
        
        let nextIndex;
        if (e.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % sections.length;
        } else {
            nextIndex = (currentIndex - 1 + sections.length) % sections.length;
        }
        
        const nextSection = sections[nextIndex];
        const nextSectionId = nextSection.id;
        
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelector(`[data-section="${nextSectionId}"]`).classList.add('active');
        
        // Update sections
        sections.forEach(section => section.classList.remove('active'));
        nextSection.classList.add('active');
    }
});

// Performance monitoring
function logPerformance() {
    if (window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`🚀 Page loaded in ${loadTime}ms`);
    }
}

window.addEventListener('load', logPerformance);

// Profile Image Upload Functionality
function initializeProfileImageUpload() {
    const profileImageInput = document.getElementById('profileImageInput');
    const profileImage = document.getElementById('profileImage');
    const profileImagePlaceholder = document.getElementById('profileImagePlaceholder');
    
    if (profileImageInput && profileImage && profileImagePlaceholder) {
        // Handle file selection
        profileImageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // Validate file type
                if (!file.type.startsWith('image/')) {
                    showNotification('Please select a valid image file.', 'error');
                    return;
                }
                
                // Validate file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    showNotification('Image size should be less than 5MB.', 'error');
                    return;
                }
                
                // Show loading state
                showImageUploadLoading();
                
                // Create FileReader to preview image
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Hide loading and show image
                    hideImageUploadLoading();
                    
                    // Update image source
                    profileImage.src = e.target.result;
                    profileImage.style.display = 'block';
                    profileImagePlaceholder.style.display = 'none';
                    
                    // Add success animation
                    addImageUploadSuccessAnimation();
                    
                    // Show success notification
                    showNotification('Profile picture updated successfully!', 'success');
                    
                    // Save to localStorage for persistence
                    localStorage.setItem('profileImage', e.target.result);
                };
                
                reader.onerror = function() {
                    hideImageUploadLoading();
                    showNotification('Error reading image file.', 'error');
                };
                
                reader.readAsDataURL(file);
            }
        });
        
        // Load saved image on page load
        loadSavedProfileImage();
    }
}

// Load saved profile image from localStorage
function loadSavedProfileImage() {
    const savedImage = localStorage.getItem('profileImage');
    const profileImage = document.getElementById('profileImage');
    const profileImagePlaceholder = document.getElementById('profileImagePlaceholder');
    
    if (savedImage && profileImage && profileImagePlaceholder) {
        profileImage.src = savedImage;
        profileImage.style.display = 'block';
        profileImagePlaceholder.style.display = 'none';
    }
}

// Show loading state during image upload
function showImageUploadLoading() {
    const uploadBtn = document.querySelector('.upload-btn');
    if (uploadBtn) {
        uploadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Uploading...</span>';
        uploadBtn.style.pointerEvents = 'none';
    }
}

// Hide loading state
function hideImageUploadLoading() {
    const uploadBtn = document.querySelector('.upload-btn');
    if (uploadBtn) {
        uploadBtn.innerHTML = '<i class="fas fa-camera"></i><span>Change Photo</span>';
        uploadBtn.style.pointerEvents = 'auto';
    }
}

// Add success animation to image
function addImageUploadSuccessAnimation() {
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.style.animation = 'none';
        profileImage.offsetHeight; // Trigger reflow
        profileImage.style.animation = 'imageUploadSuccess 0.6s ease-out';
    }
}

// Add CSS for image upload success animation
const imageUploadStyle = document.createElement('style');
imageUploadStyle.textContent = `
    @keyframes imageUploadSuccess {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        50% {
            transform: scale(1.1);
            opacity: 0.8;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    .profile-image.uploading {
        pointer-events: none;
    }
    
    .profile-image.uploading .image-overlay {
        opacity: 1;
        background: rgba(0, 0, 0, 0.8);
    }
    
    .profile-image.uploading .upload-btn {
        transform: scale(1);
    }
`;
document.head.appendChild(imageUploadStyle);

// Add drag and drop functionality
function addDragAndDropSupport() {
    const profileImage = document.querySelector('.profile-image');
    const profileImageInput = document.getElementById('profileImageInput');
    
    if (profileImage && profileImageInput) {
        // Prevent default drag behaviors
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            profileImage.addEventListener(eventName, preventDefaults, false);
            document.body.addEventListener(eventName, preventDefaults, false);
        });
        
        // Highlight drop area when item is dragged over it
        ['dragenter', 'dragover'].forEach(eventName => {
            profileImage.addEventListener(eventName, highlight, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            profileImage.addEventListener(eventName, unhighlight, false);
        });
        
        // Handle dropped files
        profileImage.addEventListener('drop', handleDrop, false);
    }
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(e) {
    const profileImage = document.querySelector('.profile-image');
    profileImage.classList.add('drag-over');
}

function unhighlight(e) {
    const profileImage = document.querySelector('.profile-image');
    profileImage.classList.remove('drag-over');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    
    if (files.length > 0) {
        const profileImageInput = document.getElementById('profileImageInput');
        profileImageInput.files = files;
        
        // Trigger change event
        const event = new Event('change', { bubbles: true });
        profileImageInput.dispatchEvent(event);
    }
}

// Add drag and drop CSS
const dragDropStyle = document.createElement('style');
dragDropStyle.textContent = `
    .profile-image.drag-over {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(10, 92, 54, 0.5);
    }
    
    .profile-image.drag-over .image-overlay {
        opacity: 1;
        background: rgba(10, 92, 54, 0.8);
    }
    
    .profile-image.drag-over .upload-btn {
        transform: scale(1.1);
    }
`;
document.head.appendChild(dragDropStyle);

// Initialize drag and drop when DOM is loaded
document.addEventListener('DOMContentLoaded', addDragAndDropSupport);

// Export functions for global access
window.downloadDocument = downloadDocument;