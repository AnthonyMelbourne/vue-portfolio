<template>
  <div class="main-content">
    <div class="left-content">
      <h1>Featured Reviews</h1>
      <li>(click image to open)</li>
      <section class="left-content-inner-border">
        <div class="featured">
          <div class="featured-excerpt">
            <p>
              "Call of Duty Black Ops Cold War -- the direct sequel to the
              original and fan-favorite Call of Duty: Black Ops -- drops fans
              into the depths of the Cold War’s volatile geopolitical battle of
              the early 1980s."
            </p>
          </div>
          <button
            class="modal-open featured-game-thumbnail thumbnmail"
            data-modal="featured-game1"
          ></button>
        </div>

        <div class="featured">
          <button
            class="modal-open featured-album-thumbnail thumbnmail"
            data-modal="featured-album1"
          ></button>
          <div class="featured-excerpt">
            <p>
              "This is a phenomenal debut album – ultimately a bold choice to do
              a concept record for your first, but given the experience in song
              writing that the various members possess, it’s not surprising that
              they pulled it off in spades."
            </p>
          </div>
        </div>

        <div class="featured">
          <div class="featured-excerpt">
            <p>
              "It’s amiably amusing, and Bill and Ted’s Peter Pannish inability
              to accept the ageing process is enjoyably surreal."
            </p>
          </div>
          <button
            class="modal-open featured-movie-thumbnail thumbnmail"
            data-modal="featured-movie1"
          ></button>
        </div>
      </section>
    </div>

    <div class="right-content">
      <a href="./HTML/music-reviews.html">
        <h1>Music Reviews</h1>
      </a>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-album2">
            DEFEATED SANITY - The Sanguinary Impetus
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-album3">
            MAKE THEM SUFFER - How To Survive A Funeral
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-album4">
            BLEED FROM WITHIN - Fracture
          </button>
        </div>
      </div>

      <a href="./HTML/film-reviews.html">
        <h1>Film Reviews</h1>
      </a>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-movie2">
            Love and Monsters (2020)
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-movie3">
            The Hunt (2020)
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-movie4">
            The New Mutants (2020)
          </button>
        </div>
      </div>

      <a href="./HTML/game-reviews.html">
        <h1>Game Reviews</h1>
      </a>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-game2">
            Call Of : Modern Warfare
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-game3">
            Red Dead Redemption 2
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-game4">
            Player Unknown's : Battlegrounds
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.main-content {
  display: flex;
  flex-direction: row;
}
</style>
