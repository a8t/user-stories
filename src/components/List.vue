<template>
  <div>
    <div v-for="category in categories">
      <h1>{{category.categoryName}}</h1>
      <ul>
        <li v-for="story in category.stories">
          {{story.storyTitle}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      categories: [
        {
          categoryName: 'Must',
          stories: [{
            storyTitle: 'entry1',
            complete: false,
            priority: 1
          }]
        },
        {
          categoryName: 'Should',
          stories: [{
            storyTitle: 'entry1',
            complete: false,
            priority: 1
          }]
        },
        {
          categoryName: 'Could',
          stories: [{
            storyTitle: 'entry1',
            complete: false,
            priority: 1
          }]
        },
        {
          categoryName: 'Won\'t',
          stories: [{
            storyTitle: 'entry1',
            complete: false,
            priority: 1
          }]
        }
      ]
    }
  }
}
</script>

<style scoped>

  li {
    list-style: none;
  }

</style>
