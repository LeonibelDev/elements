<template>
  <div class="text-center">
    <h1>Crea una página con los elementos básicos de HTML.</h1>
    <h2>insertar imagen, video y audio.</h2>
    <hr>
  </div>
  
  <div class="avatar-container">
    <img
      src="https://api.dicebear.com/9.x/notionists/svg?seed=Abby"
      alt="avatar"
      class="avatar" />
    <span class="text">
      Leonibel Segura Ramirez
      <br>
      A00141141
    </span>
  </div>

  <div class="mt">
    <h3>1. Insertar video</h3>

    <video controls>
      <source src="https://www.pexels.com/download/video/5803089/?fps=50.0&h=720&w=1280" type="video/mp4">
      Tu navegador no soporta el elemento video.
    </video>

    <p>Codigo para insertar el video</p>
    <pre>
      <code class="language-html">{{ htmlVideoCode }}</code>
    </pre>
  </div>

  <div class="mt">
    <h3>2. Insertar imagen</h3>
    <img src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    
    <p>Codigo para insertar la imagen</p>
    <pre>
      <code class="language-html">{{ htmlImageCode }}</code>
    </pre>
  </div>
  
  <div class="mt">
    <h3>3. Insertar audio</h3>
    <audio controls>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3">
    </audio>

    <p>Codigo para insertar el audio</p>
    <pre>
      <code class="language-html">{{ htmlAudioCode }}</code>
    </pre>
  </div>
  
</template>

<script>
import 'prismjs';

export default {
  data() {
    return {
      htmlVideoCode: `
      <video>
        <source src="video.mp4" type="video/mp4">
      </video>`,

      htmlImageCode: `
      <img src="image.jpg" alt="">`,

      htmlAudioCode: `
      <audio>
        <source src="audio.mp3" type="audio/mp3">
      </audio>`
    };
  },
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll();
    });
  }
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}
code {
  font-family: monospace;
}

.mt {
  margin-top: 3rem;
}

.avatar-container {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  margin-top: 3rem;
}

.avatar {
  border-radius: 50%; /* Hace que la imagen sea circular */
  width: 50px; /* Ajusta el tamaño del círculo */
  height: 50px; /* Ajusta el tamaño del círculo */
  object-fit: cover; /* Asegura que la imagen se ajuste al contenedor sin deformarse */
  margin-right: 10px; /* Espacio entre la imagen y el texto */
}

.text {
  font-weight: bold; /* Hace que el texto esté en negrita */
}
</style>
