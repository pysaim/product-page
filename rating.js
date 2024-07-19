document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating');
    const reviewText = document.getElementById('review-text');
    const submitButton = document.getElementById('submit-button');
    const reviewsList = document.getElementById('reviews-list');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            ratingValue.textContent = value;

            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < stars.length; i++) {
                if (stars[i].getAttribute('data-value') <= value) {
                    stars[i].classList.add('selected');
                } else {
                    stars[i].classList.remove('selected');
                }
            }
        });

        star.addEventListener('mouseover', function () {
            stars.forEach(s => s.classList.remove('hovered'));
            for (let i = 0; i < stars.length; i++) {
                if (stars[i].getAttribute('data-value') <= this.getAttribute('data-value')) {
                    stars[i].classList.add('hovered');
                } else {
                    stars[i].classList.remove('hovered');
                }
            }
        });

        star.addEventListener('mouseout', function () {
            stars.forEach(s => s.classList.remove('hovered'));
        });
    });

    submitButton.addEventListener('click', function () {
        const rating = ratingValue.textContent;
        const review = reviewText.value;

        if (rating === '0' || review.trim() === '') {
            alert('Please provide a rating and a review.');
            return;
        }

        const reviewItem = document.createElement('li');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `<strong>Rating: ${rating} stars</strong><p>${review}</p>`;

        reviewsList.appendChild(reviewItem);

        ratingValue.textContent = '0';
        reviewText.value = '';
        stars.forEach(s => s.classList.remove('selected'));
    });
});
