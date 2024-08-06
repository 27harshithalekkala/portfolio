document.addEventListener('DOMContentLoaded', function () {
    const textWrappers = document.querySelectorAll('.animated-text');

    textWrappers.forEach(wrapper => {
        const text = wrapper.getAttribute('data-text');
        const html = text.split('').map((char, i) => <span class="letter">${char}</span>).join('');
        wrapper.innerHTML = html;
    });

    anime.timeline({loop: true})
        .add({
            targets: '.animated-text .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1500,
            delay: (el, i) => 150 * (i + 1)
        }).add({
            targets: '.animated-text .letter',
            opacity: [1, 0],
            easing: "easeInOutQuad",
            duration: 1500,
            delay: (el, i) => 150 * (i + 1)
        });
});