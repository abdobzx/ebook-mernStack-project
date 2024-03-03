import React, { useState } from 'react'
import { Button,Select, TextInput ,Label, Textarea} from 'flowbite-react';
const UploadBook = () => {
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
        //console.log(event.target.value)
        setSlectedBookCategory(event.target.value);
    } 
    const handleBookSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value; 
      const imageUrl = form.imageUrl.value; 
      const category = form.categoryName.value; 
      const bookDescription = form.bookDescription.value;
      const bookPdfUrl = form.bookPdfUrl.value;
      console.log(bookTitle)
      const bookObj = {
        bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl
      }
      fetch("http://localhost:5000/upload-book",{
        method: "POST",
        headers: {
          "Content-type":"application/json",
        },
        body: JSON.stringify(bookObj)
      }).then(res => res.json()).then(data => {
        alert("Book upload successfully");

      })
    }
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
       
         <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
            
         <div className='flex gap-8'>
         <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle"  name= 'bookTite' type="text" placeholder="Book Title" required />
      </div>
            <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName"  name= 'Author Name' type="text" placeholder="Author Name" required />
      </div>


    </div>
    <div className='flex gap-8'>
         <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Image URL" />
        </div>
        <TextInput id="imageUrl"  name= 'imageUrl' type="text" placeholder="Image URL" required />
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
        <Textarea id="bookDescription" placeholder="write you description..." required rows={6} className='w-full'/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
        </div>
        <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="book pdf url" required shadow />
      </div>
      
      <Button className='mt-5' type="submit">Upload Book</Button>
    </form>


</div>
  )
}

export default UploadBook