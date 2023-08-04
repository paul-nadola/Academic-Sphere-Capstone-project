import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';

function TeachersData() {
  return (
    <div>
        <div className='flex justify-around gap-10'>
        <button className='mt-4'>
            <Link
              to="/superadmin"
              className="flex items-center justify-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mr-4"
            >
              
              Back to Dashboard
            </Link>
            </button>

            <button className="mt-4">
            <Link
              to="/signin"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full text-center"
            >
              Sign Out
            </Link>
          </button>
        </div>
        <h1 className='text-xl font-bold'>Teachers Data Page</h1>
            <div class="w-82 mt-4 ml-4 mr-3">
            <table class="w-full table-auto bg-gray-400">
    <tr className='bg-gray-500'>
      <th className="border px-4 py-2">Username</th>
      <th className="border px-4 py-2">Email</th>
      <th className="border px-4 py-2">Password</th>
      <th className="border px-4 py-2">First Name</th>
      <th className="border px-4 py-2">Second Name</th>
      <th className="border px-4 py-2">D.O.B</th>
      <th className="border px-4 py-2">Address</th>
      <th className="border px-4 py-2">Phone Number</th>
      <th className="border px-4 py-2">Enrollment Date</th>
      <th className="border px-4 py-2">Department</th>
      <th className="border px-4 py-2">Course ID</th>
      <th className="border px-4 py-2">Teacher ID</th>
      <th className='border px-4 py-2'>Action</th>
    </tr>
    <tr class="even:bg-gray-300 odd:bg-white">
      <td className="border px-4 py-2">std69</td>
      <td className="border px-4 py-2">konde@student.abcschool.com</td>
      <td className="border px-4 py-2">1111</td>
      <td className="border px-4 py-2">Konde</td>
      <td className="border px-4 py-2">Buoy</td>
      <td className="border px-4 py-2">12th May 1995</td>
      <td className="border px-4 py-2">123 Mtwara</td>
      <td className="border px-4 py-2">0759411378</td>
      <td className="border px-4 py-2">31st August 2019</td>
      <td className="border px-4 py-2">2</td>
      <td className="border px-4 py-2">2</td>
      <td className="border px-4 py-2">2</td>
      <td className='border px-4 py-2'>
      <div class='flex flex-col'>
    <button class='py-2 mb-2 rounded-md'><AiOutlineEdit className='mr-2' /></button>
    <button class='py-2 mt-2 rounded-md'><AiOutlineDelete className='mr-2' /></button>
  </div>
      </td>
    </tr>
    <tr class="even:bg-gray-300 odd:bg-white">
      <td className="border px-4 py-2">std29</td>
      <td className="border px-4 py-2">kylian@student.abcschool.com</td>
      <td className="border px-4 py-2">2222</td>
      <td className="border px-4 py-2">Kylian</td>
      <td className="border px-4 py-2">Mbappe</td>
      <td className="border px-4 py-2">8th April 1998</td>
      <td className="border px-4 py-2">234 Paris</td>
      <td className="border px-4 py-2">0722296073</td>
      <td className="border px-4 py-2">1st August 2015</td>
      <td className="border px-4 py-2">3</td>
      <td className="border px-4 py-2">3</td>
      <td className="border px-4 py-2">2</td>
      <td className='border px-4 py-2'>
      <div class='flex flex-col'>
    <button class='py-2 mb-2 rounded-md'><AiOutlineEdit className='mr-2' /></button>
    <button class='py-2 mt-2 rounded-md'><AiOutlineDelete className='mr-2' /></button>
  </div>
      </td>
    </tr>
    <tr class="even:bg-gray-300 odd:bg-white">
      <td className="border px-4 py-2">std07</td>
      <td className="border px-4 py-2">lauren@student.abcschool.com</td>
      <td className="border px-4 py-2">3333</td>
      <td className="border px-4 py-2">Lauren</td>
      <td className="border px-4 py-2">James</td>
      <td className="border px-4 py-2">05th January 1990</td>
      <td className="border px-4 py-2">435 London</td>
      <td className="border px-4 py-2">0724468306</td>
      <td className="border px-4 py-2">25th January 2012</td>
      <td className="border px-4 py-2">1</td>
      <td className="border px-4 py-2">2</td>
      <td className="border px-4 py-2">2</td>
      <td className='border px-4 py-2'>
      <div class='flex flex-col'>
    <button class='py-2 mb-2 rounded-md'><AiOutlineEdit className='mr-2' /></button>
    <button class='py-2 mt-2 rounded-md'><AiOutlineDelete className='mr-2' /></button>
  </div>
      </td>
    </tr>
  </table>
            </div>
            <button class='bg-gray-500 py-2 mt-2 rounded-md'><AiOutlineUserAdd className='mr-2' />Add Teacher</button>
    </div>
  )
}

export default TeachersData