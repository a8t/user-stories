<template>
  <div class="grid-container">
    <form v-on:submit="addStory" class="add">
      <input id="addinput" type="text" v-model="newStory.storyTitle" placeholder="As an X, I can..." required>
      <br>
      <input id="addsubmit" type="submit" value="Add">
    </form>
    <div v-for="category in categories" :key="category.categoryName" :class="[category.categoryName, 'category']">
      <h1>{{category.categoryName}} Have</h1>
      <draggable class="drag" v-model="category.stories" :options="{group:'stories'}">
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

  .grid-container {
    display: grid;
    grid-template-areas: 
      "a adds     must   b"
      "a unsorted should b"
      "a unsorted could  b"
      "a unsorted wont   b";
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .add {
    grid-area: adds;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #addinput {
    font-size: 24px;
    padding: 10px;
  }

  #addinput:invalid {
    box-shadow: none;
  }

  #addsubmit {
    height: 30px;
  }

  .Unsorted {
    grid-area: unsorted;
    align-self: flex-start;
  }

  .Must {
    grid-area: must;
  }

  .Should {
    grid-area: should;
  }

  .Could {
    grid-area: could;
  }

  .Won\'t {
    grid-area: wont;
  }

  .Unsorted > h1 {
    display: none;
  }

  .drag,
  .category {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100px;   
    position: relative;
    min-width: 100px; 
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
