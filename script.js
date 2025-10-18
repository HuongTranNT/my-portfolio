// Chờ cho toàn bộ nội dung HTML được tải xong
document.addEventListener('DOMContentLoaded', () => {

    // 1. Lấy tất cả các liên kết file trong sidebar
    const fileLinks = document.querySelectorAll('.file-list .file-item');
    
    // 2. Lấy tất cả các nội dung trong editor
    const editorContents = document.querySelectorAll('.editor-content');
    
    // 3. Lấy tab đang hoạt động
    const activeTab = document.querySelector('.tab.active');

    // 4. Lặp qua từng liên kết file để thêm sự kiện "click"
    fileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Ngăn trình duyệt nhảy trang khi nhấn vào href="#..."
            event.preventDefault(); 

            // Lấy ID của nội dung cần hiển thị (ví dụ: "#about")
            const targetId = link.getAttribute('href'); 
            
            // Lấy nội dung của liên kết (ví dụ: "thong-tin-ca-nhan.html")
            const linkText = link.innerText.trim();
            
            // Lấy icon của liên kết
            const linkIconHtml = link.querySelector('i').outerHTML;

            // --- A. Ẩn tất cả nội dung ---
            editorContents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
            });

            // --- B. Hiển thị nội dung tương ứng ---
            const targetContent = document.querySelector(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
                targetContent.classList.add('active');
            }

            // --- C. Cập nhật nội dung của Tab ---
            if (activeTab) {
                // innerHTML để giữ lại thẻ icon
                activeTab.innerHTML = `${linkIconHtml} ${linkText} <i class="fa-solid fa-xmark close-icon"></i>`; 
            }
        });
    });
});