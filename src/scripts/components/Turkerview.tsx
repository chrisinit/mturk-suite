import React, { useEffect, useRef } from 'react';

import { TurkerviewIcon } from '../../components/TurkerviewIcon';
import { TurkerviewPopover } from '../containers/TurkerviewPopover';
import { injectPopover } from '../../utils/injectPopover';
import { PopoverButton } from './PopoverButton';
interface Props {
  requester_id: string;
  requester_name: string;
}

export function Turkerview({ requester_id, requester_name }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    injectPopover(ref, `${requester_name} [${requester_id}]`, <TurkerviewPopover requester_id={requester_id} />);
  }, []);

  return (
    <PopoverButton>
      <TurkerviewIcon />
      <script ref={ref} />
    </PopoverButton>
  );
}
