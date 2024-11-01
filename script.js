const imagens = document.querySelectorAll('.banner_projetos img');

imagens.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

imagens.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.opacity = '0.8';
        img.style.transition = 'opacity 0.3s ease';
    });

    img.addEventListener('mouseleave', () => {
        img.style.opacity = '1';
    });
});

imagens.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform += ' rotate(3deg)';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = img.style.transform.replace(' rotate(3deg)', '');
    });
});

const sections = document.querySelectorAll('.projetos, .contato, .sobre');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

const redesSociais = document.querySelectorAll('.redes-sociais a');

redesSociais.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateX(5px)';
        link.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateX(0)';
    });
});
