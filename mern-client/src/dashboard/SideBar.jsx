import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiInbox, HiOutlineCloudUpload, HiTable } from 'react-icons/hi';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const SideBar = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div>
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* Update the onClick handler to navigate to the home page */}
            <Sidebar.Item onClick={() => navigate('/')} icon={HiArrowSmRight}>
              Go Back
            </Sidebar.Item>

            <Sidebar.Item href="/admin/dashboard/uploadBook" icon={HiOutlineCloudUpload}>
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
