<template>


  <div class="container">

    <p v-if="error.length">
            <b>Please correct the following errors </b>
            <ul>
                <li v-for="e in error" v-bind:key="e.name">
                    {{e}}
                </li>
            </ul>
        </p>

    <h1 class="mt-4 text-center">Customer Data</h1>


    <form @submit="onSubmit">


      <div class="form-group">
        <label for="name">Name : </label>
        <input
          type="text"
          placeholder="Enter name"
          v-model="person.name"
          class="form-control"
        /> <br> <br>
      </div>


      <div class="form-group">
        <label for="Contact">Contact : </label>
        <input
          type="tel"
          placeholder="Enter contact number"
          v-model="person.contact"
          v-on:keydown.enter.prevent
          class="form-control"
        /> <br><br>
      </div>

      <div class="form-group">
        <label for="Address">Address : </label>
        <input
          type="text"
          placeholder="Enter your Address"
          v-model="person.address"
          class="form-control"
        /> <br><br>
      </div>

      <div class="form-group">
        <label for="DOJ">Date of Joining : </label>
        <input
          type="date"
          placeholder="Enter Joining Date"
          v-model="person.DOJ"
          class="form-control"
        /> <br><br><br>
      </div>


      <button >
        AddRecord
      </button>
    </form>
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">Sr.</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Address</th>
          <th scope="col">DOJ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in personDetail" :key="index">
          <th scope="row">{{ ++index }}</th>
          <td>{{ person.name }}</td>
          <td>{{ person.contact }}</td>
          <td>{{person.address }}</td>
          <td>{{person.DOJ}}</td>

          <i class="bi bi-pencil-square" @click="edit(id)"></i> 
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"> 
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> 
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> 
          </svg>

        </tr>
      </tbody>
    </table>


    
  </div>
</template>



<script>
export default {
  name: "practice",
  //data: () => ({ name: "", Contact: "", Address: "", DOJ: "", alldata: [], error: [] }),

  data(){
        return {
            error: [],
            name: "", 
            contact: "", 
            Address: "", 
            DOJ: "",
            alldata: [],
            person: {
              name: '',
              contact: '',
              address: '',
              DOJ: ''
            },
            personDetail: []
        }
    },




  computed: {
    displayList: function() {
      return this.alldata.slice()
    },
  },
  methods: {

   

    onSubmit(e) 
    {
           
       e.preventDefault()
       
       const phone = /^\d{10}$/;
        console.log("error")
        if(!this.person.contact.match(phone))
        {
          alert("contact is not a valid");
          return;
        }

         this.error=[];

        if(!this.person.name)
        {
            this.error.push("Name required")
        }
        if(!this.person.contact && this.contact!==10)
        {
            this.error.push("invalid contact, number should be 10 digits")
        }
        if(!this.person.address)
        {
            this.error.push("Address required")
        }
        if(!this.person.DOJ)
        {
            this.error.push("DOJ required")
        }
     this.personDetail.push(this.person);

        // this.alldata.push({ 
        //   name: this.name, 
        //   contact: this.contact, 
        //   Address: this.Address, 
        //   DOJ: this.DOJ});

        this.clearForm()

        
    },

    clearForm() {
      this.name = "";
      this.contact = "",
      this.Address= "",
      this.DOJ= "";
      this.person = {
        name: '',
        address: '',
        contact: '',
        DOJ: ''
      }
    },
  },
};
</script>