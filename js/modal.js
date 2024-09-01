// 获取触发模态框的自定义属性
var modalButtons = document.querySelectorAll("[data-modal-action]");

// 获取模态框主体
var modals = document.querySelectorAll(".modal");

// 监听模态框的按钮事件
modalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var targetId = this.dataset.modalTarget;
        var targetModal = document.getElementById(targetId);

        if (targetModal) {
            var action = this.dataset.modalAction;

            if (action === "open") {
                openModal(targetModal);
            } else if (action === "close") {
                closeModal(targetModal);
            }
        }
    });
});

// 打开模态框
function openModal(modal) {
    modal.style.display = "block";
    modal.querySelector(".modal-content").classList.remove("modal-hide");
}

// 关闭模态框
function closeModal(modal) {
    modal.querySelector(".modal-content").classList.add("modal-hide");
    modal.querySelector(".modal-content").addEventListener("animationend", function () {
        modal.style.display = "none";
    }, { once: true });
}

// 监听模态框的关闭时事件
modals.forEach(function (modal) {
    var closeButton = modal.querySelector(".close");
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            var targetModal = this.closest(".modal");
            closeModal(targetModal);
        });
    }
});

// 当用户点击模态框外部时，关闭模态框
window.onclick = function (event) {
    modals.forEach(function (modal) {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
};