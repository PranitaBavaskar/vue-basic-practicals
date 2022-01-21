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
          id="t_name"
          placeholder="Enter name"
          v-model="person.name"
          class="form-control"
        /> <br> <br>
      </div>


      <div class="form-group">
        <label for="Contact">Contact : </label>
        <input
          type="tel"
          id="t_contact"
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
          id="t_address"
          placeholder="Enter your Address"
          v-model="person.address"
          class="form-control"
        /> <br><br>
      </div>

      <div class="form-group">
        <label for="DOJ">Date of Joining : </label>
        <input
          type="date"
          id="t_DOJ"
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
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>


        </tr>
      </thead>
      <tbody>

        
        <template v-for="(person, index) in personDetail">

        <tr v-if="person.isEditAble" :key="index">
           {{ person.srno = index+1 }} 
                     <!-- {{ person.isEditAble }} -->

          <!--<th scope="row">{{ person.srno = ++index }}</th>-->
          <td>{{person.name}}</td>
          <td>{{person.contact}}</td>
          <td>{{person.address}}</td>
          <td>{{person.DOJ}}</td>

          <td>
            <input type="button" 
                    
                   id="edit_button index" 
                   value="edit/save"
                   class="edit"
                   @click="person.isEditAble= false">
          </td>
          <td>
            <input type="button" 
                   id="deletebtn" 
                   value="delete"
                   class="delete"
                   @click=delete_row(index)>
          </td>

        </tr>





<tr v-else v-bind:key="index">
           {{ index+1 }} 
          <!--<th scope="row">{{ person.srno = ++index }}</th>-->
         <td><input type="text" v-model="person.name"></td>
          <td><input type="text" v-model="person.contact" ></td>
          <td><input type="text" v-model="person.address" ></td>
          <td><input type="text" v-model="person.DOJ"></td>


          <td>
            <input type="button" 
                    
                   id="edit_button index" 
                   value="edit/save"
                   class="edit"
                   @click=" person.isEditAble = true">
          </td>
          <td>
            <input type="button" 
                   id="deletebtn" 
                   value="delete"
                   class="delete"
                   @click=delete_row(index)>
          </td>

        </tr>
        </template>
      </tbody>

    </table>


    
  </div>
</template>



<script>

export default {
  name: "dynamicTable",
  //data: () => ({ name: "", Contact: "", Address: "", DOJ: "", alldata: [], error: [] }),

  data(){
    
        return {
            error: [],
            person: {
              name: '',
              contact: '',
              address: '',
              DOJ: '',
              isEditAble: true
            },
            personDetail: []
        }
    },


    displayList: function() {
      return this.alldata.slice()
    },
  
  methods: {

    delete_row(index){
      this.personDetail.splice(index,1);
      index--;
    },
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


        this.clearForm()

        
    },



    clearForm() {
      this.person = {
        srno:"",
        name: '',
        address: '',
        contact: '',
        DOJ: '',
        isEditAble: true
      }
    },

  
    userAddress (newValue) {
      this.person.address = newValue;
    }
  }



  

  

};
</script>