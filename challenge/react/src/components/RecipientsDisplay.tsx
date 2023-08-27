import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components'

type RecipientsDisplayType = {
  recipients: string[];
}

const RecipientsDisplay = (props: RecipientsDisplayType) => {
  const { recipients } = props;
  const recipientWidth = 150; 

  const [availableWidth, setAvailableWidth] = useState<number>(0)
  const rowRef = useRef<HTMLDivElement>(null);
  const calculateVisibleRecipients = () => {
    const maxVisibleRecipients = Math.floor(availableWidth / recipientWidth);
    return recipients.slice(0, maxVisibleRecipients);
  };

  const visibleRecipients = calculateVisibleRecipients();
  const trimmedRecipientsCount = recipients.length - visibleRecipients.length;

  useEffect(() => {
    console.log("Hanjiii ",rowRef.current?.offsetParent)
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

 styled(RecipientsDisplay)`
  
  .badge {
    font-size: 16px;
    color: #f0f0f0;
    background-color: #666666;
    border-radius: 3px;
    padding: 2px 5px;
    display: inline-block;
  }
  .recipients-display{
    font-size: 16px;
    color: #333333;
    padding: 5px 10px;
  }
  
`