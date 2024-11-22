function displayClassList() {
    const classList = [
        { name: "Vũ Bạch Diệp", gender: "Nữ", birthplace: "Hưng yên" },
        { name: "Trịnh Duy Đạt Huy", gender: "Nam", birthplace: "Hà Nội" },
        { name: "Nguyễn Đoàn Minh Chi", gender: "Nữ", birthplace: "Hà Nội" },
        { name: "Phạm Quang Lâm", gender: "Nam", birthplace: "Hà Nội" },
        { name: "Tống Quang Trung", gender: "Nam", birthplace: "Hà Nội" },
        { name: "Du Thị Kim Thư", gender: "Nữ", birthplace: "Hà Nội" },
        { name: "Vũ Hải Vịnh", gender: "Nam", birthplace: "Hà Nội" },
    ];

    
    const container = document.getElementById("class-list");
    if (!container) {
        console.error("Không tìm thấy phần tử HTML có id 'class-list'");
        return;
    }

    let htmlContent = "<ul>";
    classList.forEach(student => {
        htmlContent += `
            <li>
                <strong>Họ và tên:</strong> ${student.name} <br>
                <strong>Giới tính:</strong> ${student.gender} <br>
                <strong>Nơi sinh:</strong> ${student.birthplace}
            </li>
        `;
    });
    htmlContent += "</ul>";

    container.innerHTML = htmlContent;
}