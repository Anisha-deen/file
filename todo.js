document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = form.querySelector('input[type="text"]');
    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText === '') return;

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add toggle complete on click
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.title = "Delete task";
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();  // Prevent triggering li click event
            ul.removeChild(li);
        });

        li.appendChild(deleteBtn);
        ul.appendChild(li);

        input.value = '';
        input.focus();
    });
});
