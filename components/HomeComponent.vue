<script setup>

</script>

<template>
  <div :class="$style.main">
    <div :class="$style.section">
      <div :class="$style.info">
        <h1>IntelliJ Plugin</h1>
        <p>
          C3Build offers a feature-rich Plugin for the IntelliJ IDEA Platform.
          It includes Syntax highlighting, Code completion and a Task toolbar similar to the Gradle plugin.
        </p>
      </div>
      <img alt="promo" src="../promo-ij.png"/>
    </div>
    <div :class="$style.section">
      <img alt="promo" src="../promo-ts.png"/>
      <div :class="$style.info">
        <h1>TreeSitter Grammar</h1>
        <p>
          C3Build also has a TreeSitter grammar available for use in editors like Vim/NeoVim, Emacs and more.
        </p>
      </div>
    </div>
  </div>
</template>

<style module>
.main {
  translate: 0 100px;
  display: flex;
  gap: 100px;
  flex-direction: column;
}

.section {
  display: flex;
  gap: 20px;
  align-items: center;

  .info {
    width: 30%;

    p {
      color: gray;
    }
  }

  img {
    width: 70%;
  }
}
</style>