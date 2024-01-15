<template>
    <div class="rating__stars">
      <label v-bind:class="(ratingVal >= 1)?'rating__label-filled':'rating__label'">
        <svg class="rating__star" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
          <g transform="translate(16,16)">
            <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
          </g>
          <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <g transform="translate(16,16) rotate(180)">
              <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
              <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
            </g>
            <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
              <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
            </g>
          </g>
        </svg>
      </label>
      <label v-bind:class="(ratingVal >= 2)?'rating__label-filled':'rating__label'">
        <svg class="rating__star" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
          <g transform="translate(16,16)">
            <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
          </g>
          <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <g transform="translate(16,16) rotate(180)">
              <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
              <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
            </g>
            <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
              <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
            </g>
          </g>
        </svg>
      </label>
      <label v-bind:class="(ratingVal >= 3)?'rating__label-filled':'rating__label'">
        <svg class="rating__star" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
          <g transform="translate(16,16)">
            <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
          </g>
          <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <g transform="translate(16,16) rotate(180)">
              <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
              <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
            </g>
            <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
              <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
            </g>
          </g>
        </svg>
      </label>
      <label v-bind:class="(ratingVal >= 4)?'rating__label-filled':'rating__label'">
        <svg class="rating__star" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
          <g transform="translate(16,16)">
            <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
          </g>
          <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <g transform="translate(16,16) rotate(180)">
              <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
              <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
            </g>
            <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
              <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
            </g>
          </g>
        </svg>
      </label>
      <label v-bind:class="(ratingVal >= 5)?'rating__label-filled':'rating__label'">
        <svg class="rating__star" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
          <g transform="translate(16,16)">
            <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
          </g>
          <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <g transform="translate(16,16) rotate(180)">
              <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
              <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
            </g>
            <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
              <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
              <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
            </g>
          </g>
        </svg>
      </label>
    </div>
</template>

<script>
export default {
  name: "star-rating",
  props: {
    'ratingVal': null,
    'id': String,
  },
  data() {
    return {
      ratings: [
        {id: 1, name: "Terrible"},
        {id: 2, name: "Bad"},
        {id: 3, name: "OK"},
        {id: 4, name: "Good"},
        {id: 5, name: "Excellent"}
      ],
    }
  },
  created() {

  }
}
</script>

<style scoped>
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  font-size: calc(24px + (30 - 24) * (100vw - 320px) / (1280 - 320));
}
body {
  background-color: #e3e4e8;
  color: #17181c;
  display: flex;
  height: 100vh;
  transition: background-color 0.3s, color 0.3s;;
}
.rating {
  margin: auto;
}
.rating__display {
  font-size: 1em;
  font-weight: 500;
  min-height: 1.25em;
  position: absolute;
  top: 100%;
  width: 100%;
  text-align: center;
}
.rating__stars {
  display: flex;
  padding-bottom: 0.375em;
  position: relative;
}
.rating__star {
  display: block;
  overflow: visible;
  pointer-events: none;
  width: 22px;
  height: 21px;
  fill: #444444;
}
.rating__star-ring, .rating__star-fill, .rating__star-line, .rating__star-stroke {
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
.rating__star-ring, .rating__star-fill, .rating__star-line {
  stroke: #444444;
}
.rating__star-fill {
  fill: #444444;
  transform: scale(0);
  transition: fill 0.3s cubic-bezier(0.42, 0, 0.58, 1), transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
}

.rating__star-line {
  stroke-dasharray: 12 13;
  stroke-dashoffset: -13;
}
.rating__star-stroke {
  stroke: #c7cad1;
  transition: stroke 0.3s;
}

.rating__label-filled .rating__star-fill{
  transform: scale(1);
}
</style>