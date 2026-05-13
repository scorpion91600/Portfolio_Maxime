// ============================================
//  SCRIPT.JS — Peupler le portfolio depuis data.json
// ============================================

// fetch() envoie une requête pour charger le fichier data.json
// .then() s'exécute automatiquement quand la réponse est prête

fetch('data.json')
  .then(function (reponse) {
    return reponse.json(); // convertit la réponse en objet JavaScript
  })
  .then(function (data) {

    // À partir d'ici, data contient tout le contenu de data.json
    // ex : data.logo / data.nav / data.hero / data.projets ...


    // --------------------------------------------------
    //  SÉLECTEURS — les conteneurs dans lesquels on injecte
    // --------------------------------------------------

    const logoNav = document.querySelector('nav .logo');
    const liensNav = document.querySelector('nav .nav-links');
    const ctaNav = document.querySelector('nav .btn-nav');

    const heroTitre = document.querySelector('#hero h1');
    const heroSousTitre = document.querySelector('#hero p');

    const sectionCompetences = document.querySelector('.competences');
    const sectionProjets = document.querySelector('.projets');
    const listeParcours = document.querySelector('.parcours-liste');

    const logoFooter = document.querySelector('footer .logo');
    const liensFooter = document.querySelector('footer .nav-links');
    const ctaFooter = document.querySelector('footer .btn-nav');


    // --------------------------------------------------
    //  FONCTIONS UTILITAIRES
    // --------------------------------------------------

    // Génère les <span class="tag"> à partir d'un tableau de tags
    // Exemple : genererTags(["HTML", "CSS"])
    // Résultat : '<span class="tag">HTML</span><span class="tag">CSS</span>'
    // Génère les <span class="tag"> à partir d'un tableau de tags
    function genererTags(tags) {
      let html = '';
      tags.forEach(function (tag) {
        html += `<span class="tag">${tag}</span>`;
      });
      return html;
     
      
    }
 console.log(genererTags(["test", "hulya"]));

    // Génère les <li><a> à partir du tableau data.nav
    // Exemple : genererLiens(data.nav)
    function genererLiens(liens) {
      let html = '';
      liens.forEach(function (lien) {
        html += `<li><a href="${lien.href}"> ${lien.label} ↗</a></li>`;
      });
      return html;
    }

    // --------------------------------------------------
    //  NAV
    // --------------------------------------------------
    logoNav.textContent = data.logo;
    if (logoFooter) logoFooter.textContent = data.logo;

    // TODO : remplir le logo        → logoNav.textContent = ...
    // TODO : injecter les liens     → liensNav.innerHTML  = genererLiens(...)
    // TODO : remplir le bouton CTA  → ctaNav.textContent  = ...
    //                                 ctaNav.href          = ...

    liensNav.innerHTML = genererLiens(data.nav);
    ctaNav.textContent = data.cta.label;
    ctaNav.href = data.cta.href;

    if (liensFooter) liensFooter.innerHTML = genererLiens(data.nav);
    if (ctaFooter) {
      ctaFooter.textContent = data.cta.label;
      ctaFooter.href = data.cta.href;
    }
    // --------------------------------------------------
    //  HERO
    // --------------------------------------------------
    heroTitre.innerHTML =
      data.hero.titre +
      ' <em>' + data.hero.accent + '</em><br>' +
      data.hero.suite;

    heroSousTitre.textContent = data.hero.sousTitre;
    // Le titre contient un mot en italique (balise <em>)
    // On utilise innerHTML pour pouvoir insérer des balises HTML
    // TODO : heroTitre.innerHTML = `${data.hero.titre} <em>${...}</em><br>${...}`
    // TODO : heroSousTitre.textContent = ...


    // --------------------------------------------------
    //  COMPÉTENCES
    // --------------------------------------------------

    // TODO : forEach sur data.competences
    // Pour chaque compétence, construire ce HTML et l'injecter :
    //
    // <div class="competence-card">
    //   <h3>titre</h3>
    //   <p>description</p>
    //   <div class="tags"> genererTags(...) </div>
    // </div>
    //
    // → sectionCompetences.insertAdjacentHTML('beforeend', carte)
let htmlCompetences = '';

    data.competences.forEach(function (competence) {
      htmlCompetences +=
        '<div class="competence-card">' +
        '<h3>' + competence.titre + '</h3>' +
        '<p>' + competence.description + '</p>' +
        '<div class="tags">' +
        genererTags(competence.tags) +
        '</div>' +
        '</div>';
      });

    sectionCompetences.innerHTML = htmlCompetences;

    // --------------------------------------------------
    //  PROJETS
    // --------------------------------------------------

    // TODO : forEach sur data.projets
    // Toutes les cartes ont la même structure — le CSS s'occupe
    // d'inverser automatiquement les cartes paires (:nth-of-type(even))
    //
    // <article class="projet-card">
    //   <div class="projet-content">
    //     <div class="projet-top">
    //       <h3>titre</h3>
    //       <div class="tags"> genererTags(...) </div>
    //     </div>
    //     <div class="projet-bottom">
    //       <p>description</p>
    //       <a href="lien" class="btn-projet">VOIR LE PROJET ↗</a>
    //     </div>
    //   </div>
    //   <div class="projet-image">
    //     <img src="image" alt="titre">
    //   </div>
    // </article>
    //
    // → sectionProjets.insertAdjacentHTML('beforeend', carte)


    // --------------------------------------------------
    //  PARCOURS
    // --------------------------------------------------

    // TODO : forEach sur data.parcours
    // Pour chaque item, construire ce HTML et l'injecter :
    //
    // <li class="parcours-item">
    //   <p class="parcours-titre">annee - titre</p>
    //   <p class="parcours-lieu">lieu</p>
    // </li>
    //
    // → listeParcours.insertAdjacentHTML('beforeend', item)


    // --------------------------------------------------
    //  FOOTER — même logique que la nav
    // --------------------------------------------------

    // TODO : logoFooter.textContent  = ...
    // TODO : liensFooter.innerHTML   = genererLiens(...)
    // TODO : ctaFooter.textContent   = ...
    //        ctaFooter.href          = ...

  });
