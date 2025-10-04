document.addEventListener('DOMContentLoaded', function() {
    const projectButtons = document.querySelectorAll('.project-btn');
    const projectDetails = document.querySelectorAll('.project-detail-box');
    
    projectDetails.forEach(detail => {
        detail.style.display = 'none';
    });
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const selectedDetail = document.getElementById(`project${projectId}-detail`);
            
            projectDetails.forEach(detail => {
                detail.style.display = 'none';
            });
            
            projectButtons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');
            if (selectedDetail) {
                selectedDetail.style.display = 'block';
            }
        });
    });
});