import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  const calendarRef = useRef();

  const handleEventReceive = (info) => {
    const eventObj = info.event;
    // Check if remove is checked
    const shouldRemove = document.querySelector('input[type="checkbox"]').checked;
    if (shouldRemove) {
      info.draggedEl.parentNode.removeChild(info.draggedEl);
    }
  };

  return (
    <div className="flex-1 bg-white p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-4">Calendar</h2>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        droppable={true}
        editable={true}
        selectable={true}
        eventReceive={handleEventReceive}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        events={[
          {
            title: 'Meeting',
            start: '2025-04-29T10:30:00',
            end: '2025-05-01T20:00:00',
            backgroundColor: '#22c55e',
          },
          {
            title: 'Birthday Party',
            start: '2025-05-02T19:00:00',
            end: '2025-05-02T19:30:00',
            backgroundColor: '#f97316',
          },
          {
            title: 'College P',
            start: '2025-05-05T10:00:00',
            end: '2025-05-05T10:30:00',
            backgroundColor: '#06b6d4',
          },
          {
            title: 'Break',
            start: '2025-05-13T16:00:00',
            end: '2025-05-13T20:00:00',
            backgroundColor: '#2563eb',
          },
        ]}
      />
    </div>
  );
};

export default Calendar;
