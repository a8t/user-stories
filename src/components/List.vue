<template>
  <div>
    <form v-on:submit="addStory" class="add">
      <input type="text" v-model="newStory.storyTitle">
      <input type="submit" value="Add to unsorted">
    </form>
    <div v-for="category in categories" :key="category.categoryName">
      <h1>{{category.categoryName}}</h1>
      <draggable :class="[category.categoryName, 'category']" v-model="category.stories" :options="{group:'stories'}">
        <div class="story" v-for="story in category.stories" :key="story.storyTitle">
          <label v-bind:for="story.storyTitle">
            <input type="checkbox" class='toggle' v-model="story.completed" v-bind:name="story.storyTitle" 
  v-bind:id="story.storyTitle"
> 
            <span :class="{completed: story.completed}">{{story.storyTitle}}</span>  
            <span :class="[!story.completed ? 'checkmark':'', 'green']">✓ </span>
            <button class="delete" v-on:click="deleteStory(category, story)">X</button>
          </label>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'list',
  components: {
    draggable
  },
  data () {
    return {
      newStory: {},
      categories: [
        {
          categoryName: 'Unsorted',
          stories: [{
            storyTitle: 'entry1',
            completed: false
          }]
        },
        {
          categoryName: 'Must',
          stories: [{
            storyTitle: 'entry1',
            completed: false
          }]
        },
        {
          categoryName: 'Should',
          stories: [{
            storyTitle: 'entry1',
            completed: false
          }]
        },
        {
          categoryName: 'Could',
          stories: [{
            storyTitle: 'entry1',
            completed: false
          }]
        },
        {
          categoryName: 'Won\'t',
          stories: [{
            storyTitle: 'entry1',
            completed: false
          }]
        }
      ]
    }
  },
  methods: {
    addStory: function (e) {
      this.categories[0].stories.push({
        storyTitle: this.newStory.storyTitle,
        completed: false
      })
      this.newStory = {}
      e.preventDefault()
    },
    deleteStory: function (category, story) {
      let categoryToDeleteFrom = this.categories[this.categories.indexOf(category)]

      categoryToDeleteFrom.stories.splice(
        categoryToDeleteFrom.stories.indexOf(story)
      )
    }
  }
}
</script>

<style scoped>

  .category {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 10px;
  }
  .story {
    /* display: flex; */
    list-style: none;
    width: 300px;
    padding: 20px;
    border: 1px solid green;
    margin: 2px;
    overflow-wrap: true;
    position: relative;
  }

  .delete {
    position: absolute;
    top:2px;
    right:2px;
  }

  .completed {
    text-decoration: line-through;
    color: lightgreen;
  }

  .toggle {
    visibility: hidden;
  }

  .green {
    color:green;
  }

  .checkmark {
    display: none;
  }

</style>
