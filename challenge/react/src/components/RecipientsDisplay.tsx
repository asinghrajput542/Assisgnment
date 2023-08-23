import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const RecipientsDisplay = ({ recipients }) => {
  const recipientWidth = 250; 

  const [availableWidth, setAvailableWidth] = useState(0)
//   const [recipientWidth,setRecipientWidth]= useState(0)
  const rowRef = useRef();
  console.log("availableWidth ",availableWidth)
      console.log("recipientWidth ", Math.round(availableWidth/2))
  const calculateVisibleRecipients = () => {
    const maxVisibleRecipients = Math.floor(availableWidth / recipientWidth);
    return recipients.slice(0, maxVisibleRecipients);
  };

  const visibleRecipients = calculateVisibleRecipients();
  const trimmedRecipientsCount = recipients.length - visibleRecipients.length;

  useEffect(() => {
    if (rowRef.current) {
      const CurAvailableWidth = rowRef.current?.offsetWidth;
      setAvailableWidth(CurAvailableWidth)
    
    }
  }, [])


  return (
    <div className="recipients-display" ref={rowRef}>
        
      {visibleRecipients.map((recipient) => (
       trimmedRecipientsCount>0? <span key={recipient}>{recipient}, ... </span>:<span key={recipient}>{recipient} </span>
      ))}
      {trimmedRecipientsCount > 0 && (
        <span className="badge">+{trimmedRecipientsCount}</span>
      )}
    </div>
  );
};

export default RecipientsDisplay;

