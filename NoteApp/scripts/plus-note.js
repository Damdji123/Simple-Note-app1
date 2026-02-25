
export function plusNewNote() {
    const modal = document.getElementById("infoModal");
    const openBtn = document.getElementById("add-note");
    const closeBtn = document.getElementById("closeBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    openBtn.addEventListener("click", () => {
        modal.showModal();
    });

    closeBtn.addEventListener("click", () => {
        modal.close();
    });

    cancelBtn.addEventListener("click", () => {
        modal.close();
    });
}
