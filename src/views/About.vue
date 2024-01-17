<template>
  <div class="about-us-container">
    <section class="section-introduction">
      <div class="section-bg">
      <h1 class="section-title">Wie zijn wij</h1>
        <p>
          Even voorstellen, wij zijn het team achter Het Kliekjes Kookboek. Wij
          zijn een jonge start-up opgericht door een groep jonge gemotiveerde
          studenten van de Hanzehogeschool te Groningen.
        </p>
        <p>
          Wij hebben elkaar leren kennen op de opleiding HBO-ICT toen we in jaar
          4 in dezelfde klas kwamen. Wat begon als een idee voor een project is
          inmiddels uitgegroeid tot werkelijkheid en werken wij full-time met
          enthousiasme en passie aan ons product.
        </p>
      </div>
    </section>

    <section class="section-product">
      <div class ="section-bg">
        <h1 class="section-title">Wat is ons product</h1>
        <p>
          Het Kliekjes Kookboek is een online receptenboek. Deze kan gebruikt
          worden om nieuwe recepten te leren, informatie in te winnen of te
          filteren op overgebleven kliekjes zodat deze in plaats van verspild
          worden gebruikt gaan worden in een van de vele heerlijke recepten die
          wij aanbieden.
        </p>
      </div>
    </section>

    <section class="section-why">
      <div class ="section-bg">
        <h1 class="section-title">Waarom</h1>
        <p>
          "Gemiddeld verspilden Nederlanders in 2022 thuis 33,4 kg eten per
          persoon. Binnen de hele voedselketen zijn van boer tot bord weliswaar
          veelbelovende initiatieven om verspilling tegen te gaan, maar meer inzet
          is nodig. Nog altijd wordt ongeveer een kwart van al het voedsel in
          Nederland verspild." Bron ~rijksoverheid
        </p>
        <p>
          "Niemand kookt korter dan de Nederlander " Bron ~Trouw
        </p>
        <p>
          Omdat wij van Het Kliekjes Kookboek vooruit willen kijken naar de
          toekomst pakken wij graag het probleem van voedselverspilling aan. Zoals
          eerder genoemd is het mogelijk om op onze site met overgebleven kliekjes
          recepten te vinden. Verder vinden wij het jammer om te lezen dat
          Nederlanders een relatief kleine culinaire horizon hebben. Ook hierbij
          willen wij ons van Het Kliekjes Kookboek inzetten om dit getal te
          vermenigvuldigen en zo de mensen kennis te laten maken met andere
          heerlijke keuken!
        </p>
    </div>
    </section>

    <section class="section-motto">
      <div class ="section-bg">
        <h1 class="section-title">Motto</h1>
        <p>Heb je kliekjes en weet je niet wat je ermee moet? Zoek nu een lekker recept op gebaseerd op je restanten en maak iets nieuws van iets ouds! </p>
      </div>
    </section>
  </div>
</template>

<style scoped>

.section-introduction {
  margin-top: 100px;
}

.about-us-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: 'Work Sans, sans-serif', sans-serif;
}

.section-bg {
  /* https://www.trouw.nl/nieuws/niemand-kookt-korter-dan-de-nederlander~bcb3d436/?referrer=https://www.google.com/*/
  background-color: rgba(228, 164, 40, 0.3);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 2em;
  margin-bottom: 10px;
  font-weight: 700;
  font-family: Bitter, sans-serif;
}

.section-introduction p,
.section-product p,
.section-why p,
.section-motto p {
  line-height: 1.6;
  margin-bottom: 15px;
}
</style>

<script>
export default {
  name: "AboutUs",
  props: {
    msg: String,
  },
};
</script>
