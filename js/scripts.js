// Function for language selection
$(document).ready(function() {
  $('.selectpicker').selectpicker();
});

// For slide change hiding and showing some divs
document.addEventListener('DOMContentLoaded', function () {
                let carousel = document.getElementById('demo');
                let elementToShow = document.getElementById('elementID');

                carousel.addEventListener('slid.bs.carousel', function (event) {
                    let activeSlide = event.to;

                    if (activeSlide === 0 || activeSlide === 1) {
                        elementToShow.classList.remove('d-none');
                    } else {
                        elementToShow.classList.add('d-none');
                    }

                    if (activeSlide === 2) {
                        let element3ToShow = document.getElementById('elementID3');
                        element3ToShow.classList.remove('d-none');
                    } else {
                        let element3ToShow = document.getElementById('elementID3');
                        element3ToShow.classList.add('d-none');
                    }

                    if (activeSlide === 3) {
                        let element4ToShow = document.getElementById('elementID4');
                        element4ToShow.classList.remove('d-none');
                    } else {
                        let element4ToShow = document.getElementById('elementID4');
                        element4ToShow.classList.add('d-none');
                    }

                });
            });


// For modal funcions
        const form = document.getElementById("myForm");
            const nameInput = document.getElementById("recipient-name");
            const phoneInput = document.getElementById("phone");
            const alertMessage = document.getElementById("alertMessage");
            const submitButton = document.getElementById("submitButton");
            const formContainer = document.getElementById("formContainer");
            const successMessage = document.getElementById("successMessage");
            const checkingBox = document.getElementById("checkingBox");
            const recipientNameBox = document.getElementById("recipient-name-box");
            const phoneBox = document.getElementById("phone-box");
            const modalCloseButton = document.getElementById("modalCloseButton");
            const textMessage = document.getElementById("textMessage");
            const closeButton = document.getElementById("closeButton");
            const consentCheck = document.getElementById("consentCheck");

            function setupRequiredInputValidation() {
                const inputs = document.querySelectorAll("input[required]");
                inputs.forEach((input) => {
                    input.addEventListener("input", function () {
                        const label = this.previousElementSibling;
                        const requiredIndicator = label.querySelector(".required-indicator");

                        requiredIndicator.style.color = this.value.trim() !== "" ? "green" : "red";
                    });

                    const label = input.previousElementSibling;
                    const requiredIndicator = label.querySelector(".required-indicator");

                    requiredIndicator.style.color = input.value.trim() !== "" ? "green" : "red";
                });
            }

            function handleModalShow(event) {
                resetForm();
                const button = event.relatedTarget;
                const recipient = button.getAttribute("data-bs-whatever");

                const modalTitle = exampleModal.querySelector(".modal-title");
                const modalBodyInput = exampleModal.querySelector(".modal-body input");

                modalTitle.textContent = `New message to ${recipient}`;
                modalBodyInput.value = recipient;
                phoneInput.classList.remove("d-none");
                nameInput.classList.remove("d-none");
                textMessage.classList.remove("d-none");
                submitButton.classList.remove("d-none");
                checkingBox.classList.remove("d-none");
                phoneBox.classList.remove("d-none");
                recipientNameBox.classList.remove("d-none");
                submitButton.classList.remove("d-none");
                closeButton.classList.add("d-none");
            }

            function toggleSubmitButton() {
                submitButton.disabled = !consentCheck.checked;
            }

            function submitForm(event) {
                event.preventDefault();
                if (nameInput.value.trim() === "" || phoneInput.value.trim() === "") {
                    alertMessage.classList.remove("d-none");
                } else {
                    resetForm();
                    nameInput.value = "";
                    phoneInput.value = "";
                    submitButton.classList.add("d-none");
                    closeButton.classList.remove("d-none");
                    successMessage.classList.remove("d-none");
                    phoneInput.classList.add("d-none");
                    nameInput.classList.add("d-none");
                    textMessage.classList.add("d-none");
                    checkingBox.classList.add("d-none");
                    phoneBox.classList.add("d-none");
                    recipientNameBox.classList.add("d-none");
                }
            }

            function resetForm() {
                form.reset();
                nameInput.value.trim();
                phoneInput.value.trim();
                alertMessage.classList.add("d-none");
                submitButton.disabled = true;
                successMessage.classList.add("d-none");
                phoneInput.classList.remove("d-none");
                nameInput.classList.remove("d-none");
                textMessage.classList.remove("d-none");
                checkingBox.classList.remove("d-none");
                phoneBox.classList.remove("d-none");
                recipientNameBox.classList.remove("d-none");
                submitButton.classList.remove("d-none");
                closeButton.classList.add("d-none");

                const requiredIndicators = formContainer.querySelectorAll(".required-indicator");
                requiredIndicators.forEach((indicator) => {
                    indicator.style.color = "red";
                });
            }

            form.addEventListener("submit", submitForm);
            submitButton.addEventListener("click", toggleSubmitButton);
            submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                if (nameInput.value.trim() === "" || phoneInput.value.trim() === "") {
                    alertMessage.classList.remove("d-none");
                } else {
                    alertMessage.classList.add("d-none");
                    successMessage.classList.remove("d-none");
                    phoneInput.classList.add("d-none");
                    nameInput.classList.add("d-none");
                    textMessage.classList.add("d-none");
                    checkingBox.classList.add("d-none");
                    phoneBox.classList.add("d-none");
                    recipientNameBox.classList.add("d-none");
                    submitButton.classList.add("d-none");
                    closeButton.classList.remove("d-none");
                }
            });

            const exampleModal = document.getElementById("exampleModal");
            if (exampleModal) {
                exampleModal.addEventListener("show.bs.modal", handleModalShow);
            }

            setupRequiredInputValidation();
