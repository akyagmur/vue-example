<template>
    <div>
        {{ pageTitle }}

        <book-page-component> </book-page-component>
    </div>
</template>
<script>
import BookPageComponent from '../../js/Components/BookPageComponent'
export default {
  name: "BookPage",
  components: {
      BookPageComponent
  },
  data() {
    return {
      pageTitle: "book page"
    };
  }
};
</script>
