<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCVO2OxvQBghdDqFsA4PisSkj93qSPVjP4",
  authDomain: "skin-beauty-tc.firebaseapp.com",
  databaseURL: "https://skin-beauty-tc-default-rtdb.firebaseio.com",
  projectId: "skin-beauty-tc",
  storageBucket: "skin-beauty-tc.appspot.com",
  messagingSenderId: "384973480454",
  appId: "1:384973480454:web:1dfd21aff4bd648a97d987",
  measurementId: "G-HDSN055BC5"
};
initializeApp(firebaseConfig);
export default defineComponent({
  name: "App"
});
</script>
