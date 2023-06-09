<template>
    <v-app>
      <v-card class="page">
        <v-card class="todoapp">
          <v-card-title class="header">
            <h1>Lista de Tarefas</h1>
            <v-text-field
              class="new-todo"
              autofocus
              placeholder="Adicione uma tarefa"
              @keyup.enter="addTodo"
            ></v-text-field>
          </v-card-title>
          <v-card-text class="main" v-show="todos.length">
            <v-checkbox
              id="toggle-all"
              class="toggle-all"
              v-model="allCompleted"
              @change="toggleAll"
              label="Marcar todos como concluído"
            ></v-checkbox>
            <ul class="todo-list">
                <li v-for="todo in filteredTodos" class="todo" :key="todo.id" :class="{ completed: todo.completed, editing: todo === editedTodo }">
                    <v-row align="center">
                    <v-col cols="10">
                        <v-checkbox v-model="todo.completed">
                            <template v-slot:label>{{ todo.title }}</template>
                        </v-checkbox>
                    </v-col>
                    <v-col cols="2">
                        <v-btn icon @click="removeTodo(todo)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-col>
                    </v-row>
                </li>
            </ul>
          </v-card-text>
          <v-card-actions class="footer" v-show="todos.length">
            <v-row align="center">
              <v-col cols="6">
                <v-btn-toggle v-model="visibility">
                  <v-btn text value="all" :class="{ selected: visibility === 'all' }">Todos</v-btn>
                  <v-btn text value="active" :class="{ selected: visibility === 'active' }">Ativos</v-btn>
                  <v-btn text value="completed" :class="{ selected: visibility === 'completed' }">Completos</v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col cols="6">
                <v-btn
                  class="clear-completed"
                  @click="removeCompleted"
                  v-show="todos.length > remaining"
                >
                  Limpar
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-app>
</template>

<script>
const STORAGE_KEY = 'vue-todomvc'

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed)
}

export default {
  data: () => ({
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
    editedTodo: null,
    visibility: 'all'
  }),

  watch: {
    todos: {
      handler(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
      },
      deep: true
    }
  },

  mounted() {
    window.addEventListener('hashchange', this.onHashChange)
    this.onHashChange()
  },

  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
    remaining() {
      return filters.active(this.todos).length
    }
  },

  methods: {
    toggleAll(e) {
      this.todos.forEach((todo) => (todo.completed = e.target.checked))
    },

    addTodo(e) {
      const value = e.target.value.trim()
      if (!value) {
        return
      }
      this.todos.push({
        id: Date.now(),
        title: value,
        completed: false
      })
      e.target.value = ''
    },

    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },

    editTodo(todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },

    doneEdit(todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },

    cancelEdit(todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache
    },

    removeCompleted() {
      this.todos = filters.active(this.todos)
    },

    onHashChange() {
      var visibility = window.location.hash.replace(/#\/?/, '')
      if (filters[visibility]) {
        this.visibility = visibility
      } else {
        window.location.hash = ''
        this.visibility = 'all'
      }
    }
  }
}
</script>
<style scoped>
.todoapp{
    width: 100vh;
    height: auto;
}

h1 {
    margin-bottom: 15px;
    margin-top: 15px;
}

li {
    list-style-type: none;
    margin-top: 15px;
}
</style>