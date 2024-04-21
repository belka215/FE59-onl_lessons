"use strict";

const action = document.querySelector('.action');
const deleteAllBtn = document.createElement('button');
deleteAllBtn.classList.add('action__delete-all-btn');
deleteAllBtn.classList.add('btn');
deleteAllBtn.textContent = 'Delete All';
action.prepend(deleteAllBtn);


