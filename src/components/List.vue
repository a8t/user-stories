<template>
  <div class="grid-container">
    <button id="log" v-on:click="logData()"></button>
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
            storyTitle: 'Add a new story to give me a buddy!',
            completed: false
          }]
        },
        {
          categoryName: 'Must',
          stories: [{
            storyTitle: 'Click on my text to mark me as complete!',
            completed: false
          }]
        },
        {
          categoryName: 'Should',
          stories: [{
            storyTitle: 'Click on the X to delete me!',
            completed: false
          }]
        },
        {
          categoryName: 'Could',
          stories: [{
            storyTitle: 'Click and drag to change our order!',
            completed: false
          },
          {
            storyTitle: 'Reorder us!',
            completed: false
          }]
        },
        {
          categoryName: 'Won\'t',
          stories: [
            {
              storyTitle: 'Drag me to another section and then put me back!',
              completed: false
            }
          ]
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
  .grid-container {
    display: grid;
    grid-template-areas: 
      "a adds     must   "
      "a unsorted should "
      "a unsorted could  "
      "a unsorted wont   ";
    grid-template-columns: 50px 400px 1fr;
    grid-template-rows: auto;

  
  }

  
  .Unsorted>h1 {
    display: none;
  }


  @media only screen and (max-width : 920px){
      
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

    .Unsorted {
      border-bottom: 2px solid grey;
      padding: 20px;
      margin: 20px;
    }

    
  }

  @media only screen and (min-width : 1450px){
      
    .grid-container {

      grid-template-areas: 
        "a adds     must   should"
        "a unsorted could  wont  ";
      grid-template-columns: 100px 400px 1fr 1fr;
      grid-template-rows: auto;
    }
  }

  .add {
    grid-area: adds;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #addinput {
    box-sizing: -box;
    font-size: 24px;
    padding: 10px;
    width: 400px;
  }

  #addinput:invalid {
    box-shadow: none;
  }

  #log {
    display: none;
  }

  #addsubmit {
    border: 2px solid grey;
    border-radius: 1px;
    height: 30px;
    background: none;
    font-size: 20px;
    width: 100px;
    
  }

  #addsubmit:hover {
    border: 2px solid lightgreen;
    color: green;
  }

  .Unsorted {
    grid-area: unsorted;
    align-self: flex-start;
  }

  
  .Unsorted::before {
    content: "Unsorted items:";
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

  

  .drag,
  .category {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100px;   
    position: relative;
    min-width: 200px; 
  }

  .story {
    /* display: flex; */
    list-style: none;
    width: 400px;
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
