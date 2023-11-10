<template>

  <DfhiLectureHeader v-model.trim="search" />

<div class="container-dfhiLecture">

  <div class="ChoicesSubjects">
    <DfhiLecture
      v-for="selectedSubject in Subjects"
      :key="selectedSubject.id_subject"
      :selectedSubject="selectedSubject"
    />
  </div>

</div>
 
</template>

<script setup>
import DfhiLectureHeader from "../components/DfhiLectureHeader.vue";
import DfhiLecture from "../components/DfhiLecture.vue";
import { onMounted, ref, watch } from "vue";
import Subject_data from "../data/QuizData.json";
const search = ref("");
const Subjects = ref(Subject_data);
const Research = watch(search, () => {
  Subjects.value = Subject_data.filter((selectedSubject) =>
    selectedSubject.name_subject.toLowerCase().includes(search.value.toLowerCase())
  );
});


</script>

<style lang="scss" scoped>
.container-dfhiLecture{
height: calc(100vh - 30%);
overflow-y: overlay;
.ChoicesSubjects {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 35%;
  margin-top: 40px;
  justify-content: center;
}
}
</style>
