document.addEventListener('DOMContentLoaded', function() {
    const projectButtons = document.querySelectorAll('.project-btn');
    const projectDetails = document.querySelectorAll('.project-detail-box');
    
    projectDetails.forEach(detail => {
        detail.style.display = 'none';
    });
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const selectedDetail = document.getElementById(`${projectId}-detail`);
            const isCurrentlyVisible = selectedDetail && selectedDetail.style.display === 'block';

            projectDetails.forEach(detail => {
                detail.style.display = 'none';
            });
            projectButtons.forEach(btn => btn.classList.remove('active'));

            if (!isCurrentlyVisible && selectedDetail) {
                selectedDetail.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
});