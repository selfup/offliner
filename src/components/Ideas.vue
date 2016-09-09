<script>
  import Idea from './Idea.vue'
  import Search from './Search.vue'
  import InputIdea from './InputIdea.vue'

  export default {
    vuex: {
     getters: {
       helper: state => state.helper,
       ideas: state => state.ideas,
       title: state => state.title,
       body: state => state.body,
       searched: state => state.searched
     }
    },
    components: {
      'idea': Idea,
      'search': Search,
      'inputidea': InputIdea
    },
    computed: {
      emit() {
        return this.$store.dispatch
      }
    },
    methods: {
      addidea () {
        this.emit('ADD_IDEA')
      },
      updatetitle (event) {
        this.emit('UPDATE_TITLE', event.target.value)
      },
      updatebody (event) {
        this.emit('UPDATE_BODY', event.target.value)
      },
      removeidea (index) {
        this.emit('DELETE_IDEA', index)
      },
      clearallideas () {
        this.emit('CLEAR_ALL_IDEAS')
      },
      searchTermAndSearch(event) {
        const searchTerm = event.target.value.toLowerCase()
        this.search(searchTerm)
      },
      qualitydown (index) {
        this.emit('DOWN_QUALITY', index)
      },
      qualityup (index) {
        this.emit('UP_QUALITY', index)
      },
      sortbyquality () {
        if (this.helper.sortGenius) return this.emit('SORT_GENIUS')
        this.emit('SORT_SWILL')
      },
      reload () {
        this.emit('RELOAD')
      },
      matches (matchedIdeas) {
        this.emit('MATCH', matchedIdeas)
      },
      search (searchTerm) {
        if (searchTerm === '') return this.emit('RELOAD')
        this.matches(this.searchSegments.call(this, searchTerm))
      },
      searchSegments (term) {
        return this.ideas.filter(idea => {
          const { title, body } = idea
          if (this.check(title, term) || this.check(body, term)) return idea
        })
      },
      check (value, searchTerm) {
        return value.toLowerCase().includes(searchTerm)
      },
      updateidea (e, i) {
        const text = e.target.textContent.trim()
        if (e.target.className === 'idea-title') this.emit('EDIT_TILE', text, i)
        if (e.target.className === 'idea-body') this.emit('EDIT_BODY', text, i)
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="input-container container">
      <div class="sort-search-container container">
        <div v-if='ideas.length > 1 || searched'>
          <search
            :clearallideas='clearallideas'
            :sortbyquality='sortbyquality'
            :search='search'
            :searchTermAndSearch='searchTermAndSearch'
          >
          </search>
        </div>
        <div v-else>
          <h2>Idea Box in Vue.js!</h2>
        </div>
        <br>
      </div>
      <h4>Title</h4>
      <inputidea
        :title='title'
        :body='body'
        :updatetitle='updatetitle'
        :updatebody='updatebody'
        :addidea='addidea'
      >
      </inputidea>
    </div>
    <div v-for='(idea, index) in ideas'>
      <idea
        :index='index'
        :idea='idea'
        :qualityup='qualityup'
        :qualitydown='qualitydown'
        :removeidea='removeidea'
        :updateidea='updateidea'
      >
    </idea>
    </div>
  </div>
</template>

<style>
  button {
    border-radius: 25px;
    margin: 10px;
  }

  .btn {
    border-radius: 0px;
  }

  input {
    border-radius: 0px;
  }

  hr {
    width: 100%;
    border-color: grey;
  }

  .idea-container {
    background-color: #F2F4FF;
    margin-bottom: 5px;
    margin-top: 5px;
    width: 90%;
  }

  .idea-container h4, h5 {
    padding: 5px 0;
  }

  .input-container {
    background-color: #96C5F7;
    margin-bottom: 5px;
    margin-top: 5px;
    width: 90%;
  }

  .sort-search-container {
    background-color: #93ACB5;
    margin-bottom: 5px;
    margin-top: 10px;
    width: 90%;
  }

  .up {
    color: #5CB85C;
  }

  .down {
    color: #C9302C;
  }

  .topright {
    float: right;
    right: 16px;
    font-size: 18px;
    padding-left: 17px;
  }

  .topleftdown {
    float: left;
    left: 50px;
    font-size: 18px;
  }

  .topleft {
    float: left;
    left: 16px;
    font-size: 18px;
  }
</style>
