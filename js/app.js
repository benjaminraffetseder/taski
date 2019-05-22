new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
    darkSkin: false
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo, completed: false, removed: false });
      this.newTodo = "";
    },
    toggle() {
      this.darkSkin = !this.darkSkin;
    },
    wipe() {
      //   location.reload();
      this.todos = [];
      //   localStorage.clear();
      //   location.reload(true);
    }
  },
  mounted() {
    if (localStorage.getItem("todos"))
      this.todos = JSON.parse(localStorage.getItem("todos"));
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true
    }
  }
});

function refreshData() {
  var x = 10;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "." + dd + "." + yyyy;

  document.getElementById("date").innerHTML = today;

  console.log("run");

  setTimeout(refreshData, x * 1000);
}

refreshData();
