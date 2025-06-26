import React from 'react';
import '../components/EventDialogueBox.css';
import { eventData } from '../constants/eventConstants';
import { ChevronRight } from 'lucide-react';


function EventDialogueBox({ showEventDialogueBox }) {
  return (
    <div className={`${showEventDialogueBox ? 'EventDialogueBoxMain': 'EventDialogueBoxMainHidden'}`}>
      <div className="EventDialogueBoxMainTitle">
        <p>Events</p>
      </div>
      <div className="EventDialogueBoxContent">
        {eventData &&
          eventData.map((event, index) => {
            return (
              <div className="EventDialogueBoxContentEvent" key={index}>
                <div className="EventDialogueBoxContentEventTitle">
                  <div>
                    <ChevronRight />
                  </div>
                  <p>{event.title}</p>
                </div>
                <div className="EventDialogueBoxContentEventDate">
                  <p>{event.date}</p>
                </div>
                <div className="EventDialogueBoxContentEventStartTime">
                  {event.startTime}
                </div>
                <div className="EventDialogueBoxContentEventEndTime">
                  {event.endTime}
                </div>
                <div className="EventDialogueBoxContentEventDesc">
                  {event.description}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default EventDialogueBox;
