<template>
    <!--<h1 style="padding-top: 100px;">Recipe detail {{ id }}</h1>-->
    <div class="header h-[368px]">
      <div class="container-details sm:px-3 xl:px-[144px]">
        <div class="recipe-info custom-grid xl:h-[608px] xl:mb-8 lg:grid-cols-3 lg:gap-4 ">
          <div class="recipe xl:h-full mb-8 xl:mb-0 md:col-span-2 rounded-md box-shadow">
            <img src="../assets/oosterse-maaltijd.jpg" alt="maaltijd" class="w-full rounded-t-md h-[304px]" style="object-fit: cover;">
            <h1 class="recipe-title">Gekruide kikkererwten en gegrilde courgette-taco's</h1>
            <h2 class="quote"><i>“Vandaag op het menu: eet het op of sterf aan honger”</i></h2>
            <div class="grid info grid-rows-4">
              <div class="row">
                <label class="font-bold">Bereidingstijd: </label>
                <label>40 minuten</label>
              </div>
              <div class="row">
                <label class="font-bold">Score: </label>
                <label>4/5</label>
              </div>
              <div class="row">
                <label class="font-bold">Tags: </label>
                <label></label>
              </div>
              <div class="row">
                <label v-for="tag in tags" :key="tag.message">
                  {{ tag.tag }}, 
                </label>
              </div>
            </div>
          </div>
          <div class="owner h-[608px] xl:h-full mb-8 xl:mb-0 md:col-1 rounded-md box-shadow">
            Owner
          </div>
        </div>
        
        <div class="ingredients box-shadow rounded-md mb-8">
          <div style="padding-bottom: 25px;">
            <label class="font-bold" style="font-size: 25px;">Ingredienten:</label>
          </div>
          <div class="">
            <ol>
              <li v-for="ingredient in ingredients" :key="ingredient.ingredient" class="" style="">
                <input type="checkbox" class="ingredient-checkbox"> {{ ingredient.ingredient }}
              </li>
            </ol>
          </div>
        </div>

        <div class="instructions box-shadow rounded-md mb-8">
          <div style="padding-bottom: 25px;">
            <label class="font-bold" style="font-size: 25px;">Instructies:</label>
          </div>
          <div class="">
            <ol>
              <li v-for="instruction in instructions" :key="instruction.instruction" class="instruction-step" style="">
                {{ instruction.instruction }}
              </li>
            </ol>
          </div>
        </div>
        
      </div>
    </div>
    
</template>
  
<script>
  export default {
    name: "RecipeDetailPage",
    data(){
      return {
        tags: [
          { tag: 'Hoofdgerecht' }, 
          { tag: 'Mexicaans' },
          { tag: 'Vegan' },
        ],
        ingredients: [
          { ingredient: '450 gram kikkererwten' }, 
          { ingredient: '2 theelepels olijfolie' },
          { ingredient: '0.5 theelepel chilipoeder' },
          { ingredient: '0.25 theelepel paprikapoeder' },
          { ingredient: '0.25 theelepel bruine suiker' },
          { ingredient: '0.25 theelepel cacoa poeder' },
          { ingredient: '0.25 theelepel gedroogde oregano' },
          { ingredient: '0.25 theelepel kaneel' },
          { ingredient: '0.125 theelepel komijn' },
          { ingredient: '0.25 theelepel peper en zout' },
          { ingredient: '2 grote courgettes' },
          { ingredient: '1 eetlepel olijfolie' },
          { ingredient: '1 theelepel zout en peper' },
        ],
        instructions: [
          { instruction: 'Bereid de kikkererwten. Verwarm de oven voor op 400 ° F. Gooi de kikkererwten in olijfolie en kruiden en roer goed om te coaten. Verdeel de kikkererwten over een met bakpapier beklede bakplaat en bak ze 20 minuten, roer halverwege.' },
          { instruction: 'Maak ondertussen de snel ingelegde radijsjes klaar. Roer de radijsjes, azijn, ahornsiroop en zout door elkaar in een kom en laat staan ​​terwijl je de rest klaarmaakt.' },
          { instruction: 'Bereid de crema van Griekse yoghurt. Meng de Griekse yoghurt, het limoensap en ⅛ theelepel zout tot een gladde massa. Opzij zetten.'},
          { instruction: 'Rooster de pepita’s. Verwarm in een middelgrote of grote pan op middelhoog vuur ½ theelepel olijfolie tot het heet is, maar niet rookt. Voeg de pepitas toe en rooster, af en toe roerend, tot ze licht geroosterd zijn, 2 tot 3 minuten. Leg de pepitas voorzichtig op een met keukenpapier bekleed bord, laat uitlekken en meng met ⅛ theelepel zout. Als alternatief kunt u in een mum van tijd gezouten geroosterde pepitas kopen!' },
          { instruction: 'Verwarm een ​​grillpan voor op middelhoog vuur. Bestrijk de courgetteplakken aan beide kanten met olijfolie en bestrooi beide kanten rijkelijk met zout en peper. Als de grill heet is, gril je de courgette in een enkele laag tot ze aan beide kanten licht verkoold zijn, ongeveer 3 minuten per kant. Haal van het vuur.' },
          { instruction: 'Bak de tortilla\'s lichtjes op een middelhoog vuur en draai ze één keer om, of verwarm elke tortilla in een droge pan tot ze net soepel zijn, ongeveer een minuut aan elke kant.' },
          { instruction: 'Stel de taco\'s samen! Vul elke taco met gegrilde courgette, een lepel mol-gekruide kikkererwten, een scheutje Griekse yoghurtcrema, een handvol microgreens, snel gepekelde radijzen, verkruimelde feta en een snufje pepitas. Eet smakelijk!' },  
        ],
      };
    },
    props: {
      id: {
        type: Number,
        default: 0,
      }
    }
  }
</script>

<style>
  .header {
    background: linear-gradient(240deg, rgba(255, 206, 112, 0.30) 30.28%, rgba(0, 0, 0, 0.00) 88.36%), #E4A428;
  }

  .container-details {
    margin-top: 184px;
    position: absolute;
    width: 100%;
  }

  .recipe {
  }

  .recipe-title {
    padding: 0px 50px;
    margin-top: 10px;
    font-size: 35px;
    text-align: center;
    font-weight: bold;
  }

  .quote {
    font-size: 18px;
    text-align: center;
    font-weight: italic;
    margin: 50px 0px;
  }

  .info {
    padding: 0px 25px 10px 25px;
    text-align: center;
  }

  .owner {
    background: blue;
  }

  .ingredients {
    width: 100%;
    padding: 25px;
  }

  .ingredient-checkbox {
    margin-bottom: 3px;
    border-radius: 3px !important;
  }

  .instructions {
    padding: 25px;
  }

  .instruction-step {
    margin-left: 35px; 
    padding-bottom: 10px; 
    list-style: o;
  }

  li::marker {
    font-size: 2em;
    color: #444444;
  }

  @media (min-width: 1024px) {
    .custom-grid {
      display: grid;
    }
  }

  .box-shadow {
    box-shadow: 0px 3px 10px 0px #000;
  }
</style>