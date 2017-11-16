window.onload=function(){
	//Buttons 
	var quickAddBtn=document.getElementById("QuickAdd");
	var AddBtn=dcument.getElementById("Add");
	var CancelBtn=document.getElementById("Cancel");
	var quickAddFormDiv=document.querySelector('.quickAddForm');
	//
	document.getElementByClassName('quickaddForm')[0]

	//Form Fields
	var fullname=document.getElementById("fullname");
	var phone=document.getElementById("phone");
	var address=document.getElementById("address");
	var city=document.getElementById("city");
	var email=document.getElementById("email");

	// Address Book Display

	var addBookDiv=document.querySelector(".addBook");

	// Create Storage Array
	var addressBook=[];

	// Event Listeners
	quickAddBtn.AddEventlistener("click",function(){
	quickAddformDiv.style.display="block";

	});

	cancelBtn.AddEventListener("click",function(){
	quickAddFormDiv.style.display="none";
	});

	AddBtn.AddEventListener("click",addToBook);


	function
	jsonStructure(fullname,phone,address,city,email){
	this.fullname=fullname;
	this.phone=phone;
	this.address=address;
	this.city=city;
	this.email=email;

	}

	function addToBook(){
		var isNull=fullname.value!="&&phone.value!="&&address.value!="&&city.value!="&&email.value!=";
		if(isNull){
		// Add the contents of the form to the array & local storage
		var obj=new jsonStucture(fullname.value,phone.value,address.value,city.value,email.value)
		addressBookpush(obj);
		localstorage['addbook']=JSON.string(addressBook);
		// Hide the form panel

		quickAddformDiv.style.display="none"
			// Clear the form
			// Updating and Display all records in the addressook
			}
		}
	}
}