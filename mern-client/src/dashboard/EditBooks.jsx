import React , { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button,Select, TextInput ,Label, Textarea} from 'flowbite-react';
const EditBooks = () => {
const {id} = useParams();
const {bookTitle, authorName,imageUrl,category, bookDescription,bookPdfUrl}= useLoaderData();


const bookCaregories = [ "Fiction",
"Non-Fiction",
"Mistery",
"Programming",
"Scince Fiction",
"Fantasy",
"Horror",
"Bibliography",
"Autobiography",
"History",
"Self-help",
"Memoir",
"Business",
"children Books",
"Travel",
"Religion",]
const [selectedBookCategory,setSlectedBookCategory] = useState(bookCaregories[0]);

const handleChangeSelectedValue = (event) => {
    
    setSlectedBookCategory(event.target.value);
} 
const handleUpdate = (event) => {
  event.preventDefault();
  const form = event.target;
  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value; 
  const imageUrl = form.imageUrl.value; 
  const category = form.categoryName.value; 
  const bookDescription = form.bookDescription.value;
  const bookPdfUrl = form.bookPdfUrl.value;
  const uploadBookObj = {
    bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl
  }

  fetch(`http://localhost:5000/book/${id}`,{ method:"PATCH" , headers:{"Content-type":"application/json"},body:JSON.stringify(uploadBookObj)}).then(res => res.json()).then(data => {
    alert("Book is updated successfully");

  })
  

}
return (
<div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold'>Update Book</h2>
   
     <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        
     <div className='flex gap-8'>
     <div className='lg:w-1/2'>
    <div className="mb-2 block">
      <Label htmlFor="bookTitle" value="Book Title" />
    </div>
    <TextInput id="bookTitle"  name= 'bookTite' defaultValue={bookTitle} type="text" placeholder="Book Title" required />
  </div>
        <div className='lg:w-1/2'>
    <div className="mb-2 block">
      <Label htmlFor="authorName" value="Author Name" />
    </div>
    <TextInput id="authorName"  name= 'Author Name' defaultValue={authorName} type="text" placeholder="Author Name" required />
  </div>


</div>
<div className='flex gap-8'>
     <div className='lg:w-1/2'>
    <div className="mb-2 block">
      <Label htmlFor="imageUrl" value="Image URL" />
    </div>
    <TextInput id="imageUrl"  name= 'imageUrl' defaultValue={imageUrl} type="text" placeholder="Image URL" required />
  </div>
        <div className='lg:w-1/2'>
    <div className="mb-2 block">
      <Label htmlFor="inputState" value="Book Category" />
    </div>
    <Select id="inputState" name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue} >
    {

        bookCaregories.map((option)=> <option key={option} value={option}>{option}</option>)
    }
    

    </Select>
  </div>

  
</div>
<div>
    <div className="mb-2 block">
      <Label htmlFor="bookDescription" value="Book Description" />
    </div>
    <Textarea id="bookDescription" defaultValue={bookDescription} placeholder="write you description..." required rows={6} className='w-full'/>
  </div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
    </div>
    <TextInput id="bookPdfUrl" name='bookPdfUrl'defaultValue={bookPdfUrl} type="text" placeholder="book pdf url" required shadow />
  </div>
  
  <Button className='mt-5' type="submit">Update Book</Button>
</form>


</div>
)
}

export default EditBooks