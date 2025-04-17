import { useState } from 'react';
import { Pen, Trash2, Plus, Bell, Newspaper, Search } from 'lucide-react';
import NewsNotificationModal from './NewsNotificationModal';

const ManageNewsNotification = () => {
  // Sample data
  const [items, setItems] = useState([
    {
      id: 1,
      description: 'Campus reopening announcement',
      type: 'Notification',
      createdAt: '2023-05-15',
    },
    {
      id: 2,
      description: 'Exam schedule updates',
      type: 'News',
      createdAt: '2023-05-10',
    },
    {
      id: 3,
      description: 'Holiday notice for Eid',
      type: 'Notification',
      createdAt: '2023-04-28',
    },
  ]);

  // State for modals and search
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    id: '',
    description: '',
    type: 'Notification',
    createdAt: new Date().toISOString().split('T')[0],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter items based on search term
  const filteredItems = items.filter(item => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.description.toLowerCase().includes(searchLower) ||
      item.type.toLowerCase().includes(searchLower)
    );
  });

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Handle add new item
  const handleAdd = () => {
    setCurrentItem({
      id: '',
      description: '',
      type: 'Notification',
      createdAt: new Date().toISOString().split('T')[0],
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  // Handle edit item
  const handleEdit = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Handle delete item
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing item
      setItems(items.map(item =>
        item.id === currentItem.id ? currentItem : item
      ));
    } else {
      // Add new item
      const newItem = {
        ...currentItem,
        id: Math.max(...items.map(i => i.id)) + 1
      };
      setItems([...items, newItem]);
    }

    setIsModalOpen(false);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({
      ...currentItem,
      [name]: value
    });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage News & Notifications</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 flex justify-between items-center bg-gray-50 border-b">
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add New
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {item.type === 'Notification' ? (
                        <>
                          <Bell className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-sm text-gray-900">Notification</span>
                        </>
                      ) : (
                        <>
                          <Newspaper className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-900">News</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(item.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-900 mr-3 flex items-center gap-1"
                    >
                      <Pen className="h-4 w-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-900 flex items-center gap-1"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      <NewsNotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        currentItem={currentItem}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
      />

    </div>
  );
};

export default ManageNewsNotification;