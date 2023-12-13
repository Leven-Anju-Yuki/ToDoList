let taches = [];

function afficherTaches() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    taches.forEach((tache, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${tache.terminee ? 'completed' : ''}" onclick="marquerTerminee(${index})">${tache.nom}</span>
            <button class="delete-btn" onclick="supprimerTache(${index})">Supprimer</button>
        `;
        taskList.appendChild(li);
    });
}

function ajouterTache() {
    const newTaskInput = document.getElementById('newTaskInput');
    const nomTache = newTaskInput.value.trim();

    if (nomTache !== '') {
        taches.push({ nom: nomTache, terminee: false });
        newTaskInput.value = '';
        afficherTaches();
    }
}

function marquerTerminee(index) {
    taches[index].terminee = !taches[index].terminee;
    afficherTaches();
}

function supprimerTache(index) {
    taches.splice(index, 1);
    afficherTaches();
}

afficherTaches();
