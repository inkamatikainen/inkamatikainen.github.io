document.addEventListener('DOMContentLoaded', function() {
    const projectButtons = document.querySelectorAll('.project-btn');
    const projectDetails = document.querySelectorAll('.project-detail-box');
    
    projectDetails.forEach(detail => {
        detail.style.display = 'none';
    });
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            // IDs are like "sap-detail" and "efmd-detail"
            const selectedDetail = document.getElementById(`${projectId}-detail`);
            
            // Toggle visibility: if already visible, hide it; otherwise show only this one
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