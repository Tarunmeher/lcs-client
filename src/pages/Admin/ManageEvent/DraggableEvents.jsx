import React, { useEffect } from 'react';
import { Draggable } from '@fullcalendar/interaction';

const events = [
  { title: 'Work', bgColor: 'bg-green-500' },
  { title: 'Personal', bgColor: 'bg-orange-400' },
  { title: 'Important', bgColor: 'bg-blue-600' },
  { title: 'Travel', bgColor: 'bg-red-500' },
  { title: 'Friends', bgColor: 'bg-cyan-400' },
];

const DraggableEvents = () => {
  useEffect(() => {
    new Draggable(document.getElementById('external-events'), {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        return {
          title: eventEl.innerText,
          backgroundColor: eventEl.getAttribute('data-color'),
          borderColor: eventEl.getAttribute('data-color'),
        };
      },
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow w-64 h-fit" id="external-events">
      <h2 className="font-bold text-lg mb-4">Draggable Event</h2>
      {events.map((e, idx) => (
        <div
          key={idx}
          className={`fc-event text-white px-2 py-1 rounded mb-2 cursor-pointer ${e.bgColor}`}
          data-color={e.bgColor.replace('bg-', '')}
        >
          {e.title}
        </div>
      ))}
      <label className="mt-4 inline-flex items-center text-sm">
        <input type="checkbox" className="mr-2" />
        Remove after drop
      </label>
    </div>
  );
};

export default DraggableEvents;
