const contactsContainer = document.getElementById('contacts');
        const addContactForm = document.getElementById('addContactForm');
        const editModal = document.getElementById('editModal');
        const editNameInput = document.getElementById('editName');
        const editEmailInput = document.getElementById('editEmail');
        const saveEditBtn = document.getElementById('saveEditBtn');
        const closeEditBtn = document.getElementById('closeEditBtn');
        let editingContact;

        addContactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name && email) {
                addContact(name, email);
                addContactForm.reset();
            } else {
                alert('Please provide both name and email.');
            }
        });

        function addContact(name, email) {
            const contactCard = document.createElement('div');
            contactCard.className = 'contact-card';
            contactCard.innerHTML = `
                <h3>${name}</h3>
                <p>${email}</p>
                <button onclick="editContact(this)">Edit</button>
                <button onclick="deleteContact(this)">Delete</button>
            `;

            contactsContainer.appendChild(contactCard);
        }

        function editContact(button) {
            const contactCard = button.parentElement;
            const name = contactCard.querySelector('h3').innerText;
            const email = contactCard.querySelector('p').innerText;

            editingContact = { name, email, card: contactCard };
            editNameInput.value = name;
            editEmailInput.value = email;
            editModal.style.display = 'flex';

            document.getElementById('name').value = name;
            document.getElementById('email').value = email;
        }

        saveEditBtn.addEventListener('click', function() {
            const newName = editNameInput.value;
            const newEmail = editEmailInput.value;

            if (newName && newEmail) {
                editingContact.card.innerHTML = `
                    <h3>${newName}</h3>
                    <p>${newEmail}</p>
                    <button onclick="editContact(this)">Edit</button>
                    <button onclick="deleteContact(this)">Delete</button>
                `;
                closeEditModal();
                resetMainForm();
            } else {
                alert('Please provide both name and email.');
            }
        });

        closeEditBtn.addEventListener('click', closeEditModal);

        function closeEditModal() {
            editingContact = null;
            editModal.style.display = 'none';
        }

        function resetMainForm() {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
        }

        function deleteContact(button) {
            const contactCard = button.parentElement;
            contactsContainer.removeChild(contactCard);
        }
