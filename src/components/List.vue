<template>
  <div class="grid-container">
    <button id="log" v-on:click="logData()"></button>
    <form v-on:submit="addStory" class="add">
      <h1 id="enter">Enter User Stories:</h1>
      <input autocomplete="off" id="addinput" type="text" v-model="newStory.storyTitle" placeholder="As an X, I can..." required>
      <br>
      <input id="addsubmit" type="submit" value="Add">
    </form>
    <div v-for="category in categories" :key="category.categoryName" :class="[category.categoryName, 'category']">
      <h1>{{category.categoryName}} Have</h1>

      <draggable class="drag" v-model="category.stories" :options="{group:'stories', scrollSensitivity:60}">
        <div class="story" v-for="story in category.stories" :key="story.storyTitle">
          <label v-bind:for="story.storyTitle">
            <input type="checkbox" class='toggle' v-model="story.completed" v-bind:name="story.storyTitle" v-bind:id="story.storyTitle">
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
            storyTitle: 'Click text to mark as done, click X to delete',
            completed: false
          },
          {
            storyTitle: 'Click+drag to reorder / move to another list',
            completed: false
          }]
        },
        {
          categoryName: 'Must',
          stories: []
        },
        {
          categoryName: 'Should',
          stories: []
        },
        {
          categoryName: 'Could',
          stories: []
        },
        {
          categoryName: 'Won\'t',
          stories: []
        }
      ]
    }
  },
  methods: {
    addStory: function (e) {
      this.categories[0].stories = [
        { storyTitle: this.newStory.storyTitle, completed: false },
        ...this.categories[0].stories
      ]
      this.newStory = {}
      e.preventDefault()
    },
    logData: function () {
      console.log(JSON.stringify(this.categories, null, 2))
    },
    deleteStory: function (category, story) {
      let categoryToDeleteFrom = this.categories[this.categories.indexOf(category)]
      categoryToDeleteFrom.stories.splice(
        categoryToDeleteFrom.stories.indexOf(story), 1
      )
    }
  }
}
</script>

<style scoped>

  * {
    box-sizing: border-box;
  }

  #addinput {
    font-size: 24px;
    padding: 10px;
    max-width: 400px;
    border: 1px solid lightblue;
  }

  #addinput:invalid {
    box-shadow: none;
  }

  #addsubmit {
    border: 2px solid grey;
    border-radius: 1px;
    height: 30px;
    background: none;
    font-size: 20px;
    width: 100px;
    margin-bottom: 20px;
  }

  #addsubmit:hover {
    border: 2px solid lightgreen;
    color: green;
  }

  #enter {
    padding: 5px;
  }

  .Unsorted h1 {
    display: none;
  }

  .Unsorted::before {
    content: "Unsorted items:";
    padding-top: 20px;
  }

  .drag {
    height: 100%;
    width: 100%;
    padding: 0px 20px 20px 20px;
  }

  .add,
  .category {
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border: 1px solid rosybrown;
    background: #FFF5DB;
    border-radius: 2px;
    margin: 10px;
    min-height: 100px;

    -webkit-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
    box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
  }

  .story {
    padding: 20px;
    margin: 3px;
    border: 1px solid burlywood;
    border-radius: 2px;
    overflow-wrap: true;
    position: relative;
    background-color: #FFFEFD;
    -webkit-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
box-shadow: 6px 6px 14px -5px rgba(0,0,0,0.75);
  }

  .grid-container {

    display: grid;
    grid-template-areas:
      "adds     must   "
      "unsorted should "
      "unsorted could  "
      "unsorted wont   ";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4,1fr);
  }

  @media only screen and (max-width : 890px){
    .grid-container {

      grid-template-areas:
        " adds     "
        " unsorted "
        " must     "
        " should   "
        " could    "
        " wont     ";
      grid-template-columns:  1fr ;
      grid-template-rows: auto;
      }
  }

  @media only screen and (min-width : 1450px){

    .grid-container {

      grid-template-areas:
        " adds     must   should"
        " unsorted could  wont  ";
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
    }
  }

  .Unsorted {grid-area: unsorted; }

  .add {grid-area: adds;}

  .Must {grid-area: must;}

  .Should {grid-area: should;}

  .Could {grid-area: could;}

  .Won\'t {grid-area: wont;}

  .delete {
    position: absolute;
    top:3px;
    right:3px;
    background: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  .delete:hover {
    background: pink
  }

  .completed {
    text-decoration: line-through;
    color: #32cd32;
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

  #log {
    display: none;
  }

</style>
